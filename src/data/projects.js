import examPlannerPreview from '../assets/exam-planner.png'
import portfolioPreview from '../assets/portfolio-preview.png'

export const projects = [
  {
    featured: true,
    slug: 'teknofest',
    title: 'ECOFUAV — TEKNOFEST Savaşan İHA',
    role: 'Team Captain',
    period: '2025 - Present',
    description:
      'Competition UAV project focused on mission planning, autonomy logic, and system integration. Stack: ROS 2, PX4 SITL, Gazebo, C++/Python, Git, and Linux.',
    tech: ['PX4 SITL', 'Gazebo', 'ROS 2', 'C++/Python', 'Git', 'Linux'],
    bullets: [
      'Planned weekly integration milestones across software, electronics, and mechanical teams.',
      'Ran mission scenarios in PX4 SITL + Gazebo before field tests.',
      'Built and reviewed offboard control flows for engagement tasks.',
      'Set telemetry and logging checkpoints for debugging and post-flight analysis.',
      'Tracked test results and blockers to prioritize sprint tasks.',
    ],
    detailSections: {
      leadership: [
        'Coordinated software, electronics, and mechanical tracks each sprint.',
        'Defined roadmap milestones, owners, and delivery dates.',
        'Adjusted priorities based on test results and competition needs.',
      ],
      simulationTesting: [
        'Ran PX4 SITL + Gazebo loops for mission scenario validation.',
        'Used simulation results to prepare hardware test plans.',
        'Logged outcomes and fixes after each test cycle.',
      ],
      autonomyGuidance: [
        'Implemented autonomy blocks for offboard control and engagement flows.',
        'Reviewed control logic for repeatable behavior across test cases.',
        'Mapped autonomy tasks to mission and safety requirements.',
      ],
      telemetryInfrastructure: [
        'Designed telemetry flow and logging points for runtime monitoring.',
        'Prepared interfaces for integration with competition systems.',
        'Standardized diagnostics to make failures reproducible.',
      ],
    },
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Planning and Architecture',
        description: 'Defined scope, modules, and baseline mission architecture.',
      },
      {
        phase: 'Phase 2',
        title: 'Simulation Validation',
        description: 'Verified mission scenarios in PX4/Gazebo and iterated control logic.',
      },
      {
        phase: 'Phase 3',
        title: 'Integration and Delivery',
        description: 'Completed system integration, performance checks, and competition prep.',
      },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/utkubilir' },
      { label: 'Project Notes', href: '' },
    ],
  },
  {
    slug: 'exam-timetable-planner',
    image: examPlannerPreview,
    title: 'Exam Timetable Planner',
    role: 'Team Project (JavaFX Desktop App)',
    period: '2025 - 2026',
    description:
      'Desktop app for creating and editing exam schedules with a JavaFX interface. Built with Java, JavaFX, FXML, and Maven.',
    tech: ['Java', 'JavaFX', 'Maven', 'FXML'],
    links: [
      { label: 'GitHub', href: 'https://github.com/utkubilir' },
      { label: 'Demo', href: '' },
    ],
    bullets: [
      'Built the interface with FXML and Scene Builder for clear UX structure.',
      'Applied CSS theming with dark mode support across reusable UI blocks.',
      'Collaborated using Git/GitHub workflow and Jira/Trello task tracking.',
    ],
  },
  {
    slug: 'portfolio-site',
    image: portfolioPreview,
    title: 'Personal Portfolio',
    role: 'Frontend Developer',
    period: '2026',
    description:
      'A cyber-themed personal portfolio website built to showcase my projects, skills, and experience. It features responsive design, smooth scrolling, scroll spy, and a dark mode aesthetic.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Lucide React'],
    links: [
      { label: 'GitHub', href: 'https://github.com/utkubilir/portfolio-site' },
    ],
    bullets: [
      'Implemented a responsive layout using Tailwind CSS with mobile-first approach.',
      'Created custom scroll spy hook to highlight active navigation sections.',
      'Designed a terminal-like user interface with custom animations and hover effects.',
    ],
  },
]
