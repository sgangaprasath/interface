import TutorialShell from "../TutorialShell";
import TutorialContent from "@/components/TutorialContent";

const html = `
<h1 id="buckling-of-a-sheet">Buckling of a sheet</h1>

<p>The Föppl–von Kármán (FvK) equations in 2D capture the buckling of a sheet/strip/beam.
The morphology is described by the in-plane displacement <span class="math inline">u(x)</span>
and the out-of-plane displacement <span class="math inline">w(x)</span>. The governing equations
are</p>

<span class="math display">\\begin{aligned}
  S (u_{xx} + w_{x} w_{xx}) + f =&amp; \\ 0, \\\\
  -B w_{xxxx} + S [ w_{x} u_{xx} + \\tfrac{1}{2} w_{xx} (2 u_{x} + 3 w_{x}^2) ] + p =&amp; \\ 0.
\\end{aligned}</span>

<p>Here <span class="math inline">S = E\\xi</span> is the stretching modulus,
<span class="math inline">B = EI</span> the bending modulus,
<span class="math inline">f</span> and <span class="math inline">p</span> external forces
per unit length.</p>

<p><img src="/figs/auto07p/fig3.jpeg" alt="FvK sheet buckling" /></p>

<p>Non-dimensionalising with body length <span class="math inline">L</span> and Young's
modulus <span class="math inline">E</span> as scales (using
<span class="math inline">S \\sim E\\xi,\\ B \\sim E\\xi^3</span>):</p>

<span class="math display">\\begin{aligned}
  (d_{ss} + h_{s} h_{ss}) + \\mathsf{f} =&amp; \\ 0, \\\\
  -K h_{ssss} + h_{s} d_{ss} + \\tfrac{1}{2} h_{ss}(2 d_{s} + 3 h_{s}^2) + \\mathsf{p} =&amp; \\ 0,
\\end{aligned}</span>

<p>where <span class="math inline">K = (\\xi/L)^2</span> is the von Kármán number and
<span class="math inline">\\mathsf{f}, \\mathsf{p}</span> are non-dimensional forces.
Boundary conditions: fixed ends <span class="math inline">d|_0 = h|_0^1 = 0</span>;
zero moments <span class="math inline">h_{ss}|_0^1 = 0</span>; applied tangential strain
<span class="math inline">d_s|_1 = -\\alpha</span>.</p>

<p>The leverage of the <code>.auto</code> script is that we can steer the continuation by
varying different parameters. After branch-switching with <code>ISW=-1</code> to the buckled
branch, we can change the continuation parameter to <span class="math inline">K</span> and
then to both <span class="math inline">(K,\\alpha)</span> simultaneously using
<code>ICP</code> and <code>UZSTOP</code>. The constraint
<code>NCONT = NBC + NINT - NDIM + 1</code> (<code>NBC=6, NDIM=6</code>) requires one
integral constraint for two-parameter continuation. The result is isocontours in the
<span class="math inline">(K,\\alpha)</span>-plane representing distinct morphologies.
Code is in
<a href="https://github.com/sgangaprasath/autoTutorial/tree/main/Tutorial2_FvK"
   target="_blank" rel="noopener noreferrer"><code>Tutorial2_FvK</code></a>.</p>

<p><img src="/figs/auto07p/2param.png" alt="Two-parameter continuation result" style="max-width:50%" /></p>
`;

export default function FvkPage() {
  return (
    <TutorialShell currentIndex={3}>
      <TutorialContent html={html} mathType="katex" />
    </TutorialShell>
  );
}
