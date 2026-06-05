import { contact } from './contact'

export type TeknofestMetaItem = {
  label: string
  value: string
}

export type TeknofestAction = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

export type TeknofestHighlight = {
  title: string
  detail: string
}

export type TeknofestTimelineItem = {
  month: string
  title: string
  detail: string
}

export type TeknofestSection = {
  id: string
  title: string
  body: string[]
  bgIndex: 0 | 1 | 2
  subtitle?: string
  meta?: TeknofestMetaItem[]
  actions?: TeknofestAction[]
  highlights?: TeknofestHighlight[]
  bullets?: string[]
  chips?: string[]
  timeline?: TeknofestTimelineItem[]
}

const contactHref = `mailto:${contact.email}?subject=ECOFUAV%20Case%20Study`

const en: TeknofestSection[] = [
  {
    id: 'hero',
    title: 'TEKNOFEST Savaşan İHA — ECOFUAV',
    subtitle:
      'University UAV program focused on mission-ready autonomy, simulation-first validation, and reliable integration.',
    body: [
      'The software track is structured around repeatable testing, staged integration, and predictable delivery against competition constraints.',
    ],
    meta: [
      { label: 'Role', value: 'Team Captain / Software Lead' },
      { label: 'Stack', value: 'PX4, ROS 2, Gazebo' },
      { label: 'Focus', value: 'Autonomy' },
    ],
    actions: [
      { label: 'Back to Home', href: '/', variant: 'secondary' },
      { label: 'Contact', href: contactHref, variant: 'primary' },
    ],
    bgIndex: 0,
  },
  {
    id: 'highlights',
    title: 'Highlights',
    body: ['Core engineering patterns that shaped implementation and team execution.'],
    highlights: [
      {
        title: 'Simulation-first workflow',
        detail: 'Control logic validated in SITL before field tests.',
      },
      {
        title: 'Offboard + telemetry integration',
        detail: 'Decision layer and runtime diagnostics aligned from the start.',
      },
      {
        title: 'Modular autonomy pipeline',
        detail: 'Mission phases isolated with clear interface contracts.',
      },
      {
        title: 'Compute-aware design',
        detail: 'Feature priorities balanced against embedded runtime limits.',
      },
    ],
    bgIndex: 1,
  },
  {
    id: 'tech-stack',
    title: 'Tech Stack',
    body: ['Tooling selected for simulation depth, autonomy control, and integration speed.'],
    chips: ['PX4 SITL', 'Gazebo', 'ROS 2', 'Micro XRCE-DDS', 'Computer Vision', 'Autonomy'],
    bgIndex: 2,
  },
  {
    id: 'timeline',
    title: 'Timeline',
    body: ['Milestones used to sequence architecture, validation, and integration work.'],
    timeline: [
      {
        month: 'Jan 2025',
        title: 'Architecture Baseline',
        detail: 'Module boundaries and integration contracts finalized.',
      },
      {
        month: 'Mar 2025',
        title: 'Simulation Loop Stabilized',
        detail: 'Mission scenarios running consistently in PX4 SITL + Gazebo.',
      },
      {
        month: 'May 2025',
        title: 'Autonomy Flow Iteration',
        detail: 'Offboard mission logic refined with repeatable tests.',
      },
      {
        month: 'Jul 2025',
        title: 'Telemetry Instrumentation',
        detail: 'Key runtime signals and diagnostics standardized.',
      },
      {
        month: 'Sep 2025',
        title: 'Integration Readiness',
        detail: 'Cross-team handoff checklist prepared for field execution.',
      },
    ],
    bgIndex: 1,
  },
  {
    id: 'my-role',
    title: 'My Role',
    body: ['Primary responsibilities in technical leadership and software delivery.'],
    bullets: [
      'Defined sprint scope and ownership across software, electronics, and mechanics.',
      'Prioritized autonomy backlog based on test outcomes and competition deadlines.',
      'Coordinated offboard control and telemetry integration decisions.',
      'Maintained simulation-to-field validation flow and release checkpoints.',
      'Tracked blockers and drove cross-team alignment for delivery.',
      'Documented architecture and testing decisions for continuity.',
    ],
    bgIndex: 0,
  },
]

const tr: TeknofestSection[] = [
  {
    id: 'hero',
    title: 'TEKNOFEST Savaşan İHA — ECOFUAV',
    subtitle:
      'Göreve hazır otonomi, simülasyon öncelikli doğrulama ve güvenilir entegrasyona odaklanan üniversite İHA programı.',
    body: [
      'Yazılım tarafı; tekrarlanabilir testler, aşamalı entegrasyon ve yarışma kısıtlarına karşı öngörülebilir teslimat üzerine kurulu.',
    ],
    meta: [
      { label: 'Rol', value: 'Takım Kaptanı / Yazılım Lideri' },
      { label: 'Yığın', value: 'PX4, ROS 2, Gazebo' },
      { label: 'Odak', value: 'Otonomi' },
    ],
    actions: [
      { label: 'Ana Sayfaya Dön', href: '/', variant: 'secondary' },
      { label: 'İletişim', href: contactHref, variant: 'primary' },
    ],
    bgIndex: 0,
  },
  {
    id: 'highlights',
    title: 'Öne Çıkanlar',
    body: ['Uygulamayı ve ekip yürütmesini şekillendiren temel mühendislik desenleri.'],
    highlights: [
      {
        title: 'Simülasyon öncelikli akış',
        detail: 'Kontrol mantığı saha testlerinden önce SITL’de doğrulandı.',
      },
      {
        title: 'Offboard + telemetri entegrasyonu',
        detail: 'Karar katmanı ve çalışma zamanı tanılaması baştan hizalandı.',
      },
      {
        title: 'Modüler otonomi hattı',
        detail: 'Görev fazları net arayüz sözleşmeleriyle izole edildi.',
      },
      {
        title: 'Hesaplama farkında tasarım',
        detail: 'Özellik öncelikleri gömülü çalışma zamanı sınırlarına göre dengelendi.',
      },
    ],
    bgIndex: 1,
  },
  {
    id: 'tech-stack',
    title: 'Teknoloji Yığını',
    body: ['Simülasyon derinliği, otonomi kontrolü ve entegrasyon hızı için seçilen araçlar.'],
    chips: ['PX4 SITL', 'Gazebo', 'ROS 2', 'Micro XRCE-DDS', 'Computer Vision', 'Autonomy'],
    bgIndex: 2,
  },
  {
    id: 'timeline',
    title: 'Zaman Çizelgesi',
    body: ['Mimari, doğrulama ve entegrasyon işlerini sıralamak için kullanılan kilometre taşları.'],
    timeline: [
      {
        month: 'Oca 2025',
        title: 'Mimari Temeli',
        detail: 'Modül sınırları ve entegrasyon sözleşmeleri kesinleştirildi.',
      },
      {
        month: 'Mar 2025',
        title: 'Simülasyon Döngüsü Kararlı',
        detail: 'Görev senaryoları PX4 SITL + Gazebo’da tutarlı çalışıyor.',
      },
      {
        month: 'May 2025',
        title: 'Otonomi Akışı İterasyonu',
        detail: 'Offboard görev mantığı tekrarlanabilir testlerle iyileştirildi.',
      },
      {
        month: 'Tem 2025',
        title: 'Telemetri Enstrümantasyonu',
        detail: 'Temel çalışma zamanı sinyalleri ve tanılaması standartlaştırıldı.',
      },
      {
        month: 'Eyl 2025',
        title: 'Entegrasyon Hazırlığı',
        detail: 'Saha icrası için ekipler arası devir kontrol listesi hazırlandı.',
      },
    ],
    bgIndex: 1,
  },
  {
    id: 'my-role',
    title: 'Rolüm',
    body: ['Teknik liderlik ve yazılım teslimindeki temel sorumluluklar.'],
    bullets: [
      'Yazılım, elektronik ve mekanik ekiplerde sprint kapsamı ve sahipliği tanımladım.',
      'Otonomi backlog’unu test sonuçlarına ve yarışma takvimine göre önceliklendirdim.',
      'Offboard kontrol ve telemetri entegrasyon kararlarını koordine ettim.',
      'Simülasyondan sahaya doğrulama akışını ve sürüm kontrol noktalarını sürdürdüm.',
      'Blokajları takip edip teslim için ekipler arası uyumu sağladım.',
      'Süreklilik için mimari ve test kararlarını belgeledim.',
    ],
    bgIndex: 0,
  },
]

export const teknofestSections = { en, tr } as const

export type TeknofestLanguage = keyof typeof teknofestSections
