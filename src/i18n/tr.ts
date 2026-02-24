export const tr = {
  locale: 'tr',
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
    switchToEnglish: 'Switch language to English',
  },
  hero: {
    subtitle:
      'Bilgisayar Mühendisliği öğrencisiyim; ROS 2 ve PX4 ile İHA otonomisi üzerine çalışıyor, Java/React projeleri geliştiriyorum.',
    summary:
      'ECOFUAV yazılım planlamasını ve entegrasyon akışını koordine ederken, ders ve ekip projelerinde kullanılabilir yazılım çıktıları üretmeye odaklanıyorum.',
    cta: {
      projects: 'Projeleri Gör',
      contact: 'İletişime Geç',
      resume: 'Özgeçmişi İndir',
    },
    quickSnapshot: 'Kısa Özet',
    availability: 'Uygunluk',
    education: 'Eğitim',
  },
  about: {
    eyebrow: 'Hakkımda',
    title: 'Hakkımda',
    body: [
      'İzmir Ekonomi Üniversitesi Bilgisayar Mühendisliği bölümünde eğitimime devam ediyorum.',
      'Çalışmalarımın ana odağı, otonom görev akışına sahip İHA sistemlerinde yazılım geliştirme ve doğrulama süreçleri.',
      'ECOFUAV takımında yazılım tarafında planlama, görev kırılımı, entegrasyon sırası ve test takibi konularında aktif sorumluluk alıyorum.',
      'PX4 SITL ve Gazebo ortamında senaryo tabanlı doğrulama yaparak sahaya çıkmadan önce kontrol mantığını ve görev akışını test ediyoruz.',
      'ROS 2 tabanlı modüller, offboard kontrol yaklaşımı ve telemetri entegrasyonu üzerine düzenli geliştirme ve iyileştirme yapıyorum.',
      'Bunun yanında Java ve React ile daha klasik ürün odaklı projeler geliştiriyor, ekip içinde görev takibi ve teslim disiplinine önem veriyorum.',
    ],
  },
  projects: {
    eyebrow: 'Projeler',
    title: 'Seçili Çalışmalar',
    intro: 'İHA otonomisi ve planlama yazılımlarına odaklanan güncel çalışmalar.',
    featured: 'Öne Çıkan Proje',
    readMore: 'Detaya Git',
    items: {
      teknofest: {
        title: 'ECOFUAV — TEKNOFEST Savaşan İHA',
        description:
          'Bu proje, yarışma senaryolarında görevin otonom biçimde icra edilmesini hedefleyen bir Savaşan İHA geliştirme çalışmasıdır. Teknik yığında PX4 SITL, Gazebo, ROS 2, C++/Python, Git ve Linux kullanıyoruz. Ben takım kaptanı olarak yazılım iş paketlerini planlıyor, modüller arası entegrasyon sırasını belirliyor ve sprint çıktılarının test sonuçlarıyla birlikte takip edilmesini sağlıyorum. Ayrıca offboard kontrol ve telemetri akışının kararlı çalışması için ekipler arası koordinasyonu yürütüyorum.',
      },
      examPlanner: {
        title: 'Sınav Takvimi Planlayıcı',
        description:
          'Proje, sınav programlarının masaüstünde hızlı biçimde oluşturulması ve düzenlenmesi için geliştirildi. Java, JavaFX, FXML ve Maven kullanarak arayüz yapısını, ekran akışlarını ve tema düzenini oluşturduk. Ben özellikle arayüz organizasyonu, tekrar kullanılabilir bileşen yaklaşımı ve ekip içi teslim sürecinin düzenli ilerlemesi tarafında katkı sağladım.',
      },
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
    cta: 'Staj pozisyonu veya proje iş birliği için iletişime geçebiliriz.',
    ready: 'Bağlantı Kurmaya Hazır mısın?',
    locationLabel: 'Konum:',
    timezoneLabel: 'Saat Dilimi:',
    languagesLabel: 'Diller:',
    responseLabel: 'Yanıt Süresi:',
    email: 'bilirutku35@gmail.com',
    phone: '+90 534 684 0696',
    github: 'https://github.com/utkubilir',
    linkedin: 'https://www.linkedin.com/in/utkubilir',
  },
} as const

export default tr
