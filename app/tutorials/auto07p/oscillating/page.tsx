import TutorialShell from "../TutorialShell";
import TutorialContent from "@/components/TutorialContent";

const html = `
<h1 id="oscillating-beam">Oscillating beam</h1>

<p>The small-deflection morphology of an elastic beam is governed by the Euler–Bernoulli equation:
\\[\\alpha w_{tt} = - B w_{xxxx} + p.\\]
Here \\(w(x)\\) is the vertical displacement, \\(\\alpha\\) is the mass per unit length,
\\(B = EI \\sim E\\xi^4\\) is the bending modulus, \\(E\\) the Young's modulus, \\(I\\) the
second moment of area, \\(\\xi\\) the beam thickness, and \\(p\\) the body force per unit length.</p>

<p>Non-dimensionalising with beam length \\(L\\) as the length scale and
\\(T \\sim (\\alpha L^4/B)^{1/2}\\) as the time scale gives
\\[h_{qq} = - h_{ssss} + \\mathsf{p},\\]
where \\(\\mathsf{p} = (pL^3/B)\\).</p>

<p>We solve two cases:
<ol>
<li><strong>Cantilever beam</strong>: \\(h = h_s = 0\\) at \\(s=0\\);
  \\(h_{ss} = h_{sss} = 0\\) at \\(s=1\\); \\(\\mathsf{p}=0\\).</li>
<li><strong>Unsupported beam</strong>: \\(h_{ss} = h_{sss} = 0\\) at \\(s=0,1\\);
  \\(\\mathsf{p}=\\beta\\sin(2\\pi s)\\).</li>
</ol></p>

<p>Substituting \\(h(s,q) = \\Re[\\hat{h}(s)\\,e^{i\\omega q}]\\) converts the PDE to the
eigenvalue problem
\\[\\omega^2 \\hat{h} = \\hat{h}_{ssss} - \\hat{\\mathsf{p}}.\\]</p>

<p>For the cantilever, \\(\\omega\\) is the continuation parameter. For the unsupported beam,
all boundary conditions are derivative conditions and do not uniquely select a solution.
We pin the solution via homotopy continuation by introducing a parameter \\(\\lambda\\):
\\[\\omega^2 \\hat{h} = \\hat{h}_{ssss} - \\hat{\\mathsf{p}} + \\lambda \\hat{h}.\\]
Starting at \\(\\lambda=1\\) and continuing to \\(\\lambda=0\\) pins the solution and allows
further continuation in \\(\\beta\\). This <em>homotopy</em> technique is broadly useful.
Code is in
<a href="https://github.com/sgangaprasath/autoTutorial/tree/master/Tutorial3_EB"
   target="_blank" rel="noopener noreferrer"><code>Tutorial3_EB</code></a>.</p>

<p><img src="/figs/auto07p/fig4.jpeg" alt="Oscillating beam results" /></p>
`;

export default function OscillatingPage() {
  return (
    <TutorialShell currentIndex={4}>
      <TutorialContent html={html} mathType="mathjax" />
    </TutorialShell>
  );
}
