export const en = {
  locale: 'en',
  meta: {
    homeTitle: 'Utku Bilir | Portfolio',
    homeDescription:
      'Third-year Computer Engineering student at Izmir University of Economics seeking internship opportunities in software development, computer vision, and UAV autonomy.',
    teknofestTitle: 'ECOFUAV TEKNOFEST Project | Utku Bilir',
    teknofestDescription:
      'Detailed overview of the ECOFUAV TEKNOFEST Fighting UAV project, architecture, simulation flow, autonomy blocks, and roadmap.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    certificates: 'Certificates',
    activities: 'Activities',
    skills: 'Skills',
    languages: 'Languages',
    contact: 'Contact',
  },
  ui: {
    switchToTurkish: 'Switch language to Turkish',
    switchToEnglish: 'Switch language to English',
    themeDark: 'Dark',
    themeLight: 'Light',
    loading: 'Loading...',
  },
  hero: {
    subtitle:
      'Computer Engineering student in Izmir, leading software planning for a TEKNOFEST UAV team and building practical Java/React tools.',
    summary:
      'Most weeks I split my time between PX4 mission simulation, team coordination, and shipping course projects that people can actually use.',
    currentlyBuildingLabel: 'Currently building',
    currentlyBuilding:
      'ECOFUAV mission-control workflows and an exam scheduling desktop app for day-to-day university planning.',
    recentFocusLabel: 'Recent technical focus',
    recentFocus:
      'ROS 2 module boundaries, PX4 SITL test scenarios, telemetry logging quality, and maintainable JavaFX UI structure.',
    workStyleLabel: 'How I work',
    workStyle:
      'Short planning cycles, written decisions, and test notes that explain what changed and why.',
    cta: {
      projects: 'View Projects',
      contact: 'Get In Touch',
      resume: 'Download Resume',
    },
    quickSnapshot: 'Right now',
    availability: 'Availability',
    education: 'Education',
  },
  about: {
    eyebrow: 'About',
    title: 'How I Work',
    body: [
      'I am a Computer Engineering student at Izmir University of Economics, currently in my third year.',
      'My main project is ECOFUAV for TEKNOFEST, where I help shape software milestones, integration order, and simulation-first validation.',
      'Outside UAV work, I build Java and React projects that solve concrete student needs and force me to think about reliability, not just UI.',
      'I care about clear interfaces between modules, transparent technical tradeoffs, and team communication that keeps delivery realistic.',
    ],
    currentlyBuildingTitle: 'Currently building',
    currentlyBuilding: [
      'Mission planning and offboard control flow for ECOFUAV.',
      'A JavaFX exam timetable planner with editable schedule blocks.',
      'A cleaner portfolio codebase with stronger project storytelling.',
    ],
    recentFocusTitle: 'Recent technical focus',
    recentFocus: [
      'Simulation-first debugging in PX4 SITL + Gazebo.',
      'Telemetry logs that are useful for post-test decisions.',
      'React components that stay readable as sections grow.',
    ],
    careTitle: 'What I care about',
    care: [
      'Decisions that can be explained, not just implemented.',
      'Balancing speed with testability in student teams.',
      'Projects that are small enough to finish and improve.',
    ],
  },
  projects: {
    eyebrow: 'Selected Work',
    title: 'Selected work',
    intro:
      'Two representative projects with real constraints, engineering decisions, and outcomes.',
    caseStudy: 'Mini case study',
    readMore: 'Full ECOFUAV case study',
    fields: {
      problem: 'Problem',
      role: 'My role',
      techStack: 'Tech stack',
      constraints: 'Constraints',
      keyDecision: 'Key decision',
      result: 'Result',
      learned: 'What I learned',
    },
    items: {
      teknofest: {
        title: 'ECOFUAV — TEKNOFEST Fighting UAV',
        context: 'Student competition UAV for autonomous mission execution',
        description: 'Student competition UAV for autonomous mission execution.',
        role: 'Team captain focused on software planning and integration',
        caseStudy: {
          problem:
            'The team needed a repeatable way to validate mission logic before expensive and risky field tests.',
          constraints:
            'Competition timeline, cross-team dependencies (software/electronics/mechanics), and limited real-flight opportunities.',
          keyDecision:
            'We adopted a simulation-first loop in PX4 SITL + Gazebo and made test logs a required artifact before hardware runs.',
          result:
            'Integration meetings became more concrete, blockers were found earlier, and field-test preparation became less ad-hoc.',
          learned:
            'Technical leadership is mostly decision hygiene: define interfaces early, document assumptions, and revisit priorities after each test cycle.',
        },
      },
      'exam-timetable-planner': {
        title: 'Exam Timetable Planner',
        context: 'Desktop planning tool for creating and editing exam schedules',
        description: 'Desktop planning tool for creating and editing exam schedules.',
        role: 'Team contributor focused on UI structure and delivery workflow',
        caseStudy: {
          problem:
            'Students needed a faster way to build and revise exam schedules than editing spreadsheets manually.',
          constraints:
            'Desktop-only scope, tight semester deadline, and a team with mixed JavaFX experience.',
          keyDecision:
            'We structured screens with reusable FXML blocks and kept data flow simple so teammates could ship features in parallel.',
          result:
            'The app supported quick schedule edits with a consistent interface and reduced confusion during collaborative changes.',
          learned:
            'For student products, maintainability beats complexity. Clear component boundaries helped us move faster than clever architecture would have.',
        },
      },
    },
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Professional timeline',
    description:
      'Internship and project contributions across software and autonomy workflows.',
  },
  education: {
    eyebrow: 'Education',
    title: 'Academic background',
    description: 'Computer Engineering studies and timeline.',
  },
  certificates: {
    eyebrow: 'Certificates',
    title: 'Certifications and courses',
    description:
      'Completed and planned milestones relevant to engineering and software work.',
    expected: 'Expected',
    completed: 'Completed',
  },
  activities: {
    eyebrow: 'Leadership',
    title: 'Club and volunteer activities',
    description:
      'Roles that shaped project ownership, communication, and execution discipline.',
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tooling and technical strengths',
    description:
      'Core technologies used in autonomy, backend/frontend, and team projects.',
  },
  languagesSection: {
    eyebrow: 'Languages',
    title: 'Communication proficiency',
    description:
      'Language levels used in academic and technical collaboration.',
  },
  teknofest: {
    back: 'Back to Home',
    projectDetail: 'Project Detail',
    title: 'ECOFUAV — TEKNOFEST Fighting UAV',
    rolePeriod: 'Team Captain • 2025 - Present',
    roadmap: 'Roadmap',
    sections: {
      architecture: {
        title: 'Architecture',
        body: [
          'Defined module boundaries for mission logic, control, and telemetry.',
          'Mapped interfaces so each subsystem could be tested and integrated in sequence.',
        ],
      },
      leadership: {
        title: 'Leadership',
        body: [
          'Planned weekly sprint targets and ownership across software, electronics, and mechanics.',
          'Tracked blockers and adjusted priorities based on test outcomes and schedule.',
        ],
      },
      simulation: {
        title: 'Simulation & Testing',
        body: [
          'Ran mission scenarios in PX4 SITL + Gazebo before hardware testing.',
          'Used simulation logs to validate behavior and prepare field test checklists.',
        ],
      },
      autonomy: {
        title: 'Autonomy & Offboard Control',
        body: [
          'Developed autonomy blocks for offboard mission control and engagement flow.',
          'Planned detect/track pipeline integration for target handling in later phases.',
        ],
      },
      telemetry: {
        title: 'Telemetry Integration',
        body: [
          'Set telemetry and logging points for monitoring, debugging, and post-flight review.',
          'Prepared data interfaces for competition-side integration and traceable diagnostics.',
        ],
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s connect',
    cta: 'Could we connect about an internship role or a project collaboration?',
    ready: 'Ready to connect?',
    locationLabel: 'Location:',
    timezoneLabel: 'Timezone:',
    languagesLabel: 'Languages:',
    responseLabel: 'Response:',
    cards: {
      primaryEmail: 'Primary Email',
      academicEmail: 'Academic Email',
      phone: 'Phone',
    },
    actions: {
      write: 'Write',
      call: 'Call',
      open: 'Open',
      copy: 'Copy',
      copied: 'Copied',
    },
    availability: 'Open to internship opportunities and project collaboration',
    responseTime: 'Usually replies within 24-48 hours',
    emailCta: 'Email me',
    email: 'bilirutku35@gmail.com',
    phone: '+90 534 684 0696',
    github: 'https://github.com/utkubilir',
    linkedin: 'https://www.linkedin.com/in/utkubilir',
  },
} as const

export default en
