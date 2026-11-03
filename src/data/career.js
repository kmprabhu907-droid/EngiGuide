export const careerTracks = [
  {
    id: 'industry',
    title: 'Industry Engineering Roles',
    badge: 'Direct Employment',
    summary: 'Direct engineering careers across consumer tech, industrial manufacturing, defense, energy, infrastructure, and consulting.',
    keyStages: [
      {
        year: 'Year 1: Foundations & Exploration',
        focus: 'High GPA, mathematical foundations, exploratory hobby projects, join student technical chapters (IEEE, ASME, ASCE, ACM).'
      },
      {
        year: 'Year 2: Skill Specialization & First Co-op / Lab',
        focus: 'Branch-specific depth, version control / CAD / simulation fluency, campus lab assistantship or local technical internship.'
      },
      {
        year: 'Year 3: Rigorous Internships & Portfolio Polish',
        focus: 'Off-campus summer engineering internship, open-source or hardware project portfolio, networking on LinkedIn and career fairs.'
      },
      {
        year: 'Year 4: Capstone Execution & Full-Time Offers',
        focus: 'Final year design capstone project, system design / technical interview prep, on-campus and direct corporate recruitment.'
      }
    ],
    skillMatrix: [
      'Core discipline fundamentals and first-principles reasoning',
      'Effective technical documentation and clear written communication',
      'Familiarity with industry-standard toolchains (Git, CAD, FEA, Linux, JIRA)',
      'Cross-functional collaboration and safety regulations'
    ]
  },
  {
    id: 'higher-studies',
    title: 'Graduate Studies (MS / M.Tech / PhD)',
    badge: 'Research & Specialization',
    summary: 'Pursuing advanced master’s or doctoral research degrees in specialized subfields such as robotics, VLSI, artificial intelligence, structural dynamics, or renewable process engineering.',
    keyStages: [
      {
        year: 'Year 1 - 2: Research Interest Cultivation',
        focus: 'Identify research subfields, connect with faculty doing active funded research, read peer-reviewed conference/journal papers.'
      },
      {
        year: 'Year 3: Research Publications & Standardized Tests',
        focus: 'Work toward a published conference paper or thesis proposal; prepare for exams (GRE, TOEFL/IELTS, GATE depending on region).'
      },
      {
        year: 'Year 4: Professor Outreach & Statement of Purpose (SOP)',
        focus: 'Draft focused SOP highlighting technical capability, obtain 3 strong academic letters of recommendation, submit graduate applications before December deadlines.'
      }
    ],
    skillMatrix: [
      'Literature review and critical critique of academic papers',
      'Mathematical rigor, statistical hypothesis testing, and error bounds',
      'Scientific publishing standards (LaTeX, IEEE/ACM formats)'
    ]
  },
  {
    id: 'entrepreneurship',
    title: 'Deep-Tech & Engineering Entrepreneurship',
    badge: 'Innovation & Startups',
    summary: 'Translating engineering research and hardware/software prototypes into viable commercial products, patents, and venture-backed or bootstrapped companies.',
    keyStages: [
      {
        year: 'Problem Discovery & Customer Validation',
        focus: 'Interview target users to identify real industrial bottlenecks before writing code or manufacturing metal.'
      },
      {
        year: 'Proof-of-Concept & Minimum Viable Product (MVP)',
        focus: 'Build low-cost functional prototypes demonstrating core physics or algorithmic feasibility.'
      },
      {
        year: 'University Incubator & Seed Grants',
        focus: 'Apply to university innovation grants, government SBIR / startup funds, and pitch competitions without surrendering premature equity.'
      }
    ],
    skillMatrix: [
      'Rapid iterative prototyping (3D printing, breadboarding, cloud MVP)',
      'Unit economics, BOM cost analysis, and supply chain logistics',
      'IP strategy, provisional patent drafting, and investor pitch synthesis'
    ]
  }
];

export const internshipChecklist = [
  { id: 'chk-1', text: 'Clean 1-page engineering resume formatted with clear sections (Education, Projects, Technical Skills, Experience).', category: 'Resume' },
  { id: 'chk-2', text: 'GitHub profile or engineering portfolio website with clean READMEs, photos, and code/schematic links for at least 2 distinct projects.', category: 'Portfolio' },
  { id: 'chk-3', text: 'Fluency in core discipline technical interview questions and fundamental first-principles formulas.', category: 'Technical Prep' },
  { id: 'chk-4', text: 'LinkedIn profile with a professional photo, detailed project bullets, and connections with college alumni working in target companies.', category: 'Networking' },
  { id: 'chk-5', text: 'Drafted and tailored cover letter template highlighting specific enthusiasm and alignment with the company’s engineering mission.', category: 'Application' },
  { id: 'chk-6', text: 'Practiced behavioural interview answers using the STAR method (Situation, Task, Action, Result) for teamwork and conflict scenarios.', category: 'Interview' }
];

export const societiesAndChapters = [
  { name: 'IEEE (Institute of Electrical and Electronics Engineers)', branch: 'ECE, CS, EEE', website: 'https://www.ieee.org' },
  { name: 'ASME (American Society of Mechanical Engineers)', branch: 'Mechanical', website: 'https://www.asme.org' },
  { name: 'ASCE (American Society of Civil Engineers)', branch: 'Civil', website: 'https://www.asce.org' },
  { name: 'ACM (Association for Computing Machinery)', branch: 'Computer Science', website: 'https://www.acm.org' },
  { name: 'AIChE (American Institute of Chemical Engineers)', branch: 'Chemical', website: 'https://www.aiche.org' },
  { name: 'AIAA (American Institute of Aeronautics and Astronautics)', branch: 'Aerospace', website: 'https://www.aiaa.org' }
];
