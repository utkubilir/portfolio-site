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
    // Case study lives on the dedicated /teknofest page (rendered via the slug branch
    // in Projects.jsx); no public repo to link here.
    links: [],
  },
  {
    slug: 'ce316-iae',
    title: 'CE316 — Integrated Assignment Environment',
    role: 'Team Project (JavaFX Desktop App)',
    period: '2025 - 2026',
    description:
      'JavaFX desktop tool that auto-grades programming assignments: Zip-Slip-safe extraction, multi-language compile/run for C, C++, Java and Python, 10s timeouts, output normalization, 0–100 scoring, SQLite persistence, and exportable HTML reports.',
    tech: ['Java 21', 'JavaFX', 'Maven', 'SQLite'],
    links: [{ label: 'GitHub', href: 'https://github.com/utkubilir/CE316-Project' }],
  },
  {
    slug: 'game-collection-app',
    title: 'Game Collection App',
    role: 'Solo Project (JavaFX Desktop App)',
    period: '2025 - 2026',
    description:
      'Desktop app for managing a personal video-game library: role-based auth (Admin/User), search and filtering, JSON export/import backup, and a MySQL backend via JDBC. Built on an MVC architecture, rebuilt solo from a group project.',
    tech: ['Java', 'JavaFX', 'MySQL', 'JDBC'],
    links: [{ label: 'GitHub', href: 'https://github.com/utkubilir/Game_Collection_App' }],
  },
  {
    slug: 'exam-timetable-planner',
    title: 'Exam Timetable Planner',
    role: 'Team Project (JavaFX Desktop App)',
    period: '2025 - 2026',
    description:
      'Desktop app for creating and editing exam schedules with a JavaFX interface. Built with Java, JavaFX, FXML, and Maven.',
    tech: ['Java', 'JavaFX', 'Maven', 'FXML'],
    links: [
      { label: 'GitHub', href: 'https://github.com/utkubilir/ExamTimetablePlanner' },
      { label: 'Docs', href: 'https://utkubilir.github.io/ExamTimetablePlanner/' },
    ],
  },
]

// Smaller learning repos surfaced as a compact "More on GitHub" row.
export const moreProjects = [
  { slug: 'blackjack', name: 'BlueJack', href: 'https://github.com/utkubilir/BlueJackGame' },
  { slug: 'sorting', name: 'Sorting Algorithms', href: 'https://github.com/utkubilir/SortingAlgoritms' },
]
