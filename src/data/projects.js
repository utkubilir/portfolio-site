export const projects = [
  {
    featured: true,
    slug: 'teknofest',
    title: 'ECOFUAV — TEKNOFEST Savaşan İHA',
    role: 'Team Captain',
    period: '2025 - Present',
    description:
      'Leading a multidisciplinary UAV competition team and driving roadmap, autonomy development, simulation validation, and end-to-end integration for mission-ready workflows.',
    tech: ['PX4 SITL', 'Gazebo', 'ROS 2', 'C++/Python', 'Git', 'Linux'],
    bullets: [
      'Coordinated software, electronics, and mechanical sub-teams with clear milestones and delivery plans.',
      'Validated mission scenarios with PX4 SITL + Gazebo simulation loops before field execution.',
      'Contributed to autonomy architecture for offboard control and engagement/lock-on scenarios.',
      'Planned perception and telemetry data flow for robust integration with competition infrastructure.',
      'Managed end-to-end testing rhythm and system-level readiness for competition phases.',
    ],
    detailSections: {
      leadership: [
        'Led multidisciplinary coordination across software, electronics, and mechanical tracks.',
        'Defined roadmap milestones, work packages, and ownership for predictable delivery cycles.',
        'Aligned integration priorities with competition constraints and team capacity.',
      ],
      simulationTesting: [
        'Built and iterated PX4 SITL + Gazebo validation loops for mission scenario testing.',
        'Used simulation-first feedback cycles to reduce integration risk before hardware testing.',
        'Tracked test outcomes to guide sprint priorities and issue resolution.',
      ],
      autonomyGuidance: [
        'Supported autonomy pipeline design for offboard control and engagement workflows.',
        'Structured guidance logic decisions around reliability, traceability, and controllability.',
        'Connected autonomy blocks with mission execution requirements and safety constraints.',
      ],
      telemetryInfrastructure: [
        'Planned telemetry data flow and logging strategy for operational visibility.',
        'Prepared integration approach for competition-side systems and communication interfaces.',
        'Improved reproducibility by standardizing diagnostics and data capture points.',
      ],
    },
    roadmap: [
      {
        phase: 'Phase 1',
        title: 'Planning and Architecture',
        description: 'Scope definition, technical decomposition, and baseline mission architecture.',
      },
      {
        phase: 'Phase 2',
        title: 'Simulation Validation',
        description: 'Scenario verification with PX4/Gazebo and rapid iteration of control logic.',
      },
      {
        phase: 'Phase 3',
        title: 'Integration and Delivery',
        description: 'System-level integration, performance checks, and competition readiness.',
      },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/utkubilir' },
      { label: 'Project Notes', href: '' },
    ],
  },
  {
    title: 'Exam Timetable Planner',
    role: 'Team Project (JavaFX Desktop App)',
    period: '2025 - 2026',
    description:
      'Desktop timetable planning application with FXML/Scene Builder driven UI, reusable components, custom icons, and collaborative delivery flow.',
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
]
