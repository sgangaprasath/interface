"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

type KatexWin = Window & { katex?: { render(tex: string, el: HTMLElement, opts: object): void } };
type MathJaxWin = Window & { MathJax?: { typeset?(): void; typesetPromise?(): Promise<void> } };

interface TutorialContentProps {
  html: string;
  mathType?: "katex" | "mathjax";
}

export default function TutorialContent({ html, mathType }: TutorialContentProps) {
  const ref = useRef<HTMLDivElement>(null);

  function renderKatex() {
    const win = window as KatexWin;
    if (!win.katex || !ref.current) return;
    ref.current.querySelectorAll<HTMLElement>("span.math").forEach((el) => {
      // Skip elements that have already been rendered by KaTeX to prevent
      // double-rendering (e.g. onLoad fires before useEffect, or Strict Mode).
      if (el.querySelector(".katex")) return;
      const tex = el.textContent ?? "";
      const display = el.classList.contains("display");
      try { win.katex!.render(tex, el, { displayMode: display, throwOnError: false }); }
      catch (_) { /* keep raw text if render fails */ }
    });
  }

  function renderMathJax() {
    const win = window as MathJaxWin;
    if (!win.MathJax) return;
    // MathJax 3 tracks what it has already typeset, so calling this repeatedly is safe.
    try { win.MathJax.typesetPromise?.() ?? win.MathJax.typeset?.(); }
    catch (_) {}
  }

  // useEffect covers client-side navigation: the CDN script stays cached after
  // the first load so onLoad never fires again, but the math still needs rendering.
  useEffect(() => {
    if (mathType === "katex") renderKatex();
    else if (mathType === "mathjax") renderMathJax();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="tutorial-prose w-full">
      {mathType === "katex" && (
        <>
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css"
          />
          {/* onLoad covers the very first load; useEffect covers every nav after that */}
          <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js"
            strategy="afterInteractive"
            onLoad={renderKatex}
          />
        </>
      )}
      {mathType === "mathjax" && (
        <Script
          id="mathjax-script"
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"
          strategy="afterInteractive"
          onLoad={renderMathJax}
        />
      )}
      <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
