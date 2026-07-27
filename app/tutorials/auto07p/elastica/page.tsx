import TutorialShell from "../TutorialShell";
import TutorialContent from "@/components/TutorialContent";

const html = `
<h1 id="bending-of-an-elastica">Bending of an <em>elastica</em></h1>

<p>Before we start the tutorial, note that <code>auto-07p</code> codes for all examples are
available at this <a href="https://github.com/sgangaprasath/autoTutorial" target="_blank" rel="noopener noreferrer">link</a>.
The first problem is the deformation of an inextensible slender filament known as the
<em>elastica</em>. We solve this in 2D where the structure can be represented using curvature
information along the filament. We consider an elastica hinged at one end while the other
experiences a point force <span class="math inline">\\vec{p}= (p_x, p_y)</span>. The elastic
energy under an externally applied point force is</p>

<span class="math display">\\begin{aligned}
  \\mathcal{E}=&amp; \\ \\underbrace{\\frac{1}{2} \\int_0^L B \\kappa^2(s) \\ \\text{d}s}_{\\text{Bending energy}}
  - \\underbrace{\\int_0^L (p_x \\cos \\psi + p_y \\sin \\psi) \\ \\text{d}s}_{\\text{Potential energy}}.
\\end{aligned}</span>

<p>Here <span class="math inline">s</span> is the arc-length. Extremising this energy gives
the Euler–Lagrange equation</p>

<span class="math display">B \\psi''(s) - p_x \\sin \\psi + p_y \\cos \\psi = 0.</span>

<p>After non-dimensionalisation using <span class="math inline">L</span> as the length-scale
and <span class="math inline">(B/L)</span> as the energy scale we get
<span class="math inline">\\psi''(s) - p_x \\sin \\psi + p_y \\cos \\psi = 0</span> with
boundary conditions <span class="math inline">u_1(0) = u_2(1) = x(0) = y(0) = 0</span>.
Setting <span class="math inline">u_1 = \\psi(s), u_2 = \\psi'(s)</span>:</p>

<span class="math display">\\begin{aligned}
  u_1' =&amp; \\ u_2,\\\\
  u_2' =&amp; \\ p_x \\sin u_1 + p_y \\cos u_1.
\\end{aligned}</span>

<h2 id="constants-scripts">Constants, <code>*.f90/*.c</code>, Scripts</h2>

<p>For each problem in <code>auto-07p</code> there are at least 3 required files:
<span class="math inline">(i)</span> the constant file (<code>c.*</code>),
<span class="math inline">(ii)</span> a FORTRAN/C file with the governing equations and
boundary conditions, and <span class="math inline">(iii)</span> a Python script
(<code>.auto</code>) that runs <code>auto-07p</code> and steers the continuation.</p>

<table>
<caption>Key <code>auto-07p</code> constants for the elastica problem.</caption>
<thead>
<tr><th>Constant</th><th>Description</th><th>Value (elastica)</th></tr>
</thead>
<tbody>
<tr><td><code>ICP</code></td><td>Continuation parameters</td><td><span class="math inline">p_x / p_y</span></td></tr>
<tr><td><code>NPAR</code></td><td>Number of parameters</td><td>4</td></tr>
<tr><td><code>IPS</code></td><td>Type of problem</td><td>4 for BVPs</td></tr>
<tr><td><code>ISP</code></td><td>Bifurcation detection</td><td>2 — all kinds</td></tr>
<tr><td><code>NBC</code></td><td>Number of boundary conditions</td><td>4</td></tr>
<tr><td><code>ISW</code></td><td>Branch-switching mode</td><td>1 normal, −1 switch</td></tr>
<tr><td><code>UZSTOP</code></td><td>Parameter range</td><td><span class="math inline">p_x \\in [-80, 20]</span></td></tr>
<tr><td><code>NPR</code></td><td>Save every NPR steps</td><td>20</td></tr>
</tbody>
</table>

<p><img src="/figs/auto07p/fig2.jpeg" alt="Elastica bifurcation diagram" /></p>

<p>The Python script <code>etica.auto</code> runs and finds the bifurcation diagram:</p>

<div class="sourceCode"><pre class="sourceCode python"><code class="sourceCode python"><span class="co"># Load files c.etica and etica.f90</span>
etica <span class="op">=</span> load(<span class="st">&#39;etica&#39;</span>)
mu <span class="op">=</span> run(etica)
mu <span class="op">=</span> mu <span class="op">+</span> run(mu, DS<span class="op">=</span><span class="st">&#39;-&#39;</span>)
mu <span class="op">=</span> mu <span class="op">+</span> run(mu(<span class="st">&#39;BP1&#39;</span>), ISW<span class="op">=-</span><span class="dv">1</span>)
mu <span class="op">=</span> mu <span class="op">+</span> run(mu(<span class="st">&#39;BP1&#39;</span>), DS<span class="op">=</span><span class="st">&#39;-&#39;</span>, ISW<span class="op">=-</span><span class="dv">1</span>)
mu <span class="op">=</span> mu <span class="op">+</span> run(mu(<span class="st">&#39;BP2&#39;</span>), ISW<span class="op">=-</span><span class="dv">1</span>)
mu <span class="op">=</span> mu <span class="op">+</span> run(mu(<span class="st">&#39;BP2&#39;</span>), DS<span class="op">=</span><span class="st">&#39;-&#39;</span>, ISW<span class="op">=-</span><span class="dv">1</span>)
mu <span class="op">=</span> mu <span class="op">+</span> run(mu(<span class="st">&#39;BP3&#39;</span>), ISW<span class="op">=-</span><span class="dv">1</span>)
mu <span class="op">=</span> mu <span class="op">+</span> run(mu(<span class="st">&#39;BP3&#39;</span>), DS<span class="op">=</span><span class="st">&#39;-&#39;</span>, ISW<span class="op">=-</span><span class="dv">1</span>)
mu <span class="op">=</span> relabel(mu)
save(mu, <span class="st">&#39;mu&#39;</span>)
p <span class="op">=</span> plot(mu)
p.config(bifurcation_y<span class="op">=</span>[<span class="st">&#39;psi(1)&#39;</span>])
clean()
wait()</code></pre></div>

<p>Running <code>auto etica.auto</code> continues from <span class="math inline">p_x = 0</span>
in both directions. Three bifurcation points (<code>BP1</code>, <code>BP2</code>, <code>BP3</code>)
are found and branch-switched using <code>ISW=-1</code>, tracing bent elastica configurations.
Results are saved as <code>b.mu, s.mu, d.mu</code>; solutions are post-processed via
<code>pandas</code> in
<a href="https://github.com/sgangaprasath/autoTutorial/blob/main/Tutorial1_Elastica/withoutDefect/plotElastica.ipynb"
   target="_blank" rel="noopener noreferrer"><code>plotElastica.ipynb</code></a>.</p>

<p>The format of the output file (from
<a href="https://depts.washington.edu/bdecon/workshop2012/f_stability.pdf"
   target="_blank" rel="noopener noreferrer">this reference</a>) is shown below:</p>

<p><img src="/figs/auto07p/OutputFile.jpeg" alt="auto-07p output file format" /></p>
`;

export default function ElasticaPage() {
  return (
    <TutorialShell currentIndex={2}>
      <TutorialContent html={html} mathType="katex" />
    </TutorialShell>
  );
}
