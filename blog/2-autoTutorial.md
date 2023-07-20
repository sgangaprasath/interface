---
title: "Elastic instabilities using auto-07p"
subtitle: "Using numerical continuation to solve BVPs relevant for elastic instabilities."
date: "2022-04-05"
category: "Tutorial"
author: "S Ganga Prasath"
desig: "Principal Investigator"
image: "/images/sgp.jpg"
---

![auto-07p tutorial](/images/auto.jpeg)

Elastic materials are characterised by their ability to undergo local dilation, shear and twist under externally applied load and relax to a neutral configuration when the load is removed. Often when the applied load exceeds a critical value these materials undergo instabilities characterized by a smooth or dramatic change in their morphology. These instabilities are captured by identifying the forces at play and deriving governing equations for the deformation of the material. The deformation field in the material is then related to the internal stress through a constituent relation, Hooke's law being a famous one. These elastic instability problems, as we shall see, are boundary value problems which are notorious to solve even numerically (analytical solutions are available only in isolated instances).

In this set of 4 tutorials we will see how to solve for the deformation field of the material under various active and passive forces and capture the instabilities using [`auto-07p`](https://github.com/auto-07p/auto-07p), a numerical continuation package. The purpose of this tutorial really is to introduce you to the power of `auto-07p` to approach these problems. Though the documentation is a very good place to start, I realized during my learning process that there are a few important technical gaps that are often not discussed if one were to go from the documentation to implementation.

In this 4 part series we will be discussing problems each with an unique ashover:decoration-indigo-500pect in terms of implementation in auto-07p. It will become clear what I mean by this as we go over the examples.

## Getting Started
We begin by introducing the framework [here](/tutorials/auto07p/autoFw.html). Please click this link and go over it before you start reading the tutorial problems. The relevant codes used in these tutorials are available here. The problems we will be looking at (and the focus of each example in auto-07p implementation) are

- (18-Nov-21) [Bending of an elastica](/tutorials/auto07p/elastica.html)-bifurcation diagram, solution
- (24-Nov-21) [Buckling of a sheet](/tutorials/auto07p/fvk.html)-two parameter continuation
- (04-Apr-22) [Oscillating beam](/tutorials/auto07p/oscillating.html)-eigen-value problem, homotopy continuation
- (05-Apr-22) [Undulatory propulsion on land](/tutorials/auto07p/snake.html)-many parameter system, periodic solution, homotopy continuation, adding new boundary boundary conditions

You can find the entire tutorial collection in pdf format [here](https://github.com/sgangaprasath/autoTutorial).

