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
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    contact: 'Contact',
  },
  ui: {
    switchToTurkish: 'Switch language to Turkish',
    switchToEnglish: 'Switch language to English',
    themeDark: 'Dark',
    themeLight: 'Light',
    loading: 'Loading...',
    skipToContent: 'Skip to content',
  },
  hero: {
    kicker: 'Computer Engineering student, builder, and lifelong learner',
    subtitle:
      'Computer Engineering student in Izmir, leading software planning for a TEKNOFEST UAV team and building practical Java/React tools.',
    summary:
      'I combine academic rigor in computer engineering with hands-on work in robotics, simulation, and practical student tools. My focus stays on reliable systems, clear technical decisions, and steady improvement through real projects.',
    quickSnapshot: 'Right now',
    cta: {
      projects: 'View Projects',
      contact: 'Get In Touch',
      resume: 'Download Resume',
    },
  },
  projects: {
    eyebrow: 'Selected Work',
    title: 'Selected work',
    intro:
      'Two representative projects with real constraints, engineering decisions, and outcomes.',
    readMore: 'Full ECOFUAV case study',
    items: {
      teknofest: {
        title: 'ECOFUAV — TEKNOFEST Fighting UAV',
        context: 'Student competition UAV for autonomous mission execution',
      },
      'exam-timetable-planner': {
        title: 'Exam Timetable Planner',
        context: 'Desktop planning tool for creating and editing exam schedules',
      },
    },
  },
  experienceEducation: {
    eyebrow: 'Experience & Education',
    title: 'Experience & Education',
    description:
      'Internship work, academic training, and student leadership that shape how I build systems.',
    sections: {
      experience: 'Experience',
      education: 'Education',
    },
    educationBullets: [
      'Focused on embedded systems, software engineering fundamentals, and applied AI coursework.',
      'Built team projects that connect classroom concepts to tools people can actually use.',
      'Continued taking ownership in student organizations alongside technical coursework.',
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Tooling and technical strengths',
    description:
      'Core technologies used in autonomy, backend/frontend, and team projects.',
  },
  teknofest: {
    eyebrow: 'Case study · ECOFUAV',
    onThisPage: 'On this page',
    skip: 'Skip to case study content',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s connect',
    cta: 'Could we connect about an internship role or a project collaboration?',
    ready: 'Ready to connect?',
    helper:
      'Send a short note and I will open a prefilled email draft so you can send it directly from your mail client.',
    locationLabel: 'Location:',
    timezoneLabel: 'Timezone:',
    languagesLabel: 'Languages:',
    responseLabel: 'Response:',
    responseTime: 'Usually replies within 24-48 hours',
    availability: 'Open to internship opportunities and project collaboration',
    fields: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
    },
    placeholders: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
    },
    validation: {
      name: 'Please enter your name.',
      email: 'Please enter your email address.',
      invalidEmail: 'Please enter a valid email address.',
      message: 'Please add a short message.',
    },
    submit: 'Send Message',
  },
} as const

export default en
