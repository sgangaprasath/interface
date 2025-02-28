---
title: "Bang-bang Control"
subtitle: "The simple yet versatile control strategy that is used in thermostats and spacecraft can also be optimal."
date: "2025-02-25"
category: "Blog"
author: "Vishnu Deo Mishra"
desig: "Postdoc fellow"
image: "/images/vishnu.jpg"
---

Have you ever wondered how a thermostat regulates the temperature to
keep your room comfy? Or how spacecrafts adjust their orientation in the
vast emptiness of space using precise bursts of thrusters? These systems
might seem sophisticated, but behind the scenes, they often rely on a
surprisingly simple principle: **bang-bang control**.

Bang-bang control is a method that utilizes a binary approach for system
regulation by abruptly switching on and off between two states to
achieve the target with high efficiency. Unlike more complex control
systems with continuous adjustments, bang-bang control embraces
simplicity. In this blog post, we'll explore a brief history of the
control systems followed by the mechanics of bang-bang control, its
real-world applications, and why such a simple strategy plays a critical
role in both our everyday lives as well as cutting-edge technologies.

<div>
<div class="flex justify-center items-center">
    <img src="/images/Fig_1.png" alt="" width="500">
</div>
</div>

_At left, a picture of Boulton & Watt engine from 1788 -- It utilizes a
centrifugal governor for automatic control of engine speed -- a
foundational concept in control theory, which marked the beginning of
automating mechanical processes on a large scale. On the right is a
snapshot of the PSLV lift-off -- Control systems play a critical role in
space flight._ Credit: [Science Museum, London](https://en.wikipedia.org/wiki/Centrifugal_governor);
[ISRO, India](https://www.isro.gov.in/Gallery.html).

The history of control systems is deeply intertwined with the quest for
humans to automate processes and improve efficiency. One of the earliest
known examples is the water clock, or [Clepsydra of
Karnak](https://egypt-museum.com/clepsydra-of-karnak/), an ancient
Egyptian water clock dating back to ca. 1391-1353 BC. This device was
discovered in the Temple of Amen-Re at Karnak and represents one of the
oldest physical evidences of automated time measurement. The Clepsydra
featured a vessel with 12 carved columns with 11 false holes,
representing the hours of the night. Water slowly dripped from a small
hole at the bottom. As the water level decreased, it revealed the false
holes sequentially, indicating the passage of time. The outflow was
regulated by a seated baboon figure, ensuring consistent measurement.
This ingenious design allowed for time measurement independent of
weather conditions, a significant advancement over sundials, showcasing
the ancient Egyptian's ability to create a self-regulating system.

The 18th century proved to be a revolutionary era in control technology
with James Watt's invention of the centrifugal governor in 1788. This
elegant device introduced the concept of feedback control, a process
where a system's output is measured and utilized to adjust its input,
creating a self-regulating loop. The governor works by using spinning
weights connected to the engine's output shaft. As the engine speed
increases, centrifugal force causes the weights to move outward, which
in turn closes a valve controlling steam flow to the engine. Conversely,
as the engine slows, the weights move inward, opening the valve to allow
more steam. This continuous adjustment maintains a consistent engine
speed despite varying loads. The centrifugal governor exemplifies
negative feedback, where the system's response opposes changes in the
output. This principle became the foundation for modern feedback control
systems, which are now a cornerstone of modern engineering.

In the 20th century, the advent of digital computers, complex
algorithms, predictive modeling, and real-time monitoring has enabled
engineers to design systems with exceptional precision. On June 21,
1948, the University of Manchester unveiled the [first stored-program
electronic
computer](https://www.computerhistory.org/revolution/birth-of-the-computer/4/87),
marking the beginning of the digital computer age. This breakthrough,
coupled with the introduction of programmable logic controllers
([PLCs](https://www.dosupply.com/tech/2024/02/11/the-evolution-of-plcs-from-relays-to-advanced-control-systems/))
in the 1960s, transformed industrial automation by replacing complex
relay panels with digital programming. The development of Model
Predictive Control (MPC) algorithms in the 1970s, pioneered by David
Quinn Mayne, enabled the handling of nonlinearities and hard constraints
in control systems. By the 1980s, digital control systems were
incorporating microprocessors, larger memory capacities, and
communication protocols, allowing for real-time monitoring and data
analysis. Today, control systems span a broad spectrum of applications.
From controlling satellites in orbit to self-driving cars and advanced
robotics, control systems have become integral to both cutting-edge
technology and everyday life.

Amid these developments, bang-bang control has emerged as a particularly
intriguing approach. Despite its simplicity -- alternating between two
discrete states -- has proven to be remarkably effective in diverse
applications, from space exploration to industrial automation. The
simple bang-bang control also happens to be the optimal strategy under a
variety of conditions, making it a go-to strategy for a wide range of
applications:

- _Optimal control:_ Bang-bang control often emerges as the optimal
  solution in minimum-time problems. For instance, when bringing a car
  to a specific position in the shortest time, the optimal strategy is
  to apply maximum acceleration until a unique switching point, then
  maximum braking. It is also an optimal strategy for other situations
  such as Linear Hamiltonian problems, maximum state-reward problems
  (about which we do not discuss any further here).

- _Simplicity & robustness:_ The straightforward nature of bang-bang
  control makes it easy to implement and understand. It is
  particularly useful in systems with binary inputs, such as on/off
  furnaces or simple thermostats.

- _Energy efficiency:_ In some cases, bang-bang control can be more
  energy-efficient than continuous control methods. For example, in
  spacecraft attitude control, using short, precise thruster bursts
  can conserve fuel compared to continuous adjustments.

- _Performance in continuous control tasks:_ Recent
  [research](https://papers.neurips.cc/paper_files/paper/2021/file/e46be61f0050f9cc3a98d5d2192cb0eb-Paper.pdf)
  has shown that bang-bang controllers, which restrict actions to the
  extreme values along each dimension, can achieve state-of-the-art
  performance on several continuous control benchmarks in
  reinforcement learning. This challenges the conventional assumption
  that continuous action spaces are always necessary for optimal
  control.

_Bang-bang control_ is a type of control mechanism used in dynamical
systems where the control input can take only two extreme values, such
as "on" and "off" or maximum and minimum. The term bang-bang originates
from the abrupt switching between these states, which resembles a rapid
"bang" between the two extremes. Unlike proportional or PID controllers
that provide gradual adjustments by continuously modulating the control
input, bang-bang control relies on binary decisions -- either fully
engaging or completely disengaging the actuator. This characteristic
simplicity leads to its alternative names, such as _on-off control_ or
_binary control_.

In order to achieve a desired target value or setpoint, the bang-bang
control mechanism relies on a straightforward binary decision rule --
Measure the error between the system's current state and the desired
setpoint and adjust the control input accordingly, which can be
summarized as follows:

- If the system is below the setpoint -- the control input switches to
  the \"on\" or maximum state to drive the system upward.

- If the system is above the setpoint -- the control input switches to
  the \"off\" or minimum state to allow the system to decrease.

This process creates a feedback loop where the control input alternates
between extremes, causing the system to oscillate around the desired
setpoint. Though this oscillation may not achieve perfectly smooth
control, it ensures that the system remains within an acceptable range
of stability. For example, in the case of a thermostat, when the room
temperature drops below the setpoint, the heater turns on; once the
temperature exceeds the setpoint, the heater turns off. This simple yet
effective mechanism maintains comfort with minimal complexity.
Mathematically, the control input $u$(t) can be expressed as:

$u$(t) =
$\begin{cases} u_{\text{max}}, & \text{if error } > 0 \\ u_{\text{min}}, & \text{if error } \leq 0 \end{cases}$

where, $u_{\text{max}}$ and $u_{\text{min}}$ are the maximum control
input ("On" state) and the minimum control input ("Off" state),
respectively. This approach is particularly effective for systems where
simplicity, rapid response, and reliability are more important than
precise and smooth control.

Let's explore an example of a simple mechanical system -- a **double
integrator** -- to illustrate the concept of bang-bang control. Imagine
a brick of unit mass sliding on a frictionless surface along the x-axis.
Our goal is to bring the brick to rest at the origin
$(q,q^\prime)=(0,0)$, where $q$ represents the position and $q^\prime$
represents the velocity of the brick. To achieve this, we control the
brick by applying a horizontal force $u$, which serves as our control
input. The magnitude of this force is bounded by $|u|\leq1$, meaning $u$
can take any value between its maximum ($+1$) and minimum ($-1$) limits.
In this scenario, bang-bang control involves switching between these two
extreme values to achieve our objective in minimum time. The objective
is to use this force efficiently to bring the brick to rest at the
origin in minimum time. The minimum time strategy ensures efficient use
of the available force while maintaining precise regulation of the
system's position and velocity.

<div>
<div class="flex justify-center items-center">
    <img src="/images/brick_slider.jpg" alt="" width="500">
</div>
</div>

The dynamics of the system are governed by the second-order differential
equation, $$q^{\prime\prime} = u, \;\;\; |u| \leq 1.$$ Here $u$ is the
control input (force) and the task is to design a control policy
$u=\pi(x,t)$ that drives the system from an initial state
$x=[q_0, q_0^{\prime}]$ to the target state $x=[0, 0]$ in an optimal
manner. One intuitive formulation for achieving this task is under
_minimum-time control_, which seeks to minimize the time required to
reach the target state. Mathematically, this can be expressed as

$$\text{minimize} \: t_f, \: \text{subject to} \: x(t_0)=x_0, \: x(t_f)=0.$$

This formulation is of particular interest, as we shall
see, since it leads to a bang-bang control strategy. In this strategy,
the system applies maximum force ($+1$) in one direction until reaching
a critical point (called a switching point), then switches to maximum
force ($-1$) in the opposite direction.

To understand why bang-bang control emerges as optimal, let us solve the
governing equation $q^{\prime\prime} = u$ for each extreme value of $u$.
When a constant force of $u=-1$ is applied,

$$ q^\prime(t) = q^\prime(0)-t, \ q(t) = q(0) + q^\prime(0)t-\frac{1}{2}t^2.$$

Eliminating time $t$ from these equations gives,
$$ q = -\frac{1}{2}{q^\prime}^2+c*-,$$
where, $c*-=q(0)+\frac{1}{2}{q^\prime}^2(0)$. Similarly, when a constant force of $u=+1$ is applied, the solution is
$q = -\frac{1}{2}{q^\prime}^2+c_+,$ with $c_+=q(0)-\frac{1}{2}{q^\prime}^2(0)$. The equations above describe
parabolic trajectories in the phase space $(q,\,q^\prime)$. The constants $c_+$ and $c_-$ define specific regions in this space. The
switching curves are given by, $q=\frac{1}{2}{q^\prime}^2$ and $q=-\frac{1}{2}{q^\prime}^2$. These curves divide the phase space into
regions where the control input must switch from one extreme value to the other. Switching ensures that the system follows an optimal
trajectory toward the target state at the origin.

By analyzing these trajectories and switching curves, we can derive the
optimal bang-bang control policy. Though we do not show here that this
is actually optimal in the shortest time sense, the control input $u(t)$
turns out to be,

$u$ =
$\begin{cases}
+1, \hspace{5mm}  \text{if } (q^\prime<0 \:\: \text{and} \:\: q\leq\frac{1}{2}{q^\prime}^2) \:\: \text{or} \:\: (q^\prime>0 \:\: \text{and} \:\: q\geq -\frac{1}{2}{q^\prime}^2), \\
0, \hspace{7.5mm} \text{if} \:\: q=0 \:\: \text{and} \:\: q^\prime=0, \\
-1, \hspace{5mm} \text{otherwise}.
\end{cases}$

<div>
<div class="flex justify-center items-center">
    <img src="/images/control_policy.png" alt="" width="500">
</div>
</div>

_This figure illustrates the optimal bang-bang control policy for the
double integrator system, where control input $u$ is constrained to
$\pm 1$. The state space is divided into different regions based on the
optimal policy: red regions indicate full braking (u = -1), gray regions
indicate full acceleration (u = +1) and black solid lines represent the
switching surfaces where control input changes. The switching surfaces
define boundaries where the system transitions from accelerating to
braking, ensuring minimum-time convergence to the origin._

- When the brick's velocity $(q^\prime>0)$ is positive and its
  position $q > -\frac{1}{2}{q^\prime}^2$ lies above the switching
  curve for $u = -1$, maximum negative force $(u = -1)$ is applied to
  decelerate it. Conversely, when its velocity $(q^\prime < 0)$ is
  negative and its position $(q < +\frac{1}{2}{q^\prime}^2)$ lies
  below the switching curve for $u=+1$, maximum positive force
  $(u=+1)$ is applied to accelerate it back toward zero.

- Once both position and velocity reach zero $(q=0,\,q^\prime=0)$, no
  further force is applied $(u=0)$.

All the the control region scenarios for the double integrator system
under bang-bang control are illustrated in the _phase space diagram_
shown in the figure above. When brick's position and velocity lies in
red region, maximum negative force is applied to decelerate the system.
In contrast, when brick's position and velocity lies in gray region,
maximum positive force is applied to accelerate the system towards zero.
The switching occurs precisely on the parabolic curves that divide these
regions. A detailed derivation and analysis is available [here](https://underactuated.mit.edu/dp.html).

In conclusion, bang-bang control is a simple yet useful strategy for a
wide variety of systems with minimal memory requirement. By switching
between maximum and minimum control inputs, it can ensure convergence to
a desired state in a wide variety of systems. This approach, a
cornerstone of control theory, has been the go-to approach for several
real-world systems like spacecraft thrusters and thermostats, showcasing
its practicality and versatility.
