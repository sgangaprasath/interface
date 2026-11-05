import * as fs from "fs";
import Link from "next/link";
import type { ReactNode } from "react";
import type { PubsData, PubsMetaData } from "../pubs/page";
import PageTitle from "@/components/PageTitle";

// ---------------------------------------------------------------------------
// Research areas. "Recent work" is pulled from pubs.json by each paper's
// primary tag, so new papers show up here automatically.
// ---------------------------------------------------------------------------

type Area = {
  id: string;
  title: string;
  color: string; // used for the area's figure and paper icons
  icon: string[]; // Heroicons (v2, 24px outline) path data for the area's tag
  keywords: string[];
  summary: ReactNode;
  figure: ReactNode;
  pubTags: string[];
  featured?: string[]; // titles (or their start) always listed, whatever their tag
  hidden?: string[]; // titles (or their start) never listed here
  inProgress?: string[]; // unpublished work, listed under "Recent work"
  reading: { label: string; url: string }[];
};

// --- Figures (plain SVG, animated with SMIL so they need no JavaScript) -----

const ink = "#57534e";
const faint = "#d6d3d1";
const label = { fontSize: 8, fill: "#a8a29e", textAnchor: "middle" as const };
const loop = { repeatCount: "indefinite" } as const;
const r1 = (v: number) => Math.round(v * 10) / 10;

// Behaviour: a double bridge. Ants take both routes at first; pheromone builds
// up on the short one and evaporates from the long one.
const Ant = ({ carrying }: { carrying?: string }) => (
  <g>
    <path
      d="M-1 0 l-1.6 -2.6 M-1 0 l-1.6 2.6 M0.2 0 l0 -3 M0.2 0 l0 3 M1.2 0 l1.6 -2.4 M1.2 0 l1.6 2.4"
      stroke="#44403c"
      strokeWidth="0.6"
      strokeLinecap="round"
    />
    <ellipse cx="-3" cy="0" rx="2.5" ry="1.7" fill="#44403c" />
    <circle cx="0.2" cy="0" r="1.2" fill="#44403c" />
    <circle cx="2.6" cy="0" r="1.35" fill="#44403c" />
    {carrying && <circle cx="5" cy="0" r="1.6" fill={carrying} />}
  </g>
);

const BehaviourFigure = ({ c }: { c: string }) => {
  const short = "M28 92 C 80 30, 160 30, 212 92";
  const long = "M28 92 C 60 172, 180 172, 212 92";
  const food = "#c2793a";
  const build = { dur: "12s", keyTimes: "0;0.6;0.9;1", ...loop };
  return (
    <svg viewBox="0 0 240 170" className="w-full" aria-hidden="true">
      <path id="bridge-short" d={short} fill="none" stroke={c} strokeLinecap="round">
        <animate attributeName="stroke-width" values="3;10;10;3" {...build} />
        <animate attributeName="stroke-opacity" values="0.15;0.45;0.45;0.15" {...build} />
      </path>
      <path id="bridge-long" d={long} fill="none" stroke={c} strokeLinecap="round">
        <animate attributeName="stroke-width" values="6;1;1;6" {...build} />
        <animate attributeName="stroke-opacity" values="0.35;0.08;0.08;0.35" {...build} />
      </path>

      {[0, 0.8, 1.6, 2.4, 3.2].map((b) => (
        <g key={`out-${b}`}>
          <animateMotion dur="4s" begin={`${b}s`} rotate="auto" {...loop}>
            <mpath href="#bridge-short" />
          </animateMotion>
          <Ant />
        </g>
      ))}
      {[0.4, 1.7, 3].map((b) => (
        <g key={`back-${b}`}>
          <animateMotion dur="4s" begin={`${b}s`} rotate="auto-reverse" keyPoints="1;0" keyTimes="0;1" calcMode="linear" {...loop}>
            <mpath href="#bridge-short" />
          </animateMotion>
          <Ant carrying={food} />
        </g>
      ))}
      {[0, 3.5].map((b) => (
        <g key={`long-${b}`} opacity="0.55">
          <animateMotion dur="7s" begin={`${b}s`} rotate="auto" {...loop}>
            <mpath href="#bridge-long" />
          </animateMotion>
          <Ant />
        </g>
      ))}

      {/* Nest */}
      <path d="M12 100 a16 16 0 0 1 32 0 z" fill="white" stroke={ink} strokeWidth="1.1" />
      <path d="M24 100 a4 4 0 0 1 8 0 z" fill={ink} />
      {/* Food */}
      {[
        [208, 86],
        [215, 84],
        [212, 91],
        [219, 90],
        [206, 93],
        [216, 96],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill={food} fillOpacity="0.85" stroke="white" strokeWidth="0.6" />
      ))}
      <text x="28" y="114" {...label}>nest</text>
      <text x="212" y="112" {...label}>food</text>
      <text x="120" y="30" {...label}>short route</text>
      <text x="120" y="164" {...label}>long route</text>
    </svg>
  );
};

// Robotics & control: light-seeking robots carry blocks to a growing mound.
const Robot = ({ c }: { c: string }) => (
  <g>
    <rect x="-10" y="-2.2" width="4.4" height="4.4" rx="0.6" fill="#a8a29e" />
    <rect x="-5" y="-3.6" width="10" height="7.2" rx="2" fill="white" stroke={c} strokeWidth="1.3" />
    <circle cx="3" cy="0" r="1.3" fill={c} />
  </g>
);

const RoboticsFigure = ({ c }: { c: string }) => {
  const ground = 156;
  const routes = [
    "M6 146 C 60 130, 120 150, 176 146",
    "M14 40 C 70 60, 130 100, 184 140",
    "M2 96 C 70 90, 130 116, 190 142",
    "M56 150 C 100 147, 150 151, 200 146",
    "M40 14 C 90 40, 150 80, 196 138",
  ];
  const mound = (h: number) => `M146 ${ground} Q 196 ${ground - h} 240 ${ground}`;
  return (
    <svg viewBox="0 0 240 170" className="w-full" aria-hidden="true">
      <defs>
        <radialGradient id="robot-glow">
          <stop offset="0" stopColor={c} stopOpacity="0.5" />
          <stop offset="1" stopColor={c} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Light source */}
      <circle cx="196" cy="34" r="32" fill="url(#robot-glow)">
        <animate attributeName="r" values="26;36;26" dur="3s" {...loop} />
      </circle>
      <g transform="translate(196 34)">
        <g stroke={c} strokeWidth="1.3" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="24s" {...loop} />
          {Array.from({ length: 8 }, (_, i) => {
            const a = (i * Math.PI) / 4;
            return <line key={i} x1={r1(11 * Math.cos(a))} y1={r1(11 * Math.sin(a))} x2={r1(16 * Math.cos(a))} y2={r1(16 * Math.sin(a))} />;
          })}
        </g>
        <circle r="7.5" fill="white" stroke={c} strokeWidth="1.5" />
      </g>

      {/* Ground and the structure the swarm builds */}
      <line x1="0" y1={ground} x2="240" y2={ground} stroke={faint} strokeWidth="1" />
      <path d={mound(2)} fill={c} fillOpacity="0.18" stroke={c} strokeWidth="1.2">
        <animate attributeName="d" values={[mound(2), mound(60), mound(60), mound(2)].join(";")} dur="14s" keyTimes="0;0.75;0.92;1" {...loop} />
      </path>

      {routes.map((d, i) => (
        <path key={`route-${i}`} id={`robot-route-${i}`} d={d} fill="none" stroke={faint} strokeWidth="1" strokeDasharray="1.5 4" />
      ))}
      {routes.flatMap((_, i) =>
        [0, 2.6].map((offset) => (
          <g key={`robot-${i}-${offset}`} opacity="0">
            <animateMotion dur="5.2s" begin={`${i * 0.9 + offset}s`} rotate="auto" {...loop}>
              <mpath href={`#robot-route-${i}`} />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="5.2s" begin={`${i * 0.9 + offset}s`} {...loop} />
            <Robot c={c} />
          </g>
        ))
      )}
    </svg>
  );
};

// Soft mechanics & geometry: buckling, elastocapillary wrapping and a popup.
const SoftFigure = ({ c }: { c: string }) => {
  // Clamped strip: two mirror-image cubic halves, symmetric about x = 120,
  // leaving both clamps flat.
  const base = 44;
  const strip = (l: number, y: number) => {
    const r = 240 - l;
    const s = (120 - l) / 3;
    return `M${l} ${base} C ${l + s} ${base}, ${120 - s} ${y}, 120 ${y} C ${120 + s} ${y}, ${r - s} ${base}, ${r} ${base}`;
  };
  const flat = strip(40, base);
  const up = strip(62, base - 34);
  const down = strip(62, base + 34);
  const ends = [40, 62, 62, 40, 62, 62, 40];
  const buckle = {
    dur: "8s",
    keyTimes: "0;0.2;0.4;0.5;0.7;0.9;1",
    calcMode: "spline",
    keySplines: Array(6).fill("0.45 0 0.55 1").join(";"),
    ...loop,
  } as const;

  // Filament wrapping a droplet: the wrapped length grows and shrinks.
  const drop = { x: 62, y: 128, r: 22 };
  const circ = r1(2 * Math.PI * drop.r);

  // Popup: two panels hinged at H with a V-fold glued across them. As the
  // card opens the fold lifts; we sample the geometry at a few opening angles.
  const H = { x: 178, y: 156 };
  const L = 46;
  const d = 22;
  const s = 20;
  const popup = (deg: number) => {
    const half = (deg * Math.PI) / 360;
    const dirL = { x: -Math.sin(half), y: -Math.cos(half) };
    const dirR = { x: Math.sin(half), y: -Math.cos(half) };
    const A = { x: H.x + d * dirL.x, y: H.y + d * dirL.y };
    const B = { x: H.x + d * dirR.x, y: H.y + d * dirR.y };
    const halfAB = Math.abs(B.x - A.x) / 2;
    const h = Math.sqrt(Math.max(0, s * s - halfAB * halfAB));
    const C = { x: H.x, y: A.y - h };
    const pt = (p: { x: number; y: number }) => `${r1(p.x)},${r1(p.y)}`;
    return {
      card: [pt({ x: H.x + L * dirL.x, y: H.y + L * dirL.y }), pt(H), pt({ x: H.x + L * dirR.x, y: H.y + L * dirR.y })].join(" "),
      fold: [pt(A), pt(C), pt(B)].join(" "),
    };
  };
  const angles = [178, 150, 120, 95, 80, 80, 95, 120, 150, 178];
  const frames = angles.map(popup);
  const fold = { dur: "7s", keyTimes: angles.map((_, i) => r1(i / (angles.length - 1) * 100) / 100).join(";"), ...loop };

  return (
    <svg viewBox="0 0 240 170" className="w-full" aria-hidden="true">
      {/* Buckling */}
      <line x1="20" y1={base} x2="220" y2={base} stroke={faint} strokeWidth="1" strokeDasharray="2 4" />
      <path d={flat} fill="none" stroke={c} strokeWidth="3.5">
        <animate attributeName="d" values={[flat, up, up, flat, down, down, flat].join(";")} {...buckle} />
      </path>
      <rect x={34} y={base - 10} width="6" height="20" rx="1" fill={ink}>
        <animate attributeName="x" values={ends.map((e) => e - 6).join(";")} {...buckle} />
      </rect>
      <rect x={200} y={base - 10} width="6" height="20" rx="1" fill={ink}>
        <animate attributeName="x" values={ends.map((e) => 240 - e).join(";")} {...buckle} />
      </rect>
      <g stroke={ink} strokeWidth="1" fill="none" strokeOpacity="0.5">
        <path d={`M8 ${base} h14 m-4 -4 l4 4 l-4 4`} />
        <path d={`M232 ${base} h-14 m4 -4 l-4 4 l4 4`} />
      </g>
      <text x="120" y={base + 46} {...label}>buckling</text>

      {/* Wrapping a droplet */}
      <ellipse cx={drop.x} cy={drop.y + drop.r + 3} rx={drop.r + 8} ry="3" fill={c} fillOpacity="0.1" />
      <circle cx={drop.x} cy={drop.y} r={drop.r} fill={c} fillOpacity="0.15" stroke={c} strokeOpacity="0.5" />
      <path
        d={`M${drop.x} ${drop.y - drop.r} a${drop.r} ${drop.r} 0 1 1 -0.01 0`}
        fill="none"
        stroke={ink}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray={`4 ${circ}`}
      >
        <animate
          attributeName="stroke-dasharray"
          values={[`4 ${circ}`, `${r1(circ * 0.72)} ${circ}`, `${r1(circ * 0.72)} ${circ}`, `4 ${circ}`].join(";")}
          keyTimes="0;0.45;0.75;1"
          dur="8s"
          {...loop}
        />
      </path>
      <text x={drop.x} y="167" {...label}>wrapping</text>

      {/* Popup */}
      <polyline points={frames[0].card} fill="none" stroke={ink} strokeWidth="1.6" strokeLinejoin="round">
        <animate attributeName="points" values={frames.map((f) => f.card).join(";")} {...fold} />
      </polyline>
      <polygon points={frames[0].fold} fill={c} fillOpacity="0.3" stroke={c} strokeWidth="1.4" strokeLinejoin="round">
        <animate attributeName="points" values={frames.map((f) => f.fold).join(";")} {...fold} />
      </polygon>
      <text x={H.x} y="167" {...label}>popup</text>
    </svg>
  );
};

// Scientific ML: optimisers on a loss landscape. Gradient descent zig-zags down
// a narrow valley into a sharp minimum; noisy SGD settles into a wide, flat one.
// The panel below plots both losses against steps, in step with the walkers.
const MLFigure = ({ c }: { c: string }) => {
  type Basin = { cx: number; cy: number; deg: number; rx: number; k: number };
  const sharp: Basin = { cx: 164, cy: 56, deg: -14, rx: 64, k: 0.28 };
  const flat: Basin = { cx: 56, cy: 58, deg: 28, rx: 46, k: 0.72 };
  const toXY = (b: Basin, u: number, v: number) => {
    const a = (b.deg * Math.PI) / 180;
    return [b.cx + u * Math.cos(a) - v * Math.sin(a), b.cy + u * Math.sin(a) + v * Math.cos(a)];
  };
  const lossOf = (b: Basin, u: number, v: number) => (u / b.rx) ** 2 + (v / (b.rx * b.k)) ** 2;

  const N = 18;
  const noise = (i: number, s: number) => Math.sin(i * 12.9898 + s * 78.233) * 0.5; // deterministic
  // GD: step size near the stability limit of the stiff direction, so it overshoots.
  const gdUV = Array.from({ length: N }, (_, i) => [-66 * 0.8 ** i, -16 * (-0.84) ** i]);
  // SGD: slower, with noise that shrinks as the learning rate decays.
  const sgdUV = Array.from({ length: N }, (_, i) => {
    const amp = i === 0 || i === N - 1 ? 0 : 16 * 0.88 ** i;
    return [-14 * 0.8 ** i + amp * noise(i, 1), -36 * 0.78 ** i + amp * noise(i, 2)];
  });

  const walk = (b: Basin, uv: number[][]) => {
    const pts = uv.map(([u, v]) => toXY(b, u, v).map(r1));
    const seg = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
    const total = seg.reduce((x, y) => x + y, 0);
    let acc = 0;
    const frac = [0, ...seg.map((d) => (acc += d) / total)];
    return { pts, frac, loss: uv.map(([u, v]) => lossOf(b, u, v)) };
  };
  const gd = walk(sharp, gdUV);
  const sgd = walk(flat, sgdUV);

  // Each step takes equal time; the last 20% of the loop holds at the minimum.
  const hold = <T,>(xs: T[]) => [...xs, xs[xs.length - 1]];
  const kt = [...Array.from({ length: N }, (_, i) => r1((i / (N - 1)) * 800) / 1000), 1].join(";");
  const t = { dur: "9s", keyTimes: kt, ...loop };

  const panel = { x0: 30, x1: 214, y0: 126, y1: 158 };
  const lmax = Math.max(...gd.loss, ...sgd.loss);
  const lx = (i: number) => r1(panel.x0 + 4 + ((panel.x1 - panel.x0 - 8) * i) / (N - 1));
  const ly = (l: number) => r1(panel.y1 - 2 - ((panel.y1 - panel.y0 - 4) * l) / lmax);

  const Walker = ({ w, color }: { w: typeof gd; color: string }) => {
    const curve = w.loss.map((l, i) => `${lx(i)},${ly(l)}`).join(" ");
    const curveFrac = w.loss.map((_, i) => i / (N - 1));
    return (
      <g>
        {/* Path on the landscape, drawn as the walker moves */}
        <polyline
          points={w.pts.map((p) => p.join(",")).join(" ")}
          fill="none"
          stroke={color}
          strokeWidth="1.3"
          strokeOpacity="0.75"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1 1"
          strokeDashoffset="1"
        >
          <animate attributeName="stroke-dashoffset" values={hold(w.frac.map((f) => r1((1 - f) * 1000) / 1000)).join(";")} {...t} />
        </polyline>
        {w.pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="1.3" fill={color} opacity="0">
            <animate attributeName="opacity" values={hold(w.pts.map((_, j) => (j >= i ? 0.7 : 0))).join(";")} {...t} calcMode="discrete" />
          </circle>
        ))}
        <circle r="4" cx={w.pts[0][0]} cy={w.pts[0][1]} fill={color} stroke="white" strokeWidth="1">
          <animate attributeName="cx" values={hold(w.pts.map((p) => p[0])).join(";")} {...t} />
          <animate attributeName="cy" values={hold(w.pts.map((p) => p[1])).join(";")} {...t} />
        </circle>

        {/* Loss against steps */}
        <polyline
          points={curve}
          fill="none"
          stroke={color}
          strokeWidth="1.4"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1 1"
          strokeDashoffset="1"
        >
          <animate attributeName="stroke-dashoffset" values={hold(curveFrac.map((f) => r1((1 - f) * 1000) / 1000)).join(";")} {...t} />
        </polyline>
        <circle r="2.4" cx={lx(0)} cy={ly(w.loss[0])} fill={color}>
          <animate attributeName="cx" values={hold(w.loss.map((_, i) => lx(i))).join(";")} {...t} />
          <animate attributeName="cy" values={hold(w.loss.map(ly)).join(";")} {...t} />
        </circle>
      </g>
    );
  };

  const contours = (b: Basin, sizes: number[], color: string) => (
    <g transform={`rotate(${b.deg} ${b.cx} ${b.cy})`} fill="none" stroke={color} strokeWidth="1">
      {sizes.map((f, i) => (
        <ellipse
          key={f}
          cx={b.cx}
          cy={b.cy}
          rx={r1(b.rx * f)}
          ry={r1(b.rx * b.k * f)}
          strokeOpacity={0.15 + i * 0.09}
          fill={color}
          fillOpacity={0.035}
        />
      ))}
    </g>
  );

  return (
    <svg viewBox="0 0 240 170" className="w-full" aria-hidden="true">
      {/* Landscape */}
      {contours(sharp, [1.1, 0.9, 0.72, 0.55, 0.38, 0.2], c)}
      {contours(flat, [1.1, 0.9, 0.72, 0.55, 0.38, 0.2], ink)}
      <circle cx={sharp.cx} cy={sharp.cy} r="1.8" fill={c} />
      <circle cx={flat.cx} cy={flat.cy} r="1.8" fill={ink} />
      <Walker w={sgd} color={ink} />
      <Walker w={gd} color={c} />
      <text x={sharp.cx + 8} y={sharp.cy + 36} {...label}>sharp minimum · GD</text>
      <text x={flat.cx} y={flat.cy + 54} {...label}>flat minimum · SGD</text>

      {/* Loss panel */}
      <path d={`M${panel.x0} ${panel.y0 - 2} V${panel.y1} H${panel.x1}`} fill="none" stroke={faint} strokeWidth="1" />
      <text x={panel.x0 - 4} y={panel.y0 + 4} {...label} textAnchor="end">loss</text>
      <text x={panel.x1} y="168" {...label} textAnchor="end">steps</text>
    </svg>
  );
};

// --- Content ---------------------------------------------------------------

const areas: Area[] = [
  {
    id: "robotics-control",
    // Heroicons: cog-6-tooth
    icon: [
      "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z",
      "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    ],
    title: "Robotics & control",
    color: "#7b5cc9",
    keywords: ["swarms", "mechanisms", "embodied intelligence", "estimation"],
    pubTags: ["Robotics", "Control"],
    figure: <RoboticsFigure c="#7b5cc9" />,
    summary: (
      <p>
        We build simple robots and mechanisms to see how local rules give global function: light-seeking swarms that
        build and dig, a scissor linkage that morphs and writes, and an elastic strip that senses and actuates itself.
        We also work on optimal estimation and control.
      </p>
    ),
    reading: [
      { label: "Self-organization and embodiment", url: "https://www.jstor.org/stable/pdf/20051596.pdf" },
      { label: "Elephants don't play chess", url: "http://people.csail.mit.edu/brooks/papers/elephants.pdf" },
      { label: "Morphological computation", url: "http://people.csail.mit.edu/iida/papers/pfeifer_iida_JSM05.pdf" },
    ],
  },
  {
    id: "scientific-ml",
    // Heroicons: cpu-chip
    icon: [
      "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
    ],
    title: "Scientific ML",
    color: "#2f7fc1",
    keywords: ["generative models", "reinforcement learning", "statistical physics"],
    pubTags: [],
    inProgress: [
      "Statistical performance of large vision models",
      "Generalization of neural networks close to bifurcation points",
    ],
    figure: <MLFigure c="#2f7fc1" />,
    summary: (
      <p>
        We use statistical physics and control theory to understand why machine learning works: the dynamics of
        generative models, reinforcement learning as control, and how models generalise.
      </p>
    ),
    reading: [
      { label: "Physics based ML", url: "https://physicsbaseddeeplearning.org/physgrad.html" },
      { label: "Algorithms for decision making", url: "https://algorithmsbook.com/" },
      { label: "Information Theory and Learning Algorithms", url: "https://www.inference.org.uk/itprnn/book.pdf" },
      {
        label: "Statistical Mechanics of Neural Networks",
        url: "https://neurophysics.ucsd.edu/courses/physics_171/Sompolinsky_PhysicsToday.pdf",
      },
    ],
  },
  {
    id: "behaviour",
    // Heroicons: bug-ant
    icon: [
      "M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082",
    ],
    title: "Behaviour",
    color: "#2f9e6f",
    keywords: ["decision making", "posture & locomotion", "stigmergy", "collectives"],
    pubTags: ["Behaviour"],
    featured: ["Dynamics of cooperative excavation in ants and robots"],
    hidden: ["Speed-accuracy trade-offs in Roulette betting"],
    figure: <BehaviourFigure c="#2f9e6f" />,
    summary: (
      <p>
        We model how animals, alone and in groups, act with limited information and noisy senses: a snake balancing
        upright, ant colonies choosing food through pheromone trails, bees recruiting with airflow, and people trading
        speed against accuracy when they bet.
      </p>
    ),
    reading: [{ label: "Swarm intelligence", url: "https://www.jasss.org/4/1/reviews/kluegl.html" }],
  },
  {
    id: "soft-mechanics",
    // Heroicons: cube-transparent
    icon: [
      "m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
    ],
    title: "Soft mechanics & geometry",
    color: "#d9822b",
    keywords: ["instability", "filaments & sheets", "elastocapillarity", "design"],
    pubTags: ["Softmatter", "Geometry"],
    featured: ["Totimorphic assemblies from neutrally-stable units"],
    hidden: ["Wetting of an elastic sheet subject to external tension"],
    figure: <SoftFigure c="#d9822b" />,
    summary: (
      <p>
        We study how thin sheets, filaments and droplets change shape when elasticity, surface tension and geometry
        compete, and how geometry can be used to design a response, as in popup structures and reconfigurable
        assemblies.
      </p>
    ),
    reading: [
      { label: "Morphological instabilities", url: "https://pubs.rsc.org/en/content/articlehtml/2012/sm/c2sm00011c" },
      { label: "The elastica: a mathematical history", url: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/2008/EECS-2008-103.pdf" },
      { label: "Leaves, Flowers and Garbage Bags", url: "https://www.academia.edu/download/75296176/1081357172.pdf" },
      {
        label: "Crumpling, buckling, and cracking",
        url: "https://www.epfl.ch/labs/flexlab/wp-content/uploads/2018/03/research_fracture_tearing_graphene_cracks_marder_physicstoday_2007.pdf",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

type Paper = PubsData & { year: number };

const getPapers = (): Paper[] => {
  const pubs: PubsMetaData[] = JSON.parse(fs.readFileSync("./app/json/pubs.json", "utf-8"));
  return pubs
    .sort((a, b) => b.year - a.year)
    .flatMap((y) => [...y.data].sort((a, b) => b.id - a.id).map((p) => ({ ...p, year: y.year })));
};

const titleIn = (p: Paper, titles?: string[]) =>
  !!titles?.some((t) => p.title.toLowerCase().startsWith(t.toLowerCase()));

// Each area lists its featured papers plus the newest papers whose primary tag
// belongs to it, up to n in all, newest first. A paper featured in one area is
// not repeated in another.
const papersFor = (all: Paper[], area: Area, n = 4) => {
  const featuredElsewhere = (p: Paper) => areas.some((a) => a !== area && titleIn(p, a.featured));
  const featured = all.filter((p) => titleIn(p, area.featured));
  const rest = all
    .filter((p) => area.pubTags.includes(p.tag) && !titleIn(p, area.featured))
    .filter((p) => !titleIn(p, area.hidden) && !featuredElsewhere(p))
    .slice(0, Math.max(0, n - featured.length));
  // `all` is already newest first; keep that order, with featured papers first
  // among papers of the same year.
  const rank = (p: Paper) => all.indexOf(p) - (featured.includes(p) ? all.length : 0);
  return [...featured, ...rest].sort((a, b) => b.year - a.year || rank(a) - rank(b));
};

// ---------------------------------------------------------------------------
// Components
// ---------------------------------------------------------------------------

const DocIcon = ({ color, dashed = false }: { color: string; dashed?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.4"
    strokeDasharray={dashed ? "2 2" : undefined}
    className="w-5 h-5 flex-shrink-0"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5L14 3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4.5h4.5M9 12h6M9 15.5h6" />
  </svg>
);

function PaperRow({ paper, color }: { paper: Paper; color: string }) {
  const href = paper.website || paper.arxiv || paper.download;
  const venue = paper.journal.split(",")[0].trim();
  return (
    <li className="flex gap-3 py-2 border-b border-gray-100 last:border-0">
      <DocIcon color={color} />
      <div className="min-w-0">
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-800 leading-snug hover:underline underline-offset-2 decoration-gray-300"
        >
          {paper.title.replace(/\.$/, "")}
        </Link>
        <p className="text-xs text-gray-400 mt-0.5">
          {paper.year > 0 ? paper.year : "Earlier"}
          {venue && <> · <span className="italic">{venue}</span></>}
          {paper.video && (
            <>
              {" · "}
              <Link href={paper.video} target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 underline underline-offset-2 decoration-gray-300">
                video
              </Link>
            </>
          )}
        </p>
      </div>
    </li>
  );
}

function InProgressRow({ title, color }: { title: string; color: string }) {
  return (
    <li className="flex gap-3 py-2 border-b border-gray-100 last:border-0">
      <DocIcon color={color} dashed />
      <div className="min-w-0">
        <p className="text-sm text-gray-800 leading-snug">{title}</p>
        <p className="text-xs text-gray-400 mt-0.5">Work in progress</p>
      </div>
    </li>
  );
}

function AreaSection({ area, index, papers }: { area: Area; index: number; papers: Paper[] }) {
  const inProgress = area.inProgress ?? [];
  return (
    <section
      id={area.id}
      className="scroll-mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-4 py-10 border-t border-gray-200 first:border-t-0 first:pt-0"
    >
      {/* Left: title and figure */}
      <div className="md:col-span-4 flex flex-col gap-2">
        <p className="font-mono text-xs" style={{ color: area.color }}>
          {String(index + 1).padStart(2, "0")}
        </p>
        <h2 className="text-2xl font-semibold text-gray-900 leading-tight">{area.title}</h2>
        <p className="text-xs text-gray-400 leading-relaxed">{area.keywords.join(" · ")}</p>
        <div className="mt-2 max-w-[280px]">{area.figure}</div>
      </div>

      {/* Right: summary and papers */}
      <div className="md:col-span-8 flex flex-col">
        <div className="text-[15px] leading-relaxed text-gray-600">{area.summary}</div>

        {(papers.length > 0 || inProgress.length > 0) && (
          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-1">Recent work</p>
            <ul>
              {papers.map((p) => (
                <PaperRow key={`${p.year}-${p.id}`} paper={p} color={area.color} />
              ))}
              {inProgress.map((t) => (
                <InProgressRow key={t} title={t} color={area.color} />
              ))}
            </ul>
            {papers.length > 0 && (
              <Link href="/pubs" className="inline-block text-xs text-gray-400 hover:text-gray-600 mt-2">
                All publications →
              </Link>
            )}
          </div>
        )}

        {area.reading.length > 0 && (
          <details className="mt-4 group">
            <summary className="cursor-pointer list-none text-[11px] uppercase tracking-[0.15em] text-gray-400 hover:text-gray-600">
              <span className="inline-block transition-transform group-open:rotate-90 mr-1">›</span>
              Background reading
            </summary>
            <ul className="mt-2 flex flex-col gap-1.5 pl-4">
              {area.reading.map((r) => (
                <li key={r.url}>
                  <Link
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-2 decoration-gray-300"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        )}
      </div>
    </section>
  );
}

export default function ResearchPage() {
  const papers = getPapers();
  return (
    <div className="flex flex-col w-full max-w-5xl pt-10">
      <PageTitle title="Research Areas" icon="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />

      {/* Tags linking to each area */}
      <nav className="flex flex-wrap justify-center gap-2 mt-6 mb-12">
        {areas.map((a) => (
          <a
            key={a.id}
            href={`#${a.id}`}
            className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm transition-colors hover:bg-white"
            style={{ color: a.color, borderColor: `${a.color}55`, backgroundColor: `${a.color}0f` }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4" aria-hidden="true">
              {a.icon.map((d) => (
                <path key={d} strokeLinecap="round" strokeLinejoin="round" d={d} />
              ))}
            </svg>
            {a.title}
          </a>
        ))}
      </nav>

      {areas.map((a, i) => (
        <AreaSection key={a.id} area={a} index={i} papers={papersFor(papers, a)} />
      ))}
    </div>
  );
}
