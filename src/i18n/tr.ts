export const tr = {
  locale: 'tr',
  meta: {
    homeTitle: 'Utku Bilir | Portfolyo',
    homeDescription:
      'Izmir Ekonomi Universitesi Bilgisayar Muhendisligi ogrencisi. Yazilim, bilgisayarli goru ve IHA otonomisi alanlarinda staj firsatlarina acik.',
    teknofestTitle: 'ECOFUAV TEKNOFEST Projesi | Utku Bilir',
    teknofestDescription:
      'ECOFUAV TEKNOFEST Savasan IHA projesinin mimari, simulasyon, otonomi, telemetri ve yol haritasi detaylari.',
  },
  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımda',
    projects: 'Projeler',
    experience: 'Deneyim',
    education: 'Eğitim',
    certificates: 'Sertifikalar',
    activities: 'Aktiviteler',
    skills: 'Yetenekler',
    languages: 'Diller',
    contact: 'İletişim',
  },
  ui: {
    switchToTurkish: 'Türkçeye geç',
    switchToEnglish: 'İngilizceye geç',
    themeDark: 'Koyu',
    themeLight: 'Açık',
    loading: 'Yükleniyor...',
    systemBoot: 'Sistem başlatılıyor',
    bootMessage: 'Keskin terminal portfolyo hazırlanıyor',
    portfolioNode: 'Portfolyo Düğümü',
  },
  hero: {
    subtitle:
      'İzmir’de ROS 2/PX4 İHA otonomisi ve Java/React uygulamalarında uygulamalı çıktı üreten Bilgisayar Mühendisliği öğrencisi.',
    summary:
      'Haftamı PX4 görev simülasyonu, ECOFUAV yazılım planlaması, ekip koordinasyonu ve gerçekten kullanılabilir ders projeleri arasında bölüştürüyorum.',
    cta: {
      projects: 'Projeleri Gör',
      contact: 'İletişime Geç',
      resume: 'Özgeçmişi İndir',
    },
    quickSnapshot: 'Kısa Özet',
    profileNode: 'Ana Profil',
    location: 'İzmir, Türkiye',
    recruiterSnapshot: 'İşe Alım Özeti',
    proofPoints: 'Hızlı Sinyaller',
    signals: [
      { label: 'Odak', value: 'ROS 2 / PX4 / Gazebo' },
      { label: 'Uygunluk', value: 'Staj ve proje iş birliği' },
      { label: 'Çalışma biçimi', value: 'Kısa döngüler, yazılı kararlar, test notları' },
    ],
    snapshot: [
      { label: 'Uygunluk', value: 'Staj fırsatlarına açık' },
      { label: 'Eğitim', value: 'B.Sc. Computer Engineering • Expected 2027' },
      { label: 'Odak alanı', value: 'İHA otonomisi, simülasyon, Java/React' },
      { label: 'Konum', value: 'İzmir, Türkiye • Europe/Istanbul' },
    ],
    availability: 'Uygunluk',
    education: 'Eğitim',
  },
  about: {
    eyebrow: 'Profil',
    title: 'Nasıl çalışıyorum',
    fieldNotes: 'Profil Notları',
    body: [
      'İzmir Ekonomi Üniversitesi Bilgisayar Mühendisliği bölümünde üçüncü sınıf öğrencisiyim; çalışmalarımın ana odağı otonom görev akışına sahip İHA sistemlerinde yazılım geliştirme ve doğrulama süreçleri.',
      'Şu an en yoğun çalıştığım alan ECOFUAV: yazılım kilometre taşları, entegrasyon sırası ve simülasyon temelli doğrulama.',
      'İHA dışında, öğrencilerin günlük kullanımına dokunan Java ve React projeleri geliştiriyorum; bu da bana güvenilirlik ve sürdürülebilirlik odaklı çalışma disiplini kazandırıyor.',
      'Özellikle modüller arası arayüzlerin net olması, teknik kararların yazılı tutulması ve ekip içinde teslim gerçekçiliği benim için kritik.',
    ],
  },
  projects: {
    eyebrow: 'Seçili Çalışmalar',
    title: 'Seçili Çalışmalar',
    intro: 'Gerçek kısıtlarla şekillenmiş, karar süreci ve çıktısı recruiter için hızlı okunabilen projeler.',
    featured: 'Öne Çıkan Proje',
    preview: 'Teknik Önizleme',
    stack: 'Stack',
    contributions: 'Somut Katkılar',
    readMore: 'ECOFUAV detaylarını incele',
    items: {
      teknofest: {
        title: 'ECOFUAV — TEKNOFEST Savaşan İHA',
        role: 'Yazılım planlama ve entegrasyon odaklı takım kaptanı',
        period: '2025 - Günümüz',
        description:
          'Otonom görev icrasına odaklanan öğrenci yarışma İHA projesi. Sahadaki maliyetli testlerden önce görev mantığını tekrarlanabilir şekilde doğrulamak için PX4 SITL + Gazebo tabanlı simülasyon döngüsünü standart hale getirdik ve donanım testinden önce log çıktısını zorunlu tuttuk.',
        bullets: [
          'Yazılım, elektronik ve mekanik ekipleri için haftalık entegrasyon kilometre taşları planladım.',
          'Donanım testinden önce simülasyon loglarını teslim çıktısının parçası haline getirdim.',
          'Varsayımları, blokajları ve test sonuçlarını yazılı tutarak entegrasyon toplantılarını daha somut hale getirdim.',
        ],
      },
      examPlanner: {
        title: 'Sınav Takvimi Planlayıcı',
        role: 'Arayüz yapısı ve teslim akışı odaklı ekip katkısı',
        period: '2025 - 2026',
        description:
          'Sınav takvimini hızlı oluşturup düzenlemeye yönelik masaüstü araç. Kapsamı masaüstü öncelikli tuttuk, ekranları tekrar kullanılabilir FXML bloklarıyla kurduk ve veri akışını sade bırakarak JavaFX tecrübesi farklı ekip üyelerinin paralel geliştirme yapmasını sağladık.',
        bullets: [
          'FXML ve Scene Builder ile okunur arayüz akışı kurdum.',
          'Bileşen sınırlarını ve veri akışını okunur tutarak ekip içi sürtünmeyi azalttım.',
          'Sıkı teslim takvimli öğrenci projelerinde sürdürülebilirliğin karmaşıklıktan daha değerli olduğunu öğrendim.',
        ],
      },
      portfolioSite: {
        title: 'Kişisel Portfolyo',
        role: 'Geliştirici & Tasarımcı',
        period: '2026',
        description: 'React, Vite ve Tailwind CSS ile geliştirilmiş modern ve duyarlı bir portfolyo sitesi. Pürüzsüz kaydırma, aktif bölüm takibi ve mobil öncelikli tasarım içerir.',
        bullets: [
          'Aktif bölüm takibi için özel ScrollSpy hook\'u uygulandı.',
          'Modern CSS özellikleri ile dinamik ve duyarlı bir UI tasarlandı.',
          'Vite ile performans ve derleme süreci optimize edildi.'
        ],
      },
    },
  },
  experience: {
    eyebrow: 'Deneyim',
    title: 'Deneyim',
    description:
      'Yazılım ve otonomi akışlarında staj ve proje katkılarım.',
    items: [
      {
        role: 'Bilgisayarlı Görü Stajyeri (Gönüllü)',
        org: 'A2InnoWave',
        period: 'Tem 2025 - Ağu 2025',
        type: 'Staj',
        description:
          'Görsel zeka görevleri için pratik bilgisayarlı görü akışları ve model denemelerine katkı verdim.',
        bullets: [
          'OpenCV ve YOLOv8 ile sınıflandırma, tespit, segmentasyon ve takip senaryolarında çalıştım.',
          'Gerçek dünya örneklerinde model davranışını karşılaştırmak için veri ve çıkarım denemeleri yaptım.',
          'Bulguları dokümante edip ekibin iterasyon sürecini net iletişimle destekledim.',
        ],
      },
    ],
  },
  education: {
    eyebrow: 'Eğitim',
    title: 'Akademik geçmiş',
    description: 'Bilgisayar Mühendisliği eğitimi ve zaman çizelgesi.',
    academicNode: 'Akademik Kayıt',
    items: [
      {
        institution: 'İzmir Ekonomi Üniversitesi',
        degree: 'B.Sc. Computer Engineering',
        period: 'Expected 2027',
        details: '3. sınıf öğrencisi',
      },
    ],
  },
  certificates: {
    eyebrow: 'Sertifikalar',
    title: 'Sertifikalar ve eğitimler',
    description:
      'Mühendislik ve yazılım odaklı tamamlanan ve planlanan gelişim adımları.',
    label: 'Sertifika',
    expected: 'Bekleniyor',
    completed: 'Tamamlandı',
  },
  activities: {
    eyebrow: 'Liderlik',
    title: 'Kulüp ve gönüllü aktiviteler',
    description:
      'Proje sahiplenmesi, iletişim ve uygulama disiplinimi güçlendiren roller.',
    compactLabel: 'Liderlik Özeti',
    items: [
      {
        role: 'Denetleme Kurulu Başkanı',
        org: 'Halk Dansları Kulübü',
        period: '2025 - Günümüz',
        bullets: [
          'Kulüp operasyonları için yönetişim ve uygunluk değerlendirmelerini yürüttüm.',
          'Süreç kalitesi ve stratejik planlama kararlarını denetledim.',
        ],
      },
      {
        role: 'Başkan Yardımcısı',
        org: 'Halk Dansları Kulübü',
        period: '2024 - 2025',
        bullets: [
          'İdari operasyon, etkinlik planlama ve günlük koordinasyonu yönettim.',
          'Ekipler arası iletişim ve görev sahipliğini güçlendirdim.',
        ],
      },
      {
        role: 'Yönetim Kurulu Üyesi',
        org: 'Halk Dansları Kulübü',
        period: '2022 - 2024',
        bullets: [
          'Performans lojistiği ve gönüllü koordinasyonuna katkı verdim.',
          'Yeni üyeler için onboarding ve prova planlamasını destekledim.',
        ],
      },
    ],
  },
  skills: {
    eyebrow: 'Yetenekler',
    title: 'Teknik özet',
    description:
      'Otonomi, backend/frontend ve ekip projelerinde kullandığım temel teknolojiler.',
    categories: {
      Programming: 'Programlama',
      'Frameworks / Libraries': 'Frameworkler / Kütüphaneler',
      'Simulation / Robotics': 'Simülasyon / Robotik',
      Databases: 'Veritabanları',
      Tools: 'Araçlar',
      'Project Management': 'Proje Yönetimi',
    },
  },
  languagesSection: {
    eyebrow: 'Diller',
    title: 'İletişim yeterliliği',
    description:
      'Akademik ve teknik iş birliklerinde kullandığım dil seviyeleri.',
    names: {
      Turkish: 'Türkçe',
      English: 'İngilizce',
      German: 'Almanca',
    },
    levels: {
      Native: 'Anadil',
    },
  },
  teknofest: {
    back: 'Ana Sayfaya Dön',
    projectDetail: 'Proje Detayı',
    title: 'ECOFUAV — TEKNOFEST Savaşan İHA',
    rolePeriod: 'Takım Kaptanı • 2025 - Günümüz',
    roadmap: 'Yol Haritası',
    sections: {
      architecture: {
        title: 'Mimari ve Sistem Tasarımı',
        body: [
          'Mimariyi görev yönetimi, kontrol mantığı, algılama hattı ve telemetri katmanı olarak net modüllere ayırdık.',
          'Her modül için giriş/çıkış arayüzlerini tanımlayarak entegrasyon sırasında belirsizliği azaltmayı hedefledik.',
          'Görev akışında karar noktalarını yazılı hale getirip hangi koşulda hangi davranışın devreye gireceğini standardize ettik.',
          'Bu yaklaşım, hem yazılım ekiplerinin paralel çalışmasını hem de test sonuçlarının daha okunabilir olmasını sağladı.',
          'Donanım, yazılım ve haberleşme bileşenlerini tek seferde birleştirmek yerine aşamalı entegrasyon planı kullandık.',
          'Sürümleme tarafında Git tabanlı kontrollü bir akışla kritik değişiklikleri küçük adımlarda sisteme aldık.',
          'Sonuç olarak mimari; izlenebilir, test edilebilir ve yarışma kısıtlarına göre güncellenebilir bir temel sundu.',
        ],
      },
      leadership: {
        title: 'Rolüm ve Ekip Koordinasyonu',
        body: [
          'Takım kaptanı olarak yazılım, elektronik ve mekanik alt ekipleri haftalık hedeflerle aynı takvimde topluyorum.',
          'Sprint başında iş paketlerini netleştirip sorumluları belirliyor, sprint sonunda çıktıları test verisiyle değerlendiriyorum.',
          'Kritik blokajları erken tespit etmek için düzenli durum toplantıları yapıyor ve riskleri öncelik sırasına koyuyorum.',
          'Yarışma takvimine göre hangi fonksiyonun önce hazır olması gerektiğini belirleyip entegrasyon planını buna göre güncelliyorum.',
          'Ekipler arası bağımlılıkları görünür hale getirerek son dakika çakışmalarını azaltmaya odaklanıyorum.',
          'Dokümantasyon ve görev takibinde standart bir dil kullanarak yeni katılan ekip üyelerinin sürece hızlı adapte olmasını sağlıyorum.',
          'Bu rol, teknik katkının yanında teslim disiplini ve karar sürecinin sürdürülebilir olmasını da kapsıyor.',
        ],
      },
      simulation: {
        title: 'Simülasyon ve Doğrulama (PX4 SITL + Gazebo)',
        body: [
          'Sahaya çıkmadan önce PX4 SITL ve Gazebo üzerinde görev senaryolarını sistematik biçimde çalıştırıyoruz.',
          'Her senaryoda kontrol davranışı, görev geçişleri ve hata durumlarında sistemin verdiği tepkiyi kayıt altına alıyoruz.',
          'Simülasyon çıktılarıyla kontrol parametrelerini ve görev sırasını revize ederek saha testinde risk seviyesini düşürüyoruz.',
          'Hataları rastgele denemelerle değil, tekrarlanabilir test adımlarıyla yeniden üretmeye özellikle dikkat ediyoruz.',
          'Bu yöntem, ekipte farklı kişilerin aynı problemi aynı şartlarda doğrulamasını ve çözmesini kolaylaştırıyor.',
          'Test sonuçlarını sprint planına geri besleyerek bir sonraki geliştirme adımını ölçülebilir verilerle seçiyoruz.',
          'Sonuçta simülasyon katmanı, sadece ön test değil, doğrudan karar mekanizmasını besleyen ana doğrulama aracı oluyor.',
        ],
      },
      autonomy: {
        title: 'Otonomi, Offboard Kontrol ve Detect/Track Planı',
        body: [
          'Otonomi tarafında görevin farklı fazlarını yöneten karar akışlarını ROS 2 tabanlı modüllerle yapılandırıyoruz.',
          'Offboard kontrol yaklaşımında, dış karar katmanının uçuş davranışını güvenli sınırlar içinde yönetmesini hedefliyoruz.',
          'Görev ilerlerken sistemin hangi koşulda hangi moda geçeceği açık kurallarla tanımlanıyor.',
          'Bu sayede beklenmeyen durumlarda manuel yorum yerine önceden tanımlı kontrol mantığı devreye girebiliyor.',
          'Detect/track planında, hedefin algılanması ve izlenmesi için veri akışını mevcut görev döngüsüne uyumlu hale getirmeyi amaçlıyoruz.',
          'Algılama sonuçlarının kontrol kararına nasıl taşınacağı ve gecikme etkisinin nasıl yönetileceği için ayrı test senaryoları hazırlıyoruz.',
          'Kısa vadeli hedefimiz, detect/track çıktısını görev yönetimine kararlı ve izlenebilir bir arayüzle bağlamak.',
        ],
      },
      telemetry: {
        title: 'Telemetri ve Entegrasyon',
        body: [
          'Telemetri katmanında, uçuş sırasında karar vermeyi destekleyecek temel verileri düzenli ve anlamlı biçimde toplamayı hedefliyoruz.',
          'Hangi verinin hangi frekansta üretileceği ve nasıl loglanacağı için standart bir şablon belirledik.',
          'Bu yapı sayesinde saha testinden sonra sorun analizi daha kısa sürede ve daha az belirsizlikle yapılabiliyor.',
          'Entegrasyon tarafında telemetri verisini yarışma altyapısı ve takım içi izleme araçlarıyla uyumlu tutmaya odaklanıyoruz.',
          'İletişim kesintisi, veri kaybı veya gecikme gibi durumlar için tanı koymayı kolaylaştıran kontrol noktaları ekliyoruz.',
          'Toplanan loglar hem performans değerlendirmesi hem de bir sonraki sprint planlaması için temel veri kaynağı oluyor.',
          'Bu yaklaşım, sistemin sadece çalışmasını değil, çalıştığının kanıtlanmasını da mümkün hale getiriyor.',
        ],
      },
    },
  },
  contact: {
    eyebrow: 'İletişim',
    title: 'İletişime Geçelim',
    description:
      'Staj, proje iş birliği veya teknik ekip görüşmeleri için en hızlı yol e-posta.',
    primaryLabel: 'Ana kanal',
    primaryTitle: 'Önce e-posta ile başlayalım',
    cta: 'Staj pozisyonu, proje iş birliği ya da teknik bir ekip görüşmesi için kısa bir e-posta yeterli.',
    ready: 'Bağlantı Kurmaya Hazır mısın?',
    locationLabel: 'Konum:',
    timezoneLabel: 'Saat Dilimi:',
    languagesLabel: 'Diller:',
    responseLabel: 'Yanıt Süresi:',
    summaryTitle: 'Uygunluk Özeti',
    summary:
      'İzmir merkezli çalışıyorum; yazılım, otonomi ve ekip projeleri odağında staj ve iş birliği görüşmelerine açığım.',
    secondaryTitle: 'İkincil Kanallar',
    emailNote:
      'Hazır konu satırıyla mail başlatabilir veya adresi doğrudan kopyalayabilirsin.',
    cards: {
      primaryEmail: 'Ana E-posta',
      academicEmail: 'Akademik E-posta',
      phone: 'Telefon',
    },
    actions: {
      write: 'Yaz',
      call: 'Ara',
      open: 'Aç',
      copy: 'Kopyala',
      copied: 'Kopyalandı',
    },
    social: {
      linkedin: 'Profesyonel profil, bağlantı ve hızlı mesajlaşma için.',
      github: 'Kod, proje geçmişi ve teknik çalışma örnekleri için.',
    },
    copyHint:
      'E-posta adresini kopyalayabilir veya hazır konu satırıyla mail başlatabilirsin.',
    copyStatus: {
      primaryEmail: 'Ana e-posta kopyalandı.',
      academicEmail: 'Akademik e-posta kopyalandı.',
      phone: 'Telefon numarası kopyalandı.',
      default: 'Bilgi kopyalandı.',
    },
    availability: 'Staj fırsatları ve proje iş birliklerine açığım',
    responseTime: 'Genellikle 24–48 saat içinde dönüş yaparım',
    emailCta: 'E-posta gönder',
    resumeCta: 'CV indir',
    scheduleCta: 'Toplantı planla',
    email: 'bilirutku35@gmail.com',
    phone: '+90 534 684 0696',
    github: 'https://github.com/utkubilir',
    linkedin: 'https://www.linkedin.com/in/utkubilir',
  },
} as const

export default tr
