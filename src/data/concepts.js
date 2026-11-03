export const concepts = [
  {
    id: 'c1',
    title: 'Conservation of Energy & Mass (First Law of Thermodynamics)',
    discipline: 'Cross-Disciplinary',
    branchId: 'all',
    difficulty: 'Fundamental',
    summary: 'Energy and mass can neither be created nor destroyed in an isolated system; they can only transform from one state or format to another.',
    analogy: 'Think of an unbreachable bank account with a fixed balance: you can transfer money between checking, savings, or foreign currency accounts (kinetic, potential, thermal energy), but the net sum remains completely intact unless an external deposit or withdrawal happens across the boundary.',
    keyFormula: 'ΔE_system = Q_in - W_out  (or Continuity Eq: ρ₁A₁V₁ = ρ₂A₂V₂)',
    applications: [
      'Rocket propulsion and thermal engine fuel efficiency',
      'Hydraulic piping design and flow rate sizing in civil waterworks',
      'Power dissipation, thermal throttling, and battery life calculation in microchips',
      'Closed-loop ecological life support and chemical reactor heat budgeting'
    ],
    pitfalls: [
      'Confusing conservation of mass with volume: Volume can change drastically with temperature and pressure, whereas mass remains invariant.',
      'Forgetting internal energy changes when calculating heat exchange.'
    ],
    quiz: {
      question: 'When fluid flows from a wider pipe section into a narrower constriction at steady incompressible flow, what happens to velocity and pressure according to conservation principles?',
      options: [
        'Velocity decreases and static pressure increases',
        'Velocity increases and static pressure decreases',
        'Both velocity and pressure increase',
        'Velocity and pressure remain unchanged'
      ],
      correctAnswerIndex: 1,
      explanation: 'By the continuity equation (A₁V₁ = A₂V₂), a smaller cross-sectional area requires a higher velocity. By Bernoulli’s principle (conservation of mechanical energy), an increase in fluid velocity correlates with a decrease in static pressure.'
    }
  },
  {
    id: 'c2',
    title: 'Ohm’s Law & Kirchhoff’s Laws (KCL & KVL)',
    discipline: 'Electrical & Hardware',
    branchId: 'ece',
    difficulty: 'Fundamental',
    summary: 'The fundamental rules of linear electrical circuits governing voltage, current, resistance, and the nodal/loop conservation of charge and potential.',
    analogy: 'Imagine a network of water pipes: Voltage is the water pressure pushing the liquid, Current is the flow rate (liters per second), and Resistance is a constricting nozzle. At any pipe junction, the liters of water flowing in must equal the liters flowing out (Kirchhoff’s Current Law).',
    keyFormula: 'V = I · R  |  ∑ I_node = 0  |  ∑ V_loop = 0',
    applications: [
      'Circuit board power rail decoupling and sizing',
      'Sensor voltage divider calibrations (e.g. thermistors, LDRs)',
      'Impedance matching for high-frequency RF transmission',
      'Battery management system (BMS) current sensing'
    ],
    pitfalls: [
      'Assuming Ohm’s law is universal: Non-linear components like diodes and transistors do not exhibit constant ohmic resistance.',
      'Sign errors when summing potential drops versus rises around closed loops in KVL.'
    ],
    quiz: {
      question: 'In a junction where three wires meet, if 5A flows into the junction from wire A and 2A flows out of the junction via wire B, what must wire C carry?',
      options: [
        '7A flowing into the junction',
        '3A flowing into the junction',
        '3A flowing out of the junction',
        '2.5A flowing out of the junction'
      ],
      correctAnswerIndex: 2,
      explanation: 'By Kirchhoff’s Current Law (conservation of charge), the sum of currents entering equals the sum of currents exiting: 5A (in) = 2A (out) + I_C. Hence I_C = 3A flowing out.'
    }
  },
  {
    id: 'c3',
    title: 'Time & Space Computational Complexity (Big-O Notation)',
    discipline: 'Computer Science',
    branchId: 'cs',
    difficulty: 'Intermediate',
    summary: 'A mathematical formalism for characterizing how the execution time or memory utilization of an algorithm scales as input size (N) grows asymptotically toward infinity.',
    analogy: 'If looking up a word in an encyclopedia takes one flip because it is alphabetized (O(log N)), but finding an unindexed recipe requires reading every single page from cover to cover (O(N)), the difference might seem small for 10 pages, but becomes the difference between 20 seconds and 2 years when indexing 10 million pages.',
    keyFormula: 'f(N) = O(g(N))  iff  ∃ c > 0, n₀ > 0 s.t. ∀ N ≥ n₀: |f(N)| ≤ c · |g(N)|',
    applications: [
      'Database index query tuning (B-Tree vs sequential scans)',
      'Graph pathfinding algorithms in navigation maps (Dijkstra vs A*)',
      'Distributed systems scale engineering',
      'Real-time audio and video codec buffer budgeting'
    ],
    pitfalls: [
      'Ignoring constant factors in real systems: An O(N) algorithm with large constants might run slower than an O(N log N) algorithm for practical small datasets.',
      'Confusing average-case performance with worst-case guarantees (e.g., QuickSort is average O(N log N) but worst-case O(N²)).'
    ],
    quiz: {
      question: 'Which of the following time complexities grows fastest as N approaches very large numbers?',
      options: [
        'O(N²)',
        'O(N · log N)',
        'O(2ᴺ)',
        'O(N³)'
      ],
      correctAnswerIndex: 2,
      explanation: 'Exponential complexity O(2ᴺ) grows vastly faster than any polynomial complexity (such as O(N²) or O(N³)) for large input sizes.'
    }
  },
  {
    id: 'c4',
    title: 'Stress-Strain Relationship & Hooke’s Law',
    discipline: 'Mechanical & Civil',
    branchId: 'mech',
    difficulty: 'Fundamental',
    summary: 'The measure of internal resistive forces within a deformed body per unit area (stress) and the relative deformation produced (strain), governed linearly by Young’s modulus up to the yield point.',
    analogy: 'Imagine a rubber band versus a metal wire: pull gently on both, and both stretch elastically, springing back when released. Pull beyond a threshold, and the metal permanently bends (plastic deformation) or snaps (fracture), while the rubber band breaks when its polymer chains rupture.',
    keyFormula: 'σ = E · ε  (where σ = F/A is stress, ε = ΔL/L is strain, E is Young’s Modulus)',
    applications: [
      'Structural steel beam sizing in bridges and skyscrapers',
      'Crash safety deformation zone design in vehicles',
      'Material selection for aerospace skins and medical bone implants',
      'Pressure vessel wall thickness calculations'
    ],
    pitfalls: [
      'Assuming all materials deform plastically before fracture: Brittle materials like cast iron or glass fracture with virtually zero plastic deformation.',
      'Confusing stiffness (Young’s modulus) with strength (ultimate tensile strength) or hardness.'
    ],
    quiz: {
      question: 'What is the point on a stress-strain curve beyond which a material will no longer return to its original shape upon unloading?',
      options: [
        'Elastic Limit / Yield Point',
        'Ultimate Tensile Strength Point',
        'Fracture Point',
        'Proportionality Limit'
      ],
      correctAnswerIndex: 0,
      explanation: 'The yield point (or elastic limit) denotes the boundary between reversible elastic deformation and irreversible plastic deformation.'
    }
  },
  {
    id: 'c5',
    title: 'Feedback Control & Closed-Loop Stability',
    discipline: 'Robotics & Systems',
    branchId: 'all',
    difficulty: 'Intermediate',
    summary: 'Employing the difference between a desired target setpoint and measured system output (error signal) to dynamically modulate actuators and maintain stability against disturbances.',
    analogy: 'Driving a car down a straight highway lane: your eyes continuously observe drift (error), your brain calculates adjustments (proportional, integral, derivative response), and your hands steer the wheel to center the car. If you closed your eyes and steered only based on pre-calculated angles (open loop), a single gust of wind would steer you off-road.',
    keyFormula: 'u(t) = K_p · e(t) + K_i · ∫ e(τ)dτ + K_d · (de(t)/dt)',
    applications: [
      'Cruise control and lane keeping in automotive vehicles',
      'Drone attitude quadcopter flight controllers',
      'Chemical reactor exothermic temperature regulation',
      'Precision temperature regulation in 3D printer hotends'
    ],
    pitfalls: [
      'Excessive proportional gain (K_p) or derivative noise resulting in uncontrollable oscillations or instability.',
      'Integral windup when actuators saturate (e.g. motor operating at 100% capacity).'
    ],
    quiz: {
      question: 'In a standard PID controller, which term primarily eliminates steady-state offset error over time?',
      options: [
        'Proportional (P)',
        'Integral (I)',
        'Derivative (D)',
        'Feedforward (F)'
      ],
      correctAnswerIndex: 1,
      explanation: 'The integral term accumulates past errors over time, continually ramping actuator output until any persistent steady-state offset is driven to zero.'
    }
  },
  {
    id: 'c6',
    title: 'Fourier Transform & Frequency Domain Analysis',
    discipline: 'Signals & Communications',
    branchId: 'ece',
    difficulty: 'Advanced',
    summary: 'A mathematical transformation that decomposes any complex arbitrary time-varying signal into a superposition of pure sine and cosine sinusoidal frequencies.',
    analogy: 'Imagine tasting a complex culinary sauce and being able to instantly isolate every distinct spice and ingredient (cumin, salt, garlic) with their exact grams and ratios. The Fourier Transform does exactly this for acoustic, radio, or sensor signals.',
    keyFormula: 'X(ω) = ∫_{-∞}^{∞} x(t) · e^{-jωt} dt',
    applications: [
      'Audio equalizers and noise cancellation headphones',
      'Medical imaging reconstruction (MRI and CT scans)',
      'Wireless telecommunications channel modulation (OFDM in 5G/Wi-Fi)',
      'Vibration frequency analysis for predictive industrial machinery maintenance'
    ],
    pitfalls: [
      'Forgetting the Nyquist-Shannon sampling theorem: Sampling an analog signal at less than twice its maximum frequency causes aliasing distortion.',
      'Treating time and frequency as simultaneously knowable with infinite precision (Heisenberg-Gabor limit).'
    ],
    quiz: {
      question: 'According to the Nyquist criterion, to accurately sample and reconstruct a signal containing frequencies up to 20 kHz without aliasing, what must the minimum sampling rate be?',
      options: [
        '10 kHz',
        '20 kHz',
        '40 kHz',
        '100 kHz'
      ],
      correctAnswerIndex: 2,
      explanation: 'The Nyquist-Shannon sampling theorem states that the sampling rate f_s must be at least twice the maximum frequency component: f_s ≥ 2 · 20 kHz = 40 kHz.'
    }
  }
];
