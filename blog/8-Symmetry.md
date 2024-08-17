---
title: "Symmetry in nature, science and engineering"
subtitle: "A brief overview of symmetry, its properties and influences on science."
date: "2024-08-17"
category: "Blog"
author: "Vishnu Deo Mishra"
desig: "Postdoc fellow"
image: "/images/vishnu.jpg"
---

Symmetry is something very intuitive to humans, as it appears to be
rooted in our brains. For example, it is very straightforward for us to
spot which one of the tree shapes shown below is symmetric. In this
post, we'll explore how the seemingly intuitive symmetry leads to
fundamental physical laws.

<div>
<div class="flex justify-center items-center">
    <img src="/images/tree.png" alt="" width="500">
</div>
</div>

So, what exactly is symmetry? The term "symmetry" originates from the
Greek word *summetria*, describing a relation of commensurability. Early
on, symmetry was linked closely with harmony, beauty, and unity, which
became very important in theories about nature. For example, in Plato's
*Timaeus*, shapes like regular polyhedra (tetrahedron, cube, &
dodecahedron) were seen to represent the natural elements (fire, earth,
& the universe) because of the beauty and proportion of their shapes.
Similar ideas continued into science, like in Kepler's 1596 *Mysterium
Cosmographicum*, which used the five regular solids to explain planetary
architecture.

From a modern science perspective, symmetry does not have to do with
proportions; rather, it is defined in terms of the invariance of any
object under specific mathematical operations, such as reflection,
rotation, or translation. Thus, a shape/object is symmetric if it
remains unchanged under certain operations, i.e., it is not possible to
distinguish the object before and after performing the operation. The
possible types of symmetries for a geometric object depend on which
properties of the object remain unchanged after a transformation.
Depending on the movement of the objects, there are different types of
symmetry operations:

1.  Point symmetry

    -   Rotation -- The object appears unaffected when rotated by an
        angle $\alpha$ about a selected direction. The axis of rotation,
        known as the *symmetry element*, is referred to as the n-fold
        symmetry axis with n = 360 / $\alpha$. For example, the
        snowflake shown below appears the same when rotated by an angle
        60$^\circ$, i.e., it exhibits 6-fold rotational symmetry.

    -   Reflection -- The object appears unchanged when reflected across
        a specific plane, known as the mirror plane. In other words, one
        half of the object is a mirror image of the other half. For
        example, a butterfly has mirror symmetry because its left and
        right wings are mirror images of each other.

    -   Inversion -- An object to have inversion symmetry, each of its
        points $(x,y,z)$ corresponds to a point $(-x,-y,-z)$ such that
        the object looks the same when viewed from the center, known as
        the center of inversion.

    -   Combination of any above.
        <div>
        <div class="flex justify-center items-center">
        <img src="/images/Snowflake.png" alt="" width="500"/>
        </div>
        <em>Shown here, a snowflake that will appear the same if rotated
        by 60 deg. about an axis passing through the center pointing
        in a perpendicular direction to the plane of the object. Thus,
        it exhibits a 6-fold rotational symmetry. Additionally, it
        possesses six mirror planes (one illustrated) and a center of
        inversion symmetry. Credit: <a href="https://en.wikipedia.org/wiki/Snowflake">Wikimedia</a></em>
        </div>

2.  Space symmetry

    -   Translation -- An object appears the same after being translated
        (shifted) by a certain amount in space. This symmetry is widely
        employed in physics, especially in crystallography and quantum
        mechanics. The simplest example is the fact that the laws of
        physics are the same if you are in Chennai or Delhi.

    -   Combination of translation and any kind of point symmetry
        operations.

In physics, there are additional types of symmetries beyond reflections,
rotations, and translations, which include *continuous*, *discrete*, and
*Gauge* symmetries that are not part of our usual experiences.
Continuous symmetry, such as the rotation of a circle, can be described
by [Lie groups](https://en.wikipedia.org/wiki/Lie_group), while discrete
symmetries, like the rotation of a rectangle, are described by [symmetry
group](https://en.wikipedia.org/wiki/Symmetry_group). Gauge symmetry is
central to quantum field theory and the Standard Model of particle
physics, which describes how certain physical laws remain invariant
under local transformations of fields.

# Symmetry and Conservation laws: Noether's Theorem

Conservation laws are not only fundamental principles in physics but
steer practical applications across all disciplines of physics &
engineering. These laws state that certain quantities -- quite
importantly -- remain constant within a closed system, regardless of the
processes occurring within that system. Laws like the "conservation of
energy," "conservation of momentum," and "conservation of angular
momentum" are crucial in theories including Newtonian mechanics,
thermodynamics, and quantum physics, among others. Such laws apply to
phenomena ranging from planetary motion all the way to nuclear reactions
occurring in the world's powerful nuclear reactors or stars. These
evident conservation laws are not merely empirical; rather, they are a
direct consequence of specific symmetries intrinsic to the theories. The
unavoidable connection between symmetry and conserved quantities is one
of the most profound physical insights in science history and is
mandated by Noether's Theorem.

A young woman named Emmy Noether summarized the content of her two
theorems, published earlier in 1915, for presentation to the German
Mathematical Society on July 23, 1918. Being too young and a woman (a
disallowed gender to speak in sessions of the Royal Academy at that
time), she wasn't allowed to present the work herself. So the renowned
mathematician [Felix Klein](https://en.wikipedia.org/wiki/Felix_Klein)
presented her results. These results, for the first time, established
that if you have a physical system:

-   with conservative forces (equal and opposite), and

-   whose "action" has continuous symmetries,

then every independent continuous symmetry will lead to an associated
"conserved quantity."

<div>
<div class="flex justify-center items-center">
        <img src="/images/Noether_Gravity.png" alt="" width="1000"/>
</div>
<em>At left, a picture of Amalie Emmy Noether is shown, who proved
Noether's theorem connecting the symmetries of a physical system with an
associated conservative law. On the right is an illustration of how our
sun and earth wrap space and time (or spacetime). In his theory of
general relativity, Albert Einstein revealed that the Earth's revolution
around the Sun is not because of gravitational pull; rather, the Earth
falls freely through curved space wrapped due to the dominating mass of
the Sun. Credit: <a href="https://en.wikipedia.org/wiki/File:Noether.jpg">Mathematical Association of America</a>,
<a href="https://www.ligo.caltech.edu/image/ligo20160211e">T. Pyle/Caltech/MIT/LIGO Lab</a></em>
</div>

In other words, Noether's theorem establishes that if a physical system
possesses symmetry, there must be a corresponding physical quantity
associated with the system that will remain conserved. Here are some
scenarios validating the theorem:

-   If a system has time translation symmetry, i.e., the laws of physics
    do not change over time, then the system's total energy will remain
    conserved. A pendulum movement in a frictionless environment is an
    example of energy conservation.

-   If a system is symmetric under rotations, irrespective of its
    orientation, then this leads to the conservation of angular momentum
    in the system.

-   If your system is space-translation invariant, meaning that laws of
    physics are the same everywhere in space, then it leads to the
    conservation of momentum.

Noether's theorem is one of the most profound insights in all of
physics. Consider the conservation of energy. Historically, mechanics
evolved through trial and error, with scientists making educated guesses
about which quantities might be useful to measure and which might be
conserved. Even the very fundamental law of conservation of energy was
initially an empirical observation -- a useful construct but its clear
origin was not comprehended. For example, the idea that potential and
kinetic energy could be converted into each other when objects fall or
rise was largely recognized because it was useful. There was no known
fundamental reason that energy should be conserved; it was just observed
that if one properly accounted for all the different forms of energy,
one couldn't create or destroy it, only transform it from one form to
another. Noether's theorem, however, reveals that energy conservation
stems from a plausible origin: the laws of nature should be independent
of time. This means that what seemed like empirical regularities can
actually be derived from symmetry principles.

In 1918, an intriguing problem attracted the attention of
mathematicians, just a few years after Einstein's General Relativity
revolutionized our understanding of gravitation, spacetime, and the
Universe. Mathematicians and physicists began to puzzle over a curious
issue: General Relativity did not inherently include energy conservation
as a natural consequence of spacetime itself; instead, it appeared only
as an identity. This raised significant questions, particularly for
David Hilbert, one of the leading mathematicians of the time. He
wondered how it was possible to constrain physical quantities, like
energy, within the framework of General Relativity.

The resolution to this problem lies in the nature of spacetime symmetry.
Energy conservation is tied to a specific symmetry known as
time-translation invariance, which means the laws of physics remain
unchanged over time. However, this invariance only holds in static
spacetimes, where spacetime itself does not change as time progresses.
For example, in the spacetime around a non-rotating black hole, which is
static, energy is conserved because time-translation invariance is
preserved. In contrast, our Universe is not static; it is expanding. The
description of this expansion is given by the [FLRW
spacetime](https://en.wikipedia.org/wiki/Friedmann%E2%80%93Lema%C3%AEtre%E2%80%93Robertson%E2%80%93Walker_metric),
which changes over time -- either expanding or contracting. In such a
non-static spacetime, time-translation invariance is absent, and
consequently, the associated conservation law for energy does not apply.
To understand this, imagine a photon -- a quantum of light -- traveling
between two galaxies. In static spacetime, the photon's wavelength and
frequency would remain unchanged as it moves from one point to another,
preserving its energy. However, in our expanding Universe, the space
between the galaxies stretches as the photon travels, causing its
wavelength to increase and its energy to decrease. This lost energy does
not transfer elsewhere; it simply reflects the fact that, in an
expanding spacetime, there is no requirement for energy conservation due
to the lack of time-translation invariance.

Thus, even one of the most fundamental laws -- the conservation of
energy -- is not upheld in an expanding Universe. One must, therefore,
be cautious to consider additional symmetries or hypothesize
conservation laws that feel intuitively right but may not accurately
reflect the true nature of the Universe. A deep understanding of the
fundamental structure of a theory and its valid implication is crucial
to discerning what is truly conserved in reality.

# Symmetry Breaking

The study of symmetry breaking dates back to Pierre Curie, according to
whom, for a phenomenon to occur in a medium, the medium's original
symmetry must be broken. The breaking of symmetry doesn't mean that the
system loses all symmetry; rather, some of the original symmetries are
no longer present, and the system's present symmetry is reduced. Thus, a
system transitions from a state of higher symmetry to one of lower
symmetry, resulting in the emergence of new phenomena. For example, in
particle physics, symmetry breaking explains how particles acquire mass
through mechanisms like the Higgs field, while in condensed matter
systems, it underpins phase transitions such as the formation of
crystals. Symmetry breaking can be distinguished into two forms:
*explicit* and *spontaneous*.

Explicit symmetry breaking indicates a circumstance when the system's
dynamical equations -- Lagrangian/Hamiltonian formulations -- are not
invariant under considered symmetry. This means that the system's
governing equations contain some terms that explicitly break the
symmetry. Such terms are imposed externally, for example, by applying a
magnetic field to a ferromagnet that induces a favorable alignment along
the applied field, breaking the symmetry of the system.

Spontaneous symmetry breaking indicates a situation where, given a
symmetry of equation of motion, the solutions are not invariant under
the action of this symmetry. In other words, the system naturally
settles into a state opposing the symmetry of its underlying laws and
hence the attribute "spontaneous." A simple analogy to explain
spontaneous symmetry breaking was provided by Abdus Salam -- Imagine a
dinner party where guests are seated around a circular table, with a
napkin placed between each pair of neighbors. The table is perfectly
symmetrical, as every guest has a napkin on both sides. Now, if one
guest decides to pick up the napkin on their left or right, this results
in the breaking of symmetry. Now, the other guests know to do the same,
and the left-right symmetry is spontaneously broken. A large number of
physical systems exhibit such spontaneous symmetry-breaking phenomenon
that includes a second-order phase transition in ferromagnets occurring
due to the discontinuous change in order parameter (magnetization), the
appearance of a massless Nambu-Goldstone boson because of the
spontaneous breaking of global gauge symmetry, and many more.

In condensed matter physics, spontaneous symmetry breaking is ubiquitous
and often occurs when there is a phase transition from a
high-temperature, symmetric phase to a low-temperature one in which the
symmetry is spontaneously broken. One simplest example is the freezing
of water. Observing a round bowl of water kept on a table, one notices
that it looks the same in every direction; it has rotational symmetry.
However, after freezing, the ice crystals form in specific orientations,
breaking the rotational symmetry.

One classic example of spontaneously broken symmetries in physics is the
temperature-dependent behavior of ferromagnetic materials that exhibit
net magnetization in the absence of an external magnetic field. Pierre
Curie discovered that these materials lose their magnetic properties
above a specific temperature, the so-called critical temperature $T_c$
or the *Curie point*, giving rise to a transition from ordered to
disordered state. The value of $T_c$ varies for different materials. In
a ferromagnet, atoms interact through a spin-spin interaction:
$$H = -J \sum_{ij} \mathbf{S}_i\cdot~\mathbf{S}_j.$$ This interaction is
invariant under rotations. When the temperature is below the critical
value ($T < T_c$), the magnetic moments of the atoms tend to align
within magnetic domains. As the temperature increases, thermal
fluctuations disrupt this alignment until the net magnetization vanishes
at $T = T_c$. At temperatures $T > T_c$, the magnetic moments orient
randomly in space with no preferred direction, resulting in a symmetric
ground state in the system (see above figure). Thus, the system's
governing equations remain symmetric under rotations, but the ground
state at $T<T_c$ chooses a preferred orientation and does not maintain
this symmetry. The ferromagnet thus demonstrates spontaneous symmetry
breaking: the system's equations have rotational symmetry, but the
chosen ground state does not.

<div>
<div class="flex justify-center items-center">
        <img src="/images/magnetization.png" alt="" width="500"/>
</div>
</div>

In biology, symmetry breaking is a prevalent process and occurs at
multiple scales. The survival of organisms relies heavily on the
presence of well-defined structures and patterns, both at the
microscopic and macroscopic scales. In fact, the distinctive patterns we
see on a tiger, for example, are a direct result of broken symmetry. In
the early stages of development, cells in an organism might be nearly
identical, with no distinguishing features. However, as the organism
grows, various factors such as chemical gradients, genetic expression,
or environmental effects provoke certain cells to behave differently
than others. This differentiation breaks the initial symmetry and leads
to the formation of complex patterns.

A possible explanation for the tiger's stripes is a process known as
reaction-diffusion. This is where two substances -- a chemical activator
and an inhibitor -- interact and diffuse through the developing tissue
at different rates. The interaction between these substances results in
the formation of repeating patterns like the stripes on a tiger.

Another common occurring phenomenon in biological systems is the
directional motility of the cells, which is vital in various processes,
including embryonic development, wound healing, immune response, and
organ formation, among others. This movement is significantly influenced
by symmetry breaking in the cell's internal structure. *Actin*, a
protein that forms long, thin fibers within the cell's cytoskeleton,
plays a crucial role in these processes. These actin filaments give the
cell its shape and play a key role in various cellular processes,
including movement. These filaments are dynamic --they can rapidly grow
and shrink by adding or removing actin molecules at their ends. In a
perfectly symmetrical system, actin filaments would grow or shrink
uniformly in all directions, resulting in no net movement of the cell.
However, cells break this symmetry by regulating where and how actin
filaments assemble. This control leads to an asymmetric arrangement of
the filaments. When actin filaments assemble more on one side of the
cell than the other, they generate a protrusive force that pushes the
cell membrane outward in that direction. This asymmetric force drives
the cell to move in a specific direction. Thus, breaking symmetry in
actin filament assembly is crucial for creating directional movement,
enabling the cell to crawl along surfaces or through tissues
effectively. Symmetry provides stability and uniformity, but its
breaking is equally crucial as it enables dynamic processes like cell
movement, development, and adaptability.