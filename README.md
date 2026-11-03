# EngiGuide

**EngiGuide** is a modern, responsive web application engineered to guide undergraduate engineering students across every phase of their academic and professional journey.

---

## Features

1. **Branch Explorer**
   - Detailed breakdowns for core disciplines:
     - Computer Science & Engineering (CSE)
     - Electronics & Communication (ECE)
     - Mechanical Engineering (MECH)
     - Civil & Structural Engineering (CIVIL)
     - Chemical & Process Engineering (CHEM)
     - Aerospace & Biomedical Engineering (AERO/BME)
   - Curriculum previews, industry toolchains, common misconceptions, and direct side-by-side branch comparison mode.

2. **Core Concepts Hub**
   - First-principles conceptual overviews across fundamental domains.
   - Intuitive real-world analogies, governing equations, and common engineering traps.
   - Interactive self-assessment quizzes with immediate feedback and detailed explanations.

3. **Curated Study Resources**
   - Verified, open-access courseware and simulators (MIT OCW, NPTEL, Falstad Circuit Simulator, All About Circuits, LearnChemE, NASA Glenn).
   - Multi-facet filtering by engineering discipline and format type.

4. **Project Planner & Milestone Tracker**
   - Production-grade project blueprints (Autonomous Robotics, Distributed Key-Value Engines, Low-power IoT Telemetry, Seismic Health Monitoring).
   - Step-by-step milestone checklists with progress bars and `localStorage` persistence.

5. **Career Pathways & Readiness**
   - 4-year strategic roadmaps for Industry Engineering, Graduate School (MS/PhD), and Deep-Tech Startups.
   - Interactive internship readiness checklist.
   - Directory of professional societies (IEEE, ASME, ASCE, ACM, AIChE, AIAA).

6. **Offline Bookmarks & Global Search**
   - Instant search across branches, concepts, and guides.
   - Slide-out bookmarks drawer for saving study materials and concepts locally.

---

## Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS + Lucide React Icons
- **Testing**: Vitest + React Testing Library + JSDOM
- **End-to-End Verification**: Playwright (Desktop & Mobile)

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation & Development Server
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

### Running Tests
```bash
# Run unit and integration test suite
npm test
```

### Production Build & Preview
```bash
# Build optimized static bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Future Enhancements
- User accounts and cloud synchronization for project milestones and bookmarks across devices.
- Interactive GPA / CGPA calculator and academic credit load planner.
- Formula cheat-sheets with downloadable offline PDF summaries.
- Community-contributed project gallery with pull request review guidelines.
