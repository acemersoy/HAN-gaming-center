# Han Game Center - Gemini Instructional Context

Bu dosya, Han Game Center web sitesi projesi için Gemini CLI'a rehberlik edecek teknik ve mimari prensipleri içerir.

## 🚀 Proje Genel Bakış
Han Game Center, Ankara/Esenboğa'da (AYBÜ kampüsü yanı) yer alan bir e-spor ve oyun merkezidir. Bu web sitesi, merkezin donanımını, atmosferini ve konum avantajını dürüst, modern ve "AI slop" içermeyen bir dille sunmak için tasarlanmıştır.

**Ana Teknolojiler:**
- **Frontend:** React 18 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (Endüstriyel & Brutalist tasarım)
- **Animasyon:** Framer Motion (Parallax ve sayfa geçişleri)
- **Localization:** i18next (TR/EN destekli)
- **SEO:** react-helmet-async & Schema.org (JSON-LD)

## 🛠️ Çalıştırma ve Derleme
Proje standart npm komutlarıyla yönetilir:

- **Geliştirme Sunucusu:** `npm run dev`
- **Üretim Derlemesi (Build):** `npm run build`
- **Önizleme:** `npm run preview`

## 🏗️ Mimari Yapı
- `/src/pages`: 5 ana sayfa (Home, Venue, Experience, Booking, Contact).
- `/src/components`: Tekrar kullanılabilir bileşenler (Navbar, Footer, SEO, MobileStickyBar).
- `/src/locales`: Çok dilli içerik dosyaları (tr.json, en.json).
- `/src/styles`: Küresel değişkenler (`variables.css`) ve bileşen bazlı stiller.
- `/public`: Robots.txt, sitemap.xml ve statik varlıklar.

## 🎨 Geliştirme Standartları (Coding Conventions)
1.  **AI Slop Engelleme:** Jenerik pazarlama cümlelerinden ("eşsiz deneyim", "modern vizyon" vb.) kaçınılmalıdır. Bunun yerine dükkanın gerçekleri ("A101 yanı", "RTX 4060 ekran kartı", "AYBÜ girişi") yazılmalıdır.
2.  **Emoji Kullanımı:** Arayüzde emoji kullanılmamalıdır. Görsel hiyerarşi tipografi, numerik markerlar ve dükkanın marka kırmızısı (`--brand-red`) ile sağlanmalıdır.
3.  **Tasarım Dili:** Endüstriyel, yüksek kontrastlı ve ferah bir düzen tercih edilmelidir. Linklerin altındaki varsayılan çizgiler (text-decoration) kaldırılmıştır.
4.  **Parallax Etkisi:** `Experience` sayfası gibi derinlik gerektiren yerlerde `framer-motion` ile parallax ve "scroll-reveal" animasyonları kullanılmalıdır.
5.  **Mobil Öncelik:** Tüm tasarımlar AYBÜ öğrencilerinin kampüs içinde telefonlarından hızlıca yer bakabileceği şekilde (MobileStickyBar dahil) optimize edilmelidir.

## 📍 Yerel Bağlam (Context)
Site içindeki her türlü tarif ve içerik şu iki noktaya referans vermelidir:
- **AYBÜ (Ankara Yıldırım Beyazıt Üniversitesi) Giriş Kapısı.**
- **A101 Market Yanı.**

Bu bilgiler işletmenin dijital izindeki en güçlü ve doğrulanabilir "sahicilik" işaretleridir.
