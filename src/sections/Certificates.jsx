import Card from '../components/Card'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'
import { certificates } from '../data/certificates'

function Certificates() {
  const { messages } = useI18n()

  const getStatusLabel = (status) =>
    status === 'Expected' ? messages.certificates.expected : messages.certificates.completed

  return (
    <section id="certificates" className="scroll-mt-28 py-12 sm:py-16">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.certificates.eyebrow}
          title={messages.certificates.title}
          description={messages.certificates.description}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((item) => (
            <Card key={`${item.title}-${item.date}`} hover>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{item.issuer}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-zinc-300 px-3 py-1 text-zinc-700 dark:border-zinc-700 dark:text-zinc-200">
                  {item.date}
                </span>
                <span
                  className={`rounded-full border px-3 py-1 ${
                    item.status === 'Expected'
                      ? 'border-blue-200 text-blue-700 dark:border-blue-500/40 dark:text-blue-300'
                      : 'border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:text-zinc-200'
                  }`}
                >
                  {getStatusLabel(item.status)}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Certificates
