export const en = {
  locale: 'en',
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
  },
  hero: {
    subtitle:
      'Computer Engineering student working on UAV autonomy with ROS 2/PX4 and building Java/React applications.',
    summary:
      'I coordinate software work for ECOFUAV and develop practical project software with clear delivery plans.',
    cta: {
      projects: 'View Projects',
      contact: 'Get In Touch',
      resume: 'Download Resume',
    },
    quickSnapshot: 'Quick Snapshot',
    availability: 'Availability',
    education: 'Education',
  },
  about: {
    eyebrow: 'About',
    title: 'About',
    body: [
      'Computer Engineering student at Izmir University of Economics.',
      'Focused on UAV autonomy, simulation-first testing, and practical software development.',
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Selected work',
    intro: 'Recent work in UAV autonomy and planning software.',
    featured: 'Featured Project',
    readMore: 'Read more',
    items: {
      teknofest: {
        title: 'ECOFUAV — TEKNOFEST Fighting UAV',
        description:
          'Competition UAV project for autonomous mission execution. Stack: PX4 SITL, Gazebo, ROS 2, C++/Python, Git, Linux; I lead software planning and integration.',
      },
      examPlanner: {
        title: 'Exam Timetable Planner',
        description:
          'Desktop application for creating and editing exam schedules. Built with Java, JavaFX, FXML, and Maven; I contributed to UI structure, theme implementation, and team delivery flow.',
      },
    },
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
    email: 'bilirutku35@gmail.com',
    phone: '+90 534 684 0696',
    github: 'https://github.com/utkubilir',
    linkedin: 'https://www.linkedin.com/in/utkubilir',
  },
} as const

export default en
