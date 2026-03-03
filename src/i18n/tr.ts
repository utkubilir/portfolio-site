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
    loading: 'Yukleniyor...',
  },
  hero: {
    subtitle:
      'İzmir’de Bilgisayar Mühendisliği öğrencisiyim; TEKNOFEST İHA takımında yazılım planlamasını yürütüyor, Java/React ile somut araçlar geliştiriyorum.',
    summary:
      'Haftamın büyük kısmı PX4 simülasyon testleri, ekip koordinasyonu ve gerçekten kullanılan ders projeleri geliştirmekle geçiyor.',
    currentlyBuildingLabel: 'Şu an geliştirdiklerim',
    currentlyBuilding:
      'ECOFUAV görev akışı/test düzeni ve üniversite kullanımına yönelik sınav takvimi masaüstü uygulaması.',
    recentFocusLabel: 'Son teknik odağım',
    recentFocus:
      'ROS 2 modül sınırları, PX4 SITL senaryo doğrulaması, telemetri log kalitesi ve sürdürülebilir JavaFX arayüzü.',
    workStyleLabel: 'Çalışma biçimim',
    workStyle:
      'Kısa plan döngüleri, yazılı karar notları ve neden-sonuç ilişkisi net test çıktıları.',
    cta: {
      projects: 'Projeleri Gör',
      contact: 'İletişime Geç',
      resume: 'Özgeçmişi İndir',
    },
    quickSnapshot: 'Güncel durum',
    availability: 'Uygunluk',
    education: 'Eğitim',
  },
  about: {
    eyebrow: 'Hakkımda',
    title: 'Nasıl Çalışıyorum',
    body: [
      'İzmir Ekonomi Üniversitesi Bilgisayar Mühendisliği bölümünde üçüncü sınıf öğrencisiyim.',
      'Şu an en yoğun çalıştığım alan ECOFUAV: yazılım kilometre taşları, entegrasyon sırası ve simülasyon temelli doğrulama.',
      'İHA dışında, öğrencilerin günlük kullanımına dokunan Java ve React projeleri geliştiriyorum; bu da bana güvenilirlik ve sürdürülebilirlik odaklı çalışma disiplini kazandırıyor.',
      'Özellikle modüller arası arayüzlerin net olması, teknik kararların yazılı tutulması ve ekip içinde teslim gerçekçiliği benim için kritik.',
    ],
    currentlyBuildingTitle: 'Şu an geliştirdiklerim',
    currentlyBuilding: [
      'ECOFUAV için görev planlama ve offboard kontrol akışı.',
      'Düzenlenebilir bloklarla JavaFX sınav takvimi planlayıcı.',
      'Proje anlatımı daha güçlü bir portfolyo yapısı.',
    ],
    recentFocusTitle: 'Son teknik odağım',
    recentFocus: [
      'PX4 SITL + Gazebo üzerinde senaryo bazlı hata ayıklama.',
      'Test sonrası karar vermeyi kolaylaştıran telemetri logları.',
      'Bölümler büyüdükçe okunabilir kalan React bileşenleri.',
    ],
    careTitle: 'Önemsediğim noktalar',
    care: [
      'Uygulanan her kararın teknik gerekçesinin yazılı olması.',
      'Öğrenci ekiplerinde hız ve test edilebilirlik dengesini korumak.',
      'Bitirilebilir ve geliştirilebilir proje kapsamı seçmek.',
    ],
  },
  projects: {
    eyebrow: 'Seçili Çalışmalar',
    title: 'Seçili Çalışmalar',
    intro:
      'Gerçek kısıtlarla şekillenmiş, karar süreci ve çıktısı net olan iki temsil proje.',
    caseStudy: 'Mini vaka çalışması',
    readMore: 'ECOFUAV tam vaka çalışması',
    fields: {
      problem: 'Problem',
      role: 'Rolüm',
      techStack: 'Teknik yığın',
      constraints: 'Kısıtlar',
      keyDecision: 'Kritik karar',
      result: 'Sonuç',
      learned: 'Öğrendiğim',
    },
    items: {
      teknofest: {
        title: 'ECOFUAV — TEKNOFEST Savaşan İHA',
        context: 'Otonom görev icrasına odaklanan öğrenci yarışma İHA projesi',
        description: 'Otonom görev icrasına odaklanan öğrenci yarışma İHA projesi.',
        role: 'Takım kaptanı olarak yazılım planlama ve entegrasyon koordinasyonu',
        caseStudy: {
          problem:
            'Sahadaki maliyetli testlerden önce görev mantığını tekrarlanabilir şekilde doğrulayacak bir çalışma düzenine ihtiyacımız vardı.',
          constraints:
            'Yarışma takvimi, yazılım-elektronik-mekanik ekip bağımlılıkları ve sınırlı gerçek uçuş fırsatı.',
          keyDecision:
            'PX4 SITL + Gazebo tabanlı simülasyon döngüsünü standart hale getirip, donanım testinden önce log çıktısını zorunlu hale getirdik.',
          result:
            'Entegrasyon toplantıları daha veriye dayalı ilerledi, blokajlar erken tespit edildi ve saha testleri daha planlı hale geldi.',
          learned:
            'Teknik liderlik çoğu zaman kod yazmaktan çok karar hijyenidir: arayüzleri erken netleştirmek, varsayımları yazmak ve her testten sonra öncelikleri güncellemek.',
        },
      },
      'exam-timetable-planner': {
        title: 'Sınav Takvimi Planlayıcı',
        context: 'Sınav takvimini hızlı oluşturup düzenlemeye yönelik masaüstü araç',
        description: 'Sınav takvimini hızlı oluşturup düzenlemeye yönelik masaüstü araç.',
        role: 'Arayüz yapısı ve ekip içi teslim akışı odaklı ekip katkısı',
        caseStudy: {
          problem:
            'Öğrenciler sınav programı oluştururken tablo düzenleme işine fazla zaman harcıyor ve değişiklikleri takip etmekte zorlanıyordu.',
          constraints:
            'Masaüstü kapsamı, dönem sonu teslim tarihi ve JavaFX tecrübesi farklı ekip üyeleri.',
          keyDecision:
            'Ekranları tekrar kullanılabilir FXML bloklarıyla kurup veri akışını sade tuttuk; böylece ekip paralel geliştirme yapabildi.',
          result:
            'Uygulama hızlı takvim düzenleme sağlayan tutarlı bir arayüze ulaştı ve ekip içi değişiklik çakışmaları azaldı.',
          learned:
            'Öğrenci projelerinde sürdürülebilirlik, karmaşık mimariden daha kritik. Bileşen sınırları net olduğunda ekip daha hızlı teslim ediyor.',
        },
      },
    },
  },
  experience: {
    eyebrow: 'Deneyim',
    title: 'Profesyonel zaman cizelgesi',
    description:
      'Yazilim ve otonomi akislarinda staj ve proje katkilarim.',
  },
  education: {
    eyebrow: 'Egitim',
    title: 'Akademik gecmis',
    description: 'Bilgisayar Muhendisligi egitimi ve zaman cizelgesi.',
  },
  certificates: {
    eyebrow: 'Sertifikalar',
    title: 'Sertifikalar ve egitimler',
    description:
      'Muhendislik ve yazilim odakli tamamlanan ve planlanan gelisim adimlari.',
    expected: 'Bekleniyor',
    completed: 'Tamamlandi',
  },
  activities: {
    eyebrow: 'Liderlik',
    title: 'Kulupler ve gonullu aktiviteler',
    description:
      'Proje sahiplenmesi, iletisim ve uygulama disiplinimi guclendiren roller.',
  },
  skills: {
    eyebrow: 'Yetenekler',
    title: 'Araclar ve teknik gucler',
    description:
      'Otonomi, backend/frontend ve ekip projelerinde kullandigim temel teknolojiler.',
  },
  languagesSection: {
    eyebrow: 'Diller',
    title: 'Iletisim yeterliligi',
    description:
      'Akademik ve teknik is birliklerinde kullandigim dil seviyeleri.',
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
    cta: 'Staj pozisyonu veya proje iş birliği için iletişime geçebiliriz.',
    ready: 'Bağlantı Kurmaya Hazır mısın?',
    locationLabel: 'Konum:',
    timezoneLabel: 'Saat Dilimi:',
    languagesLabel: 'Diller:',
    responseLabel: 'Yanıt Süresi:',
    cards: {
      primaryEmail: 'Ana E-posta',
      academicEmail: 'Akademik E-posta',
      phone: 'Telefon',
    },
    actions: {
      write: 'Yaz',
      call: 'Ara',
      open: 'Ac',
      copy: 'Kopyala',
      copied: 'Kopyalandi',
    },
    availability: 'Staj fırsatları ve proje iş birliklerine açığım',
    responseTime: 'Genellikle 24-48 saat içinde dönüş yaparım',
    emailCta: 'E-posta gonder',
    email: 'bilirutku35@gmail.com',
    phone: '+90 534 684 0696',
    github: 'https://github.com/utkubilir',
    linkedin: 'https://www.linkedin.com/in/utkubilir',
  },
} as const

export default tr
