import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { certificates } from '../data/certificates'

function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-28 py-14 sm:py-16">
      <Container className="space-y-8">
        <SectionHeader
          eyebrow="Certificates"
          title="Certifications and courses."
          description="Professional certification track and completed learning milestones."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((item) => (
            <article
              key={`${item.title}-${item.date}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                {item.issuer}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-slate-300 px-3 py-1 text-slate-700 dark:border-slate-700 dark:text-slate-200">
                  {item.date}
                </span>
                <span
                  className={`rounded-full px-3 py-1 ${
                    item.status === 'Expected'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200'
                      : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200'
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Certificates
