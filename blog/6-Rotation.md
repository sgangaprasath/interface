---
title: "Rotations - from complex numbers to quaternions"
subtitle: "A primer on how to perform rotation operation in 2D and 3D."
date: "2024-01-30"
category: "Primer"
author: "Mohanraj"
desig: "MS Student"
image: "/images/mohanraj.jpg"
---

<div class="flex justify-center items-center">
<img src="/images/RotationTut.png" alt="Schematic" width="1100"/>
</div>

Rotation is one of the fundamental operations of geometry. It provides a way to transform vectors from one location to another while hinged with respect to a pre-defined axis. In this first part of the two-part primer we introduce this simple yet often confusing geometric operation in 2D and 3D. We start with the complex number representation of the rotation operation in 2D and its connection to the standard matrix version. Then we discuss the Euler-angle representation of rotation of vector basis, their extrinsic and intrinsic forms. Ultimately we introduce quaternions, which are the natural extension of complex numbers to 3D. In the process, we also look at Gimbol locking, an intrinsic barrier in Euler-angle representation. Each concept discussed is explained with a worked out example and a supplemental [python--code](https://github.com/sgangaprasath/RotationTut/blob/main/Rotations.ipynb) that numerically implements these examples.

Click [here](https://sgangaprasath.github.io/rotationTut.html) to read the article (a pdf version of this primer is available [here](https://github.com/sgangaprasath/interface/blob/main/public/tutorials/rotation/report.pdf)).