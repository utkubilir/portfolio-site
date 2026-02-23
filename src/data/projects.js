export const projects = [
  {
    featured: true,
    title: 'ECOFUAV — TEKNOFEST Savaşan İHA',
    description:
      'Takım kaptanı olarak yarışma hazırlığını yürütüyor; simülasyon, otonomi ve entegrasyon süreçlerini uçtan uca koordine ediyorum.',
    tech: ['PX4 SITL', 'Gazebo', 'ROS 2 (Jazzy)', 'C++/Python', 'Git', 'Linux'],
    bullets: [
      'Takım kaptanlığı: yazılım/elektronik/mekanik koordinasyonu, planlama ve teslimatlar',
      'Simülasyon: PX4 SITL + Gazebo ile senaryo doğrulama ve test döngüleri',
      'Otonomi: offboard kontrol ve angajman/kilitlenme senaryoları için mimari',
      'Telemetri/altyapı: veri akışı, loglama ve yarışma sunucusu entegrasyon yaklaşımı',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/utkubilir' },
      { label: 'Docs', href: '' },
    ],
  },
  {
    title: 'Exam Timetable Planner',
    description:
      'JavaFX tabanlı sınav programı planlama aracı. UI/UX liderliği, CSV içe/dışa aktarma ve PDF export gibi özellikler.',
    tech: ['Java', 'JavaFX', 'Maven', 'FXML'],
    links: [
      { label: 'GitHub', href: 'PROJE_GITHUB_LINKI' },
      { label: 'Demo', href: 'PROJE_DEMO_LINKI' },
    ],
  },
  {
    title: 'Distributed PX4/Gazebo Simulation',
    description:
      'Apple Silicon + Ubuntu VM ortamında dağıtık simülasyon; ağ/telemetri ve GUI-client senaryoları.',
    tech: ['PX4', 'Gazebo', 'Networking'],
    links: [{ label: 'Notlar', href: 'LINK' }],
  },
]
