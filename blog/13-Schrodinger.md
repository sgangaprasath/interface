---
title: "Bridges between distributions"
subtitle: "A primer on the Schrödinger Bridge Problem with toy examples that inspired the recent class of generative models."
date: "2025-03-16"
category: "Primer"
author: "Ananthanarayanan R"
desig: "PhD Student"
image: "/images/profile.svg"
---

<div class="flex justify-center items-center">
<img src="/images/SBP_anim.gif" alt="Schematic" width="1100"/>
</div>

The Schrödinger Bridge Problem (SBP) is a fascinating idea that lies at the intersection of statistical mechanics, optimal transport, and modern machine learning. In simple terms, the statement of the problem is "What is the best possible way for a cloud of particles would move from one observed state to another over a specific period of time?" Unlike standard Diffusion Models in AI, which usually push data toward pure noise, Schrödinger Bridges can learn to map any distribution to any other distribution.

A numerical implementation of the SBP when the measurements at the initial and the final time are gaussian distributions can be found in this [python--code](https://github.com/sgangaprasath/SchrodingerBridge/blob/main/Code/sbp_simulation.ipynb). Click [here](https://github.com/sgangaprasath/SchrodingerBridge/blob/main/LaTeX/main.pdf) to read the article in pdf.