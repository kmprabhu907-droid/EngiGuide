export const branches = [
  {
    id: 'cs',
    name: 'Computer Science & Engineering',
    shortCode: 'CSE',
    category: 'Computing & Software',
    icon: 'Laptop',
    tagline: 'Designing computation, algorithms, software architectures, and intelligent systems.',
    overview: 'Computer Science & Engineering deals with the theoretical foundations of information and computation, along with practical techniques for the implementation and application of software and distributed computing architectures.',
    coreSubjects: [
      'Data Structures & Algorithms',
      'Operating Systems & Kernel Architecture',
      'Computer Networks & Protocols',
      'Database Management Systems',
      'Theory of Computation & Automata',
      'Software Engineering & System Design'
    ],
    keyToolsAndTech: [
      'Git / GitHub',
      'Linux / Bash',
      'C / C++ / Rust',
      'Python / Java / TypeScript',
      'Docker / Kubernetes',
      'SQL / PostgreSQL / MongoDB'
    ],
    commonMisconceptions: [
      'CS is purely coding: In reality, problem analysis, discrete mathematics, and systemic architecture form the core.',
      'You must be a genius in advanced calculus: Discrete math, boolean logic, and graph theory are generally far more critical in day-to-day software engineering.'
    ],
    careerTracks: [
      'Software Development Engineer (Backend / Frontend / Full-Stack)',
      'Systems & Cloud Platform Engineer',
      'Data Engineer / Machine Learning Specialist',
      'Cybersecurity & Pen-testing Analyst'
    ],
    projectTypes: [
      'Distributed key-value stores',
      'Network packet sniffer & analyzers',
      'Full-stack collaborative platforms',
      'Compiler or domain-specific language interpreters'
    ]
  },
  {
    id: 'ece',
    name: 'Electronics & Communication Engineering',
    shortCode: 'ECE',
    category: 'Hardware & Signals',
    icon: 'Cpu',
    tagline: 'Bridging silicon microelectronics, signal processing, embedded systems, and wireless networks.',
    overview: 'Electronics and Communication Engineering encompasses the study of microelectronics, semiconductor devices, analog/digital communication, signal analysis, and embedded microcontrollers connecting physical hardware to digital computing.',
    coreSubjects: [
      'Analog & Digital Circuits',
      'Signals & Systems Analysis',
      'Electromagnetic Field Theory & Waveguides',
      'Microprocessors & Microcontrollers (ARM / RISC-V)',
      'Digital Signal Processing (DSP)',
      'VLSI Design & Hardware Description Languages'
    ],
    keyToolsAndTech: [
      'Verilog / VHDL / SystemVerilog',
      'MATLAB / GNU Octave',
      'LTspice / Cadence Virtuoso',
      'KiCAD / Altium Designer',
      'Embedded C / Assembly',
      'Oscilloscopes & Logic Analyzers'
    ],
    commonMisconceptions: [
      'ECE is only fixing consumer appliances: It is actually the vanguard of semiconductor fabrication, nanotech, and wireless 5G/6G physical layer protocols.',
      'Hardware never involves software: Modern firmware, FPGA programming, and EDA tooling rely extensively on software programming.'
    ],
    careerTracks: [
      'ASIC / FPGA Verification Engineer',
      'Embedded Systems & Firmware Engineer',
      'RF & Microwave Communications Engineer',
      'IoT Solutions Architect'
    ],
    projectTypes: [
      'RISC-V single-cycle core on FPGA',
      'Autonomous sensor fusion node with LoRa telemetry',
      'Software-defined radio (SDR) receiver',
      'Precision biomedical pulse oximeter'
    ]
  },
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    shortCode: 'MECH',
    category: 'Thermodynamics & Mechanics',
    icon: 'Cog',
    tagline: 'Engineering physical dynamics, thermal energy conversion, robotics, and advanced manufacturing.',
    overview: 'Mechanical Engineering is one of the broadest foundational disciplines. It focuses on how forces and energy interact with matter, encompassing thermodynamics, fluid dynamics, solid mechanics, materials science, and robotics.',
    coreSubjects: [
      'Engineering Mechanics & Statics/Dynamics',
      'Strength of Materials & Solid Mechanics',
      'Thermodynamics & Heat Transfer',
      'Fluid Mechanics & Turbomachinery',
      'Theory of Machines & Kinematics',
      'Computer-Aided Design (CAD) & Manufacturing'
    ],
    keyToolsAndTech: [
      'SolidWorks / Autodesk Inventor / Fusion 360',
      'ANSYS FEA / CFD',
      'MATLAB / Simulink',
      '3D Printing (FDM/SLA) & CNC Milling',
      'GD&T (Geometric Dimensioning & Tolerancing)',
      'Python for Scientific Computing'
    ],
    commonMisconceptions: [
      'Mechanical engineering is obsolete in the digital era: EV powertrains, aerospace systems, biomedical implants, and micro-electromechanical systems (MEMS) are cutting-edge mechanical domains.',
      'It is only manual workshop labor: The vast majority of modern engineering relies on finite element simulation, automated telemetry, and precision computational design.'
    ],
    careerTracks: [
      'Mechanical Design / Product Development Engineer',
      'Thermal & Fluid Dynamics Analyst (CFD)',
      'Automotive / Aerospace Systems Engineer',
      'Robotics & Automation Engineer'
    ],
    projectTypes: [
      'Kinematic robotic manipulator arm with inverse kinematics',
      'CFD-optimized aerodynamic airfoil or drone chassis',
      'Heat exchanger test rig with PID thermal control',
      'Automated gear transmission gearbox model'
    ]
  },
  {
    id: 'civil',
    name: 'Civil & Structural Engineering',
    shortCode: 'CIVIL',
    category: 'Infrastructure & Built Environment',
    icon: 'Building2',
    tagline: 'Conceiving, modeling, constructing, and maintaining resilient global infrastructure.',
    overview: 'Civil Engineering shapes the human habitat. It encompasses structural engineering, geotechnical analysis, transportation systems, water resources, and sustainable construction practices.',
    coreSubjects: [
      'Structural Analysis & Mechanics of Solids',
      'Soil Mechanics & Geotechnical Engineering',
      'Fluid Mechanics & Hydraulics / Hydrology',
      'Surveying & Geomatics (GIS / Remote Sensing)',
      'Reinforced Concrete (RCC) & Steel Structures Design',
      'Transportation & Highway Engineering'
    ],
    keyToolsAndTech: [
      'AutoCAD & Civil 3D',
      'ETABS / SAP2000 / STAAD.Pro',
      'Revit (BIM - Building Information Modeling)',
      'QGIS / ArcGIS',
      'Primavera P6 / MS Project',
      'Python for spatial & seismic data analysis'
    ],
    commonMisconceptions: [
      'Civil engineering is merely brick-laying supervision: Modern civil engineering involves complex seismic simulation, smart materials, hydrological flow modeling, and geotechnical sensor networks.',
      'Civil doesn’t use modern computing: Digital twins, GIS spatial analytics, and AI in structural health monitoring are standard high-tech tools.'
    ],
    careerTracks: [
      'Structural Design Engineer',
      'Geotechnical & Foundation Engineer',
      'Transportation & Urban Infrastructure Planner',
      'Water Resources & Environmental Engineer'
    ],
    projectTypes: [
      'Seismic response simulation of multi-story steel frame',
      'Stormwater drainage network design using GIS catchment modeling',
      'Low-carbon geopolymer concrete mix optimization',
      'BIM model for an eco-friendly campus library'
    ]
  },
  {
    id: 'chem',
    name: 'Chemical & Process Engineering',
    shortCode: 'CHEM',
    category: 'Process & Materials',
    icon: 'FlaskConical',
    tagline: 'Transforming raw molecular materials into scalable energy, pharmaceuticals, and products.',
    overview: 'Chemical Engineering bridges chemistry and industrial physics, focusing on the design, optimization, and scaling of chemical reactors, separation processes, clean energy systems, and biochemical synthesis.',
    coreSubjects: [
      'Chemical Engineering Thermodynamics',
      'Heat & Mass Transfer Operations',
      'Fluid Flow Operations',
      'Chemical Reaction Engineering (CRE & Kinetics)',
      'Process Dynamics & Instrumentation Control',
      'Plant Design, Economics & Industrial Safety'
    ],
    keyToolsAndTech: [
      'Aspen Plus / Aspen HYSYS',
      'DWSIM (Open Source Process Simulator)',
      'MATLAB / Python for chemical kinetics',
      'COMSOL Multiphysics',
      'P&ID (Piping and Instrumentation Diagrams)',
      'Process safety analytical tools (HAZOP)'
    ],
    commonMisconceptions: [
      'Chemical engineering is just pure laboratory chemistry: It is actually mostly engineering physics—fluid mechanics, heat transport, thermodynamics, and large-scale mass transport balance.',
      'Only oil and gas refineries hire chemical engineers: Biotech, battery manufacturing, water purification, pharmaceuticals, and semiconductor fabrication heavily employ chemical engineers.'
    ],
    careerTracks: [
      'Process Design & Simulation Engineer',
      'Bioprocess & Pharmaceutical Development Engineer',
      'Battery / Energy Storage Process Engineer',
      'Environmental & Safety (EHS) Process Manager'
    ],
    projectTypes: [
      'Computer simulation of continuous bio-ethanol distillation column',
      'Kinetic modeling of wastewater catalytic degradation',
      'Design of an automated membrane water desalinator',
      'Thermal runaway safety analysis of lithium-ion cells'
    ]
  },
  {
    id: 'bme_aero',
    name: 'Interdisciplinary (Aerospace & Biomedical)',
    shortCode: 'AERO/BME',
    category: 'Specialized & Interdisciplinary',
    icon: 'Compass',
    tagline: 'Pioneering frontier exploration from orbital spacecraft to life-saving medical devices.',
    overview: 'Emerging interdisciplinary branches integrate principles from electrical, mechanical, and materials engineering to solve specialized human challenges—whether in flight and orbital mechanics, or physiological biomechanics.',
    coreSubjects: [
      'Aerodynamics & Compressible Flow / Biomechanics',
      'Flight Dynamics & Control / Biomedical Instrumentation',
      'Propulsion Systems / Biomaterials Science',
      'Orbital Mechanics / Medical Signal Processing',
      'Avionics / Physiological System Modeling'
    ],
    keyToolsAndTech: [
      'OpenFOAM / ANSYS Fluent',
      'NASA OpenVSP / XFLR5',
      'MATLAB / Simulink Simscape',
      'LabVIEW & Bio-sensors',
      '3D Slicer & DICOM medical imaging',
      'SolidWorks / FreeCAD'
    ],
    commonMisconceptions: [
      'You cannot transition into aerospace or biomedical from classic ME or ECE: Core engineering degrees are widely accepted and routinely feed into aerospace and med-tech master programs.',
      'Aerospace is only rocket launches: Satellite communication constellations, atmospheric drones, and renewable wind turbines also rely on aerospace aerodynamicists.'
    ],
    careerTracks: [
      'Aerodynamic / Guidance, Navigation & Control (GNC) Engineer',
      'Spacecraft Systems Integration Engineer',
      'Biomedical Device R&D Engineer',
      'Clinical Regulatory & Biomechanics Engineer'
    ],
    projectTypes: [
      'Fixed-wing autonomous mapping UAV design with telemetry',
      'Low-cost surface electromyography (sEMG) prosthetic hand',
      'Orbital trajectory simulator using numerical integration in Python',
      'ECG signal diagnostic filter with real-time waveform display'
    ]
  }
];
