import TutorialShell from "../TutorialShell";
import TutorialContent from "@/components/TutorialContent";

const html = `
<h1 id="undulatory-propulsion-on-land">Undulatory propulsion on land</h1>

<p>In this final tutorial we combine the techniques from the series and apply them to locomotion
by an active filament (snake). The problem is solved by
<a href="https://www.pnas.org/doi/pdf/10.1073/pnas.0705442105" target="_blank" rel="noopener noreferrer">Guo &amp; Mahadevan, PNAS 2007</a>.
The governing equations for the body centreline are:
\\[\\begin{aligned}
  x_s =&amp; \\ \\cos\\theta, \\\\
  y_s =&amp; \\ \\sin\\theta, \\\\
  \\theta_s =&amp; \\ \\kappa, \\\\
  T_s =&amp; \\ \\mu_w + \\mu_p\\,\\text{Pr}|\\sin\\theta| - \\text{Mo}\\tfrac{\\cos(2\\pi s)}{2\\pi}
        - \\text{Be}\\,\\kappa_s\\kappa - \\text{Vi}\\,\\kappa_{ss}\\kappa, \\\\
  0 =&amp; \\ -\\text{Pr}\\sin\\theta + \\text{Mo}\\sin(2\\pi s) + \\kappa T
       - \\text{Be}\\,\\kappa_{ss} - \\text{Vi}\\,\\kappa_{sss}.
\\end{aligned}\\]
Parameters: Pr, Mo, Be, Vi, \\(\\mu_w\\), \\(\\mu_p\\).</p>

<p>Boundary conditions are mixed Dirichlet and periodic:
\\(x(0)=y(0)=y(1)=\\theta(0)=\\theta(1)=0\\) and
\\(T(0)=T(1),\\; \\kappa(0)=\\kappa(1),\\; \\kappa_s(0)=\\kappa_s(1)\\).</p>

<h2>Solution strategy</h2>

<p>The problem is too hard to solve in one shot, so we split into two parts:</p>
<ul>
<li><strong>Part 1</strong> — Enforce most but not all periodic BCs; continue from an accessible
trivial solution to the neighbourhood of interest along one parameter (Mo).</li>
<li><strong>Part 2</strong> — Use homotopy continuation to asymptotically satisfy the remaining
BC \\(\\kappa_s(0)=\\kappa_s(1)\\) via a new parameter
\\(\\texttt{PAR(8)}\\): \\(\\kappa_s(0)-\\kappa_s(1)+\\texttt{PAR(8)}=0\\).
When \\(\\texttt{PAR(8)}\\to 0\\) the BC is exactly satisfied.</li>
</ul>

<p>Steps in <code>Snake.auto</code>:</p>
<ul>
<li>Initialise: \\(x(s)=s\\), all other fields zero.</li>
<li>Start near Guo &amp; Mahadevan parameters: Pr=0.18, Mo=0.0, Be=0.4, Vi=1.0, \\(\\mu_w=0\\), \\(\\mu_p=0.2\\).</li>
<li>Enforce Dirichlet + partial periodic BCs (skip \\(\\kappa_s\\) BC); continue along Mo.</li>
<li>Pin solution with \\(\\lambda\\):
\\[\\begin{aligned}
  T_s =&amp; \\ \\cdots - \\lambda T, \\\\
  0 =&amp; \\ \\cdots - \\lambda\\kappa,
\\end{aligned}\\]
then continue \\(\\lambda\\to 0\\).</li>
<li>Adjust \\(\\mu_w\\), then Vi to reach paper parameters.</li>
<li>Enforce last BC via PAR(8) continuation, then vary Vi with Mo as free parameter to
  reproduce the Mo–Vi curve from the paper.</li>
</ul>

<p><img src="/figs/auto07p/fig5.jpeg" alt="Snake undulatory locomotion result" /></p>
`;

export default function SnakePage() {
  return (
    <TutorialShell currentIndex={5}>
      <TutorialContent html={html} mathType="mathjax" />
    </TutorialShell>
  );
}
