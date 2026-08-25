# Writing blog posts in the Tufte layout

Blog posts live in `blog/*.md` and are rendered by `app/blog/[slug]/page.tsx`
using the styles in `app/blog/[slug]/tufte.css`.

The layout is a wide left text column (55% of the page) with the remaining
right-hand space reserved as a **margin** for notes, captions and asides. On
screens narrower than 1100px the margin collapses and notes appear inline.

Nothing you already write needs to change — existing posts render as-is. The
features below are opt-in.

---

## Front matter

Unchanged:

```yaml
---
title: "Bridges between distributions"
subtitle: "A primer on the Schrödinger Bridge Problem."
date: "2026-03-16"
category: "Primer"        # Tutorial | Primer | Blog | Rant
author: "Ananthanarayanan R"
desig: "PhD Student"
image: "/images/profile.svg"
author2: "..."            # optional second author
desig2: "..."
image2: "..."
---
```

`date` is displayed as "16 March 2026". `category` shows as a coloured pill
above the title, matching the tag on the blog index.

Use `#` headings for **sections** inside the post — the title comes from front
matter, so don't repeat it in the body.

---

## Margin notes

An unnumbered aside — the workhorse. Good for captions, references, and
"by the way" remarks:

```html
Optimal transport is the older idea here.
<span class="marginnote">Monge posed it in 1781; Kantorovich gave it the
linear-programming form we use today.</span>
```

A numbered sidenote — two spans, the number is generated automatically by CSS
counters, so you never renumber anything by hand:

```html
The bridge is the most likely path between the two measurements.<span
class="sidenote-number"></span><span class="sidenote">Most likely in the sense
of relative entropy against the reference process.</span>
```

Put the note markup **right after** the word it attaches to, inside the same
paragraph.

---

## Figures

By default images sit inside the text column. To let a figure span the full
width — text column plus margin — add `fullwidth`:

```html
<div class="fullwidth">
  <img src="/images/rocket_landing.gif" alt="Rocket landing" />
</div>
```

For a proper caption in the margin:

```html
<figure>
  <img src="/images/sbp.png" alt="Schrödinger bridge" />
  <span class="marginnote">Trajectories sampled from the bridge between two
  Gaussians.</span>
</figure>
```

Or a caption underneath:

```html
<figure>
  <img src="/images/sbp.png" alt="Schrödinger bridge" />
  <figcaption>Trajectories sampled from the bridge.</figcaption>
</figure>
```

---

## Other bits

**Opening flourish** — small caps for the first few words of a section:

```html
<span class="newthought">In the 1960s</span>, industrial processes had grown
too complex for traditional control.
```

**Epigraph** — a quotation opening the piece:

```html
<div class="epigraph">
  <blockquote>
    <p>The commonality between science and art is in trying to see profoundly.</p>
    <footer>Edward Tufte</footer>
  </blockquote>
</div>
```

**Math** works exactly as before — `$...$` inline and `$$...$$` display, via
`remark-math` + KaTeX.

**Tables** get horizontal rules only, in the Tufte manner; write them as normal
markdown tables.
