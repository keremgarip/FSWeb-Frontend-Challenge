# FSWeb Frontend Challenge — Kişisel Portfolyo

**Workintech Full Stack Web Geliştirme Programı** kapsamında React, Vite ve Tailwind CSS ile geliştirilen responsive, iki dilli bir kişisel portfolyo web sitesi.

Bu web sitesi teknik özelliklerimi, eğitim arka planımı, yazılım geliştirme projelerimi ve İngilizce iletişim becerilerimi göstermektedir.

## Özellilkler

- **Responsive Tasarım:** Mobil, tablet ve masaüstü görünümleri.
- **Çift Dil Desteği:** React Context API ve lokal JSON dosyaları kullanılarak yönetilen İngilizce ve Türkçe içerikler.
- **Koyu / Açık Mod:** Kalıcı kullanıcı tercihleri ile tema değişiklikleri
- **Component Tabanlı Mimari:** Tekrar kullanılabilen ve bağımsız tasarlanan React componentleri.
- **JSON Veri Yönetimi:** İçerik ve sunum katmanlarının ayrıştırılması.
- **Axios Entegrasyonu:** Hayali bir API'ye gönderilen bir POST isteğinin tanımlanması.
- **YouTube Entegrasyonu:** Gömülü bir İngilizce iletişim becerisi videosu.

## Teknolojiler

| Kategori | Teknolojiler |
|---|---|
| Frontend | React, JavaScript, HTML5, CSS3 |
| Derleme Aracı | Vite |
| Stil | Tailwind CSS v4 |
| Durum Yönetimi | React Context API |
| API İletişimi | Axios |
| İkonlar | React Icons, Lucide React |
| Yayına Alma | Vercel |

## Web Sitesi Bölümleri

- **Header:** Yönlendirme, dil değiştirme ve tema kontrolleri.
- **Hero:** Kişisel tanıtım ve sosyal medya linkleri.
- **Skills:** Teknik beceri ve yeterlilikler.
- **Profile:** Eğitim arka planı ve profesyonel ilgi alanları.
- **English Communication Skills:** Gömülü YouTube videosu.
- **Projects:** Seçilen yazılım geliştirme projeleri, teknolojileri ve linkleri.
- **Footer:** İletişim bilgileri ve sosyal medya profilleri.

## Proje Yapısı

```text
FSWeb-Frontend-Challenge/
├── public/
│   └── images/
│       ├── profile/
│       └── projects/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Profile.jsx
│   │   ├── EnglishProficiency.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Footer.jsx
│   │   └── ApiDemo.jsx
│   ├── context/
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── en.json
│   │   └── tr.json
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## Kurulum

### Ön Koşullar

- Node.js (Kurulu Vite versiyonu tarafından desteklenen bir sürüm)
- npm

### Repository'nin Klonlanması

```bash
git clone https://github.com/keremgarip/FSWeb-Frontend-Challenge.git
cd FSWeb-Frontend-Challenge
```

### Bağımlılıkları Yükleme

```bash
npm install
```

### Development Sunucusunu Başlatma

```bash
npm run dev
```

Terminalde görünen lokal URL'yi açın.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Development sunucusunu başlatma |
| `npm run build` | Derleme oluşturma |
| `npm run preview` | Derlemeyi önizleme |
| `npm run lint` | ESLint kontrollerini çalıştırma |

## Language Management

Bu web sitesi İngilizce ve Türkçe'yi React Context API kullanarak, üçüncü parti uluslararasılaşma kütüphaneleri olmadan destekler.

Çeviriler iki ayrı lokal JSON dosyalarında tutuluyor:

- `src/data/en.json`
- `src/data/tr.json`

`LanguageContext` kullanıcının dil tercihine göre uygun içeriği seçer.

## Theme Management

Açık ve Koyu Mod `ThemeContext` tarafından yönetiliyor.

Seçilen tema Tailwind CSS kullanılarak uygulanır.

Herhangi bir tercih kaydedilmediyse, site tarayıcının tercih ettiği rengi kullanır.

## API Integration

Proje hayali bir API iletişimini Axios kullanarak tanımlamaktadır.

Bir özel API demo'su POST isteği atıp, yüklenme ve hata durumları dahil sonucu gösterir.

**Local API Demo:**

```text
http://localhost:5173/?api-demo=1
```

Hayali API HTTP isteklerini göstermek için kullanılıp, gönderilen portfolyo verisinin kalıcı depolanmasını sağlamaz.

## İngilizce İletişim Becerileri

Portfolyo, İngilizce konuşma ve sunum becerilerini içeren gömülü bir Youtube videosu içermektedir.

[Videoyu Youtube'dan İzleyin](https://www.youtube.com/watch?v=syXhxqhz9IY)

## Öne Çıkan Projeler

### E-Ticaret Web Aplikasyonu

React, Redux, Tailwind CSS, Axios ve ilgili backend teknolojileri kullanılarak oluşturulan bir responsive e-ticaret uygulanması.

- [GitHub Repository](https://github.com/keremgarip/workintech-ecommerce)
- [Canlı](https://workintech-ecommerce-self.vercel.app/)

### Expense Portal

Masraf kayıtları, filtreleme, rol bazlı çalışma ve email bildirimlerini içeren ASP.NET tabanlı bir masraf yönetim uyglaması.

- [GitHub Repository](https://github.com/keremgarip/Masraf)

Bu uygulama yetkilendirme içerebildiğinden herkese açık bir şekilde gösterilmedi.

### Kişisel Portfolyo

İki dilli içerik, tema yönetimi, responsive tasarım, tekrar kullanılabilir React componentleri ve API entegrasyonu içeren bu proje.

## Canlıya Alım

Bu proje Vercel'de canlıya almak için tasarlandı.

**Canlı Portfolyo:** Canlıya alım sonrası eklenecek.

**Canlı API Demo:** Canlıya alım sonrası eklenecek.

## Gelecekte Düşünülenler

- Profesyonel tecrübe kronolojisi
- Eğitim ve sertifika bölümü
- Detaylı proje çalışmaları
- Ek erişilebilirlik geliştirmeleri
- İleri görsel geliştirmeler ve animasyonlar

## Author

**Kerem Garip — Backend Geliştirme & Full-Stack Web Uygulamaları**

Yazılım Mühendisliği geçmişine ve Bilgi Teknolojileri bölümünde yüksek lisans derecesine sahip bir yazılım geliştiricisi.

Workintech Full Stack Web Geliştirme Programı kapsamında geliştirildi.