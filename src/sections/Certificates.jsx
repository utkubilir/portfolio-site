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
    <section id="certificates" className="scroll-mt-32 py-16 sm:py-20 lg:py-24">
      <Container className="space-y-8">
        <SectionTitle
          eyebrow={messages.certificates.eyebrow}
          title={messages.certificates.title}
          description={messages.certificates.description}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((item) => (
            <Card key={`${item.title}-${item.date}`} hover>
              <p className="font-['Space_Grotesk'] text-[0.72rem] uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                [ {messages.certificates.label} ]
              </p>
              <h3 className="mt-3 text-base font-semibold text-[color:var(--color-text)]">{item.title}</h3>
              <p className="copy-muted mt-3 text-sm">{item.issuer}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="hud-chip">{item.date}</span>
                <span
                  className={`hud-chip ${
                    item.status === 'Expected'
                      ? 'hud-chip-accent'
                      : 'hud-chip-quiet'
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
