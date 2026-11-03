export const projects = [
  {
    id: 'proj-1',
    title: 'Autonomous Mobile Robot with Obstacle Avoidance & SLAM',
    branch: 'mech',
    category: 'Robotics & Embedded Systems',
    difficulty: 'Intermediate',
    estimatedTime: '4 - 6 weeks',
    tags: ['Robotics', 'Arduino / ESP32', 'Sensors', 'Kinematics'],
    summary: 'Design, 3D print or laser cut a differential drive robotic chassis, wire motor drivers and ultrasonic/LiDAR sensors, and implement a closed-loop navigation algorithm.',
    prerequisites: [
      'Basic C/C++ or Python',
      'Understanding of PWM motor control and H-bridges',
      'Familiarity with microcontroller GPIO pins'
    ],
    techStackOrBOM: [
      'ESP32 or Arduino Mega',
      'L298N or TB6612FNG dual motor driver',
      '2x TT Gear motors with optical wheel encoders',
      'HC-SR04 ultrasonic sensor or VL53L0X ToF laser sensor',
      '3D-printed or acrylic chassis, 2S Li-ion battery pack'
    ],
    milestones: [
      {
        step: 1,
        title: 'Chassis & Kinematics Modeling',
        description: 'Calculate torque requirements based on payload weight, determine wheel radius, and assemble or 3D-print the mechanical chassis.',
        completed: false
      },
      {
        step: 2,
        title: 'Power & Motor Driver Wiring',
        description: 'Wire the battery protection circuit, buck converter for 5V microcontroller logic, and high-current leads to the motor driver.',
        completed: false
      },
      {
        step: 3,
        title: 'Closed-Loop PID Wheel Speed Control',
        description: 'Read quadrature optical encoder interrupts to maintain straight trajectories and precise turning angles under varying friction.',
        completed: false
      },
      {
        step: 4,
        title: 'Reactive Obstacle Avoidance Algorithm',
        description: 'Implement a finite-state machine (FSM) that monitors forward and angular distances, executing avoidance maneuvers before collisions.',
        completed: false
      },
      {
        step: 5,
        title: 'Telemetry & Documentation',
        description: 'Transmit real-time telemetry (battery voltage, sensor distances) over Bluetooth or Wi-Fi to a web dashboard; publish circuit schematics on GitHub.',
        completed: false
      }
    ],
    outcomes: 'Hands-on mastery of electromechanical integration, real-time interrupt programming, PID control, and schematic drafting.'
  },
  {
    id: 'proj-2',
    title: 'Distributed Log-Structured Key-Value Storage Engine',
    branch: 'cs',
    category: 'Systems & Cloud Software',
    difficulty: 'Advanced',
    estimatedTime: '3 - 5 weeks',
    tags: ['Go / Rust / C++', 'Distributed Systems', 'LSM-Tree', 'Networking'],
    summary: 'Build a high-performance persistent key-value store using an append-only log, in-memory MemTable (skip list or red-black tree), and SSTables on disk.',
    prerequisites: [
      'Proficiency in systems language (Go, Rust, C++, or modern Java)',
      'Understanding of file I/O, binary serialization, and buffer caches',
      'Basic knowledge of concurrency and thread safety'
    ],
    techStackOrBOM: [
      'Go or Rust programming environment',
      'gRPC / Protocol Buffers or raw TCP sockets',
      'Linux benchmark utilities (wrk, sysbench)',
      'Docker for local cluster containerization'
    ],
    milestones: [
      {
        step: 1,
        title: 'Storage Architecture & Write-Ahead Log (WAL)',
        description: 'Design the binary file format with CRC32 checksums, record lengths, key-value payloads, and append-only disk writer.',
        completed: false
      },
      {
        step: 2,
        title: 'In-Memory MemTable & Flush Lifecycle',
        description: 'Implement a concurrent Skip-List or Red-Black Tree in RAM; trigger background asynchronous disk flushes when memory thresholds are reached.',
        completed: false
      },
      {
        step: 3,
        title: 'SSTable Indexing & Bloom Filters',
        description: 'Generate sorted string tables with sparse block index offsets and probabilistic Bloom filters to avoid unnecessary disk seeks on misses.',
        completed: false
      },
      {
        step: 4,
        title: 'Compaction Engine',
        description: 'Build a background merge-sort compaction worker to reclaim disk space from tombstoned and overwritten keys.',
        completed: false
      },
      {
        step: 5,
        title: 'Client API & Stress Benchmarking',
        description: 'Expose a TCP / gRPC interface supporting GET, PUT, and DELETE; conduct read/write throughput benchmarks measuring latency percentiles (p95, p99).',
        completed: false
      }
    ],
    outcomes: 'In-depth expertise in database internals, high-throughput storage engines, memory-to-disk lifecycle, and benchmarking.'
  },
  {
    id: 'proj-3',
    title: 'Solar-Powered Environmental IoT Telemetry Node',
    branch: 'ece',
    category: 'Embedded & Renewable Electronics',
    difficulty: 'Beginner',
    estimatedTime: '2 - 3 weeks',
    tags: ['IoT', 'Solar', 'Low Power', 'PCB Design', 'MQTT'],
    summary: 'Create an ultra-low-power outdoor telemetry station that sleeps for 10-minute intervals, reads environmental sensors, transmits over MQTT/LoRa, and harvests solar energy.',
    prerequisites: [
      'Basic electrical safety and battery charging fundamentals',
      'Familiarity with I2C/SPI sensor interfaces',
      'Introductory C programming'
    ],
    techStackOrBOM: [
      'ESP32 with deep-sleep support or STM32 BluePill',
      'BME280 temperature, humidity & barometric pressure sensor',
      '6V 1W Solar panel with TP4056 or CN3791 MPPT charging circuit',
      '18650 Li-ion cell with protection module',
      'Free cloud MQTT broker (HiveMQ / Adafruit IO)'
    ],
    milestones: [
      {
        step: 1,
        title: 'Power Budget & Solar Sizing',
        description: 'Calculate average current consumption in deep-sleep (<20μA) vs active RF transmission (150mA); size the battery capacity to withstand 5 days of overcast weather.',
        completed: false
      },
      {
        step: 2,
        title: 'Sensor Interfacing & Calibration',
        description: 'Interface the BME280 via I2C; calibrate readings against a reference barometer and temperature thermometer.',
        completed: false
      },
      {
        step: 3,
        title: 'Deep Sleep & Real-Time Clock Wakeups',
        description: 'Configure ESP32 timer wakeup interrupts and isolate power to peripheral sensors using a P-channel MOSFET during sleep.',
        completed: false
      },
      {
        step: 4,
        title: 'Secure Cloud Ingestion',
        description: 'Format sensor payloads as lightweight JSON; publish to cloud broker via TLS-secured MQTT or LoRa gateway.',
        completed: false
      },
      {
        step: 5,
        title: 'Enclosure & Field Deployment',
        description: 'House the electronics inside an IP65 weatherproof junction box with a solar mounting bracket; log data over 7 consecutive days.',
        completed: false
      }
    ],
    outcomes: 'Mastery of power budgeting, energy harvesting, sensor communication protocols, and cloud IoT streaming.'
  },
  {
    id: 'proj-4',
    title: 'Seismic Response Analyzer & Structural Health Monitor',
    branch: 'civil',
    category: 'Civil & Structural Instrumentation',
    difficulty: 'Intermediate',
    estimatedTime: '4 - 5 weeks',
    tags: ['Civil', 'Structural Health', 'Accelerometers', 'Python'],
    summary: 'Construct a scaled shear-frame building model instrumented with multi-axis MEMS accelerometers to measure natural resonant frequencies and damping under simulated harmonic shaking.',
    prerequisites: [
      'Understanding of degrees of freedom, harmonic motion, and resonance',
      'Basic Python data plotting with NumPy and Matplotlib',
      'Basic microcontroller data acquisition'
    ],
    techStackOrBOM: [
      'Multi-story acrylic or balsa wood shear frame model',
      '3x ADXL345 or MPU6050 accelerometers',
      'Raspberry Pi or Arduino DAQ',
      'Variable speed DC shaker table or eccentric mass eccentric motor',
      'Python script for Fast Fourier Transform (FFT) analysis'
    ],
    milestones: [
      {
        step: 1,
        title: 'Physical Scaled Model Construction',
        description: 'Fabricate a 3-story model with flexible columns and rigid floor plates to simulate lateral inter-story drift.',
        completed: false
      },
      {
        step: 2,
        title: 'Sensor Instrumentation & Synchronous Sampling',
        description: 'Affix accelerometers on each story; synchronize high-rate acceleration sampling across all levels at 200 Hz.',
        completed: false
      },
      {
        step: 3,
        title: 'Free Vibration & Damping Ratio Calculation',
        description: 'Conduct pull-back pluck tests to capture free decay oscillations; compute structural damping using the logarithmic decrement method.',
        completed: false
      },
      {
        step: 4,
        title: 'Frequency Domain Modal Decomposition',
        description: 'Apply Fast Fourier Transform (FFT) to determine the 1st, 2nd, and 3rd fundamental natural frequencies of vibration.',
        completed: false
      },
      {
        step: 5,
        title: 'Tuned Mass Damper (TMD) Mitigation Demo',
        description: 'Design and install a tuned mass damper pendulum on the top floor and measure the percentage reduction in resonant displacement.',
        completed: false
      }
    ],
    outcomes: 'Direct validation of structural dynamics theories, digital vibration signal processing, and earthquake engineering principles.'
  }
];
