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
    systemBoot: 'System Boot',
    bootMessage: 'Sharp terminal portfolio initializing',
    portfolioNode: 'Portfolio Node',
  },
  hero: {
    subtitle:
      'Computer Engineering student in Izmir producing practical work in ROS 2/PX4 UAV autonomy and Java/React applications.',
    summary:
      'I split my time between PX4 mission simulation, ECOFUAV software planning, team coordination, and course projects people can actually use.',
    cta: {
      projects: 'View Projects',
      contact: 'Get In Touch',
      resume: 'Download Resume',
    },
    quickSnapshot: 'Quick Snapshot',
    profileNode: 'Profile Node',
    location: 'Izmir, Turkey',
    recruiterSnapshot: 'Recruiter Snapshot',
    proofPoints: 'Fast Signals',
    signals: [
      { label: 'Focus', value: 'ROS 2 / PX4 / Gazebo' },
      { label: 'Availability', value: 'Internships and project collaboration' },
      { label: 'Work style', value: 'Short cycles, written decisions, test notes' },
    ],
    snapshot: [
      { label: 'Availability', value: 'Open to internship opportunities' },
      { label: 'Education', value: 'B.Sc. Computer Engineering • Expected 2027' },
      { label: 'Focus Area', value: 'UAV autonomy, simulation, Java/React' },
      { label: 'Location', value: 'Izmir, Turkey • Europe/Istanbul' },
    ],
    availability: 'Availability',
    education: 'Education',
  },
  about: {
    eyebrow: 'Profile',
    title: 'How I work',
    fieldNotes: 'Profile Notes',
    body: [
      'I am a third-year Computer Engineering student at Izmir University of Economics, focused on software development and validation workflows for UAV systems with autonomous mission logic.',
      'My main project is ECOFUAV for TEKNOFEST, where I help shape software milestones, integration order, and simulation-first validation.',
      'Outside UAV work, I build Java and React projects that solve concrete student needs and force me to think about reliability, not just UI.',
      'I care about clear module interfaces, transparent technical tradeoffs, and team communication that keeps delivery realistic.',
    ],
  },
  projects: {
    eyebrow: 'Selected Work',
    title: 'Selected work',
    intro: 'Representative projects with real constraints, engineering decisions, and recruiter-relevant outcomes.',
    featured: 'Featured Project',
    preview: 'Technical Preview',
    stack: 'Stack',
    contributions: 'Concrete Contributions',
    readMore: 'Read ECOFUAV details',
    items: {
      teknofest: {
        title: 'ECOFUAV — TEKNOFEST Fighting UAV',
        role: 'Team captain focused on software planning and integration',
        period: '2025 - Present',
        description:
          'Student competition UAV for autonomous mission execution. The team needed a repeatable way to validate mission logic before expensive and risky field tests, so we standardized a simulation-first PX4 SITL + Gazebo loop and required useful test logs before hardware runs.',
        bullets: [
          'Planned weekly integration milestones across software, electronics, and mechanical teams.',
          'Made simulation logs part of the delivery artifact before hardware tests.',
          'Kept integration meetings concrete by documenting assumptions, blockers, and test outcomes.',
        ],
      },
      examPlanner: {
        title: 'Exam Timetable Planner',
        role: 'Team contributor focused on UI structure and delivery workflow',
        period: '2025 - 2026',
        description:
          'Desktop planning tool for creating and editing exam schedules. We kept the scope desktop-first, structured screens with reusable FXML blocks, and kept data flow simple so teammates with mixed JavaFX experience could ship in parallel.',
        bullets: [
          'Built the interface with FXML and Scene Builder for clear UX structure.',
          'Reduced team friction by keeping component boundaries and data flow readable.',
          'Learned that maintainability beats complexity for student products with tight deadlines.',
        ],
      },
      portfolioSite: {
        title: 'Personal Portfolio',
        role: 'Developer & Designer',
        period: '2026',
        description: 'A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth scrolling, active section tracking, and mobile-first design principles.',
        bullets: [
          'Implemented custom ScrollSpy hook for active section tracking.',
          'Designed a dynamic, responsive UI with modern CSS features.',
          'Optimized performance and build process with Vite.'
        ],
      },
    },
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Experience',
    description:
      'Internship and project contributions across software and autonomy workflows.',
    items: [
      {
        role: 'Computer Vision Intern (Volunteer)',
        org: 'A2InnoWave',
        period: 'Jul 2025 - Aug 2025',
        type: 'Internship',
        description:
          'Contributed to practical computer vision workflows and model experimentation for visual intelligence tasks.',
        bullets: [
          'Worked with OpenCV and YOLOv8 pipelines for classification, detection, segmentation, and tracking scenarios.',
          'Ran dataset and inference experiments to compare model behavior across real-world cases.',
          'Documented findings and supported iteration cycles with clear communication to the team.',
        ],
      },
    ],
  },
  education: {
    eyebrow: 'Education',
    title: 'Academic background',
    description: 'Computer Engineering studies and timeline.',
    academicNode: 'Academic Node',
    items: [
      {
        institution: 'Izmir University of Economics',
        degree: 'B.Sc. Computer Engineering',
        period: 'Expected 2027',
        details: '3rd Year Student',
      },
    ],
  },
  certificates: {
    eyebrow: 'Certificates',
    title: 'Certifications and courses',
    description:
      'Completed and planned milestones relevant to engineering and software work.',
    label: 'Certification',
    expected: 'Expected',
    completed: 'Completed',
  },
  activities: {
    eyebrow: 'Leadership',
    title: 'Club and volunteer activities',
    description:
      'Roles that shaped project ownership, communication, and execution discipline.',
    compactLabel: 'Leadership Summary',
    items: [
      {
        role: 'Chair, Supervisory Board',
        org: 'Folk Dance Club',
        period: '2025 - Present',
        bullets: [
          'Led governance and compliance reviews for club operations.',
          'Supervised process quality and strategic planning decisions.',
        ],
      },
      {
        role: 'Vice President',
        org: 'Folk Dance Club',
        period: '2024 - 2025',
        bullets: [
          'Managed administrative operations, event planning, and daily coordination.',
          'Improved communication flow and task ownership across member teams.',
        ],
      },
      {
        role: 'Board Member',
        org: 'Folk Dance Club',
        period: '2022 - 2024',
        bullets: [
          'Contributed to performance logistics and volunteer coordination.',
          'Supported onboarding and rehearsal planning for new members.',
        ],
      },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Technical snapshot',
    description:
      'Core technologies used in autonomy, backend/frontend, and team projects.',
    categories: {
      Programming: 'Programming',
      'Frameworks / Libraries': 'Frameworks / Libraries',
      'Simulation / Robotics': 'Simulation / Robotics',
      Databases: 'Databases',
      Tools: 'Tools',
      'Project Management': 'Project Management',
    },
  },
  languagesSection: {
    eyebrow: 'Languages',
    title: 'Communication proficiency',
    description:
      'Language levels used in academic and technical collaboration.',
    names: {
      Turkish: 'Turkish',
      English: 'English',
      German: 'German',
    },
    levels: {
      Native: 'Native',
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
    description:
      'Email is the fastest path for internship, project collaboration, or technical team conversations.',
    primaryLabel: 'Primary channel',
    primaryTitle: 'Start with email',
    cta: 'A short email is enough for an internship role, project collaboration, or technical team conversation.',
    ready: 'Ready to connect?',
    locationLabel: 'Location:',
    timezoneLabel: 'Timezone:',
    languagesLabel: 'Languages:',
    responseLabel: 'Response:',
    summaryTitle: 'Availability summary',
    summary:
      'Based in Izmir and open to conversations around software, autonomy, and team-based engineering work.',
    secondaryTitle: 'Secondary channels',
    emailNote:
      'Launch a message with a prepared subject line or copy the address directly.',
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
    social: {
      linkedin: 'Professional profile, networking, and quick follow-up messages.',
      github: 'Code, project history, and technical work samples.',
    },
    copyHint:
      'Copy the email address or start a message with a prepared subject line.',
    copyStatus: {
      primaryEmail: 'Primary email copied.',
      academicEmail: 'Academic email copied.',
      phone: 'Phone number copied.',
      default: 'Contact detail copied.',
    },
    availability: 'Open to internship opportunities and project collaboration',
    responseTime: 'Usually replies within 24–48 hours',
    emailCta: 'Email me',
    resumeCta: 'Download CV',
    scheduleCta: 'Schedule a call',
    email: 'bilirutku35@gmail.com',
    phone: '+90 534 684 0696',
    github: 'https://github.com/utkubilir',
    linkedin: 'https://www.linkedin.com/in/utkubilir',
  },
} as const

export default en
