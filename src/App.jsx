import { useEffect, useState } from 'react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const projectCards = [
  {
    title: 'Project One',
    type: 'Web App',
    description:
      'Short placeholder summary for your project. Replace with what problem it solves and your role.',
    tags: ['React', 'API', 'UI'],
  },
  {
    title: 'Project Two',
    type: 'Case Study',
    description:
      'Another placeholder text area for your selected project details, impact metrics, and outcomes.',
    tags: ['Frontend', 'Performance', 'UX'],
  },
  {
    title: 'Project Three',
    type: 'Side Project',
    description:
      'Use this block to describe constraints, your implementation choices, and key improvements.',
    tags: ['Design System', 'Testing', 'Deploy'],
  },
]

const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Auth'],
  },
  {
    category: 'Workflow',
    items: ['Git', 'CI/CD', 'Testing', 'Documentation'],
  },
]

function SectionHeader({ label, title, description }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
        {label}
      </p>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-slate-50">
        {title}
      </h2>
      <p className="text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
        {description}
      </p>
    </div>
  )
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((previous) => !previous)
  }

  return (
    <div className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-44 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-600/20" />
        <div className="absolute right-[-120px] top-[45%] h-80 w-80 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20" />
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="text-sm font-extrabold uppercase tracking-[0.24em] text-slate-900 dark:text-slate-100"
          >
            Your Name
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>

        <div className="border-t border-slate-200/70 px-6 py-3 md:hidden dark:border-slate-800">
          <nav className="mx-auto flex max-w-6xl gap-4 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="whitespace-nowrap rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-14 sm:gap-24 sm:pt-20">
        <section id="hero" className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:border-cyan-500/40 dark:bg-cyan-500/10 dark:text-cyan-200">
              Portfolio Landing
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
              Building clean and modern digital products.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              Replace this hero text with your value proposition. Keep it short,
              specific, and focused on outcomes.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Quick Snapshot
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <p className="text-xs uppercase text-slate-500 dark:text-slate-400">
                  Role
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Your Professional Title
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                <p className="text-xs uppercase text-slate-500 dark:text-slate-400">
                  Focus
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                  Product, Performance, UX
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="space-y-8">
          <SectionHeader
            label="About"
            title="A short story about your background."
            description="Use this section to explain who you are, what you work on, and what kind of teams or products you enjoy building."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Experience
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Add a short summary of your years of experience and domains.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Approach
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Describe your working style, process, and collaboration habits.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Goals
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Share what opportunities you are currently looking for.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="space-y-8">
          <SectionHeader
            label="Projects"
            title="Selected work highlights."
            description="Keep each card focused on challenge, solution, and measurable impact."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectCards.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
                  {project.type}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-8">
          <SectionHeader
            label="Skills"
            title="Tools and strengths."
            description="Group your skills by area so visitors quickly understand your depth."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.category}
                className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="space-y-8">
          <SectionHeader
            label="Contact"
            title="Lets start a conversation."
            description="Replace placeholders with your real email, social profiles, and message preferences."
          />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <aside className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Email
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                you@example.com
              </p>

              <p className="mt-6 text-sm font-semibold text-slate-900 dark:text-slate-100">
                Location
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                City, Country
              </p>

              <p className="mt-6 text-sm font-semibold text-slate-900 dark:text-slate-100">
                Social
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                LinkedIn / GitHub / X
              </p>
            </aside>

            <form className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:text-slate-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:text-slate-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:text-slate-100"
                />
              </label>

              <button
                type="button"
                className="mt-2 inline-flex w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 py-6 dark:border-slate-800">
        <p className="mx-auto max-w-6xl px-6 text-xs text-slate-500 dark:text-slate-400">
          Placeholder footer text. Replace with your copyright notice.
        </p>
      </footer>
    </div>
  )
}

export default App
