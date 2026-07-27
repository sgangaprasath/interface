import TutorialShell from "../TutorialShell";
import TutorialContent from "@/components/TutorialContent";

const html = `
<h1 id="auto-07p-framework"><code>auto-07p</code> framework</h1>
<p>The framework that we use to solve elastic instability problems has 3 major steps.</p>
<ol>
<li><p>To identify the model equations that describe the deformation field in elastic structure,
derived either phenomenologically or from first principles. This is the part that captures
the physics of the problem.</p></li>
<li><p>Using <code>auto-07p</code> to solve the system with the appropriate boundary conditions
and continue the solution along a physical parameter in the system to see if the morphology
changes with this parameter. <code>auto-07p</code> accepts first-order differential equations
of the form
<span class="math display">u&#39;(t) = f(u(t), p), \\quad f(.,.), u(.) \\in \\text{R}^n,</span>
where <span class="math inline">p</span> are the parameters in the problem. If we have a
higher-order system, we need to convert and represent it in this form.
<code>auto-07p</code> finds solutions to these equations (i.e. <span class="math inline">f(u(t),p)=0</span>)
and continues along different parameters <span class="math inline">p</span> in the model.
We then post-process the output files to understand the results.</p></li>
<li><p>Of course, the last step is to interpret the results and compare with experiments if any.
Then go back to step <span class="math inline">(i)</span> if there is a mismatch.</p></li>
</ol>
<p>The step I will be focusing on in these tutorials is <span class="math inline">(ii)</span>
where we assume that the equations are already available. We will extract the bifurcation
diagram and plot the solution files.</p>
<p><img src="/figs/auto07p/fig1.jpeg" alt="auto-07p framework overview" /></p>
`;

export default function FrameworkPage() {
  return (
    <TutorialShell currentIndex={1}>
      <TutorialContent html={html} mathType="katex" />
    </TutorialShell>
  );
}
