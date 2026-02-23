import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'

function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s work together."
          description="Replace placeholders with your real links so people can reach you quickly."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Email
            </p>
            <a
              href="mailto:you@example.com"
              className="mt-1 inline-block text-sm text-cyan-700 transition hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              you@example.com
            </a>

            <p className="mt-6 text-sm font-semibold text-slate-900 dark:text-slate-100">
              LinkedIn
            </p>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-sm text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              linkedin.com/in/your-profile
            </a>

            <p className="mt-6 text-sm font-semibold text-slate-900 dark:text-slate-100">
              GitHub
            </p>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-sm text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
            >
              github.com/your-username
            </a>
          </aside>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Quick intro template
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Hi Utku, I found your portfolio and would like to discuss a
              project opportunity. Placeholder text here so visitors know what
              to include in their message.
            </p>
            <a
              href="mailto:you@example.com?subject=Portfolio%20Inquiry"
              className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
            >
              Send Email
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
