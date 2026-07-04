# Rota GPS — FeWare Technology

Rota kaydeden GPS takip uygulaması. Harita OpenStreetMap + Leaflet ile
çalışır (ücretsiz, API key gerekmez). Kayıtlı rotalar cihazda,
tarayıcının `localStorage`'ında tutulur — internet/hesap gerekmez.

## Özellikler

- **Başlat/Bitir**: Kayıt butonuna basınca konum periyodik olarak alınır,
  gidilen yol haritada çizgi olarak canlı çizilir. Üstte geçen süre ve
  mesafe gösterilir.
- **Varış noktası**: İstersen başlamadan önce haritaya dokunarak bir varış
  noktası belirleyebilirsin. O noktaya ~30 metre yaklaşınca kayıt otomatik
  biter.
- **Kaydet**: Rota bitince isim ve renk seçip kaydedersin.
- **Kaydedilenler**: Kayıtlı rotalar listelenir, dokununca haritada gösterilir.
- **Ayarlar**: Karanlık/Aydınlık/Sistem teması, TR/EN dil desteği.
- **Simülasyon Modu**: Ayarlar sekmesinde şifre ile erişilir (`feware26`).

## Yerelde Geliştirme

```bash
# python varsa:
python -m http.server 8765 --directory Map

# Sonra: http://localhost:8765
# Simülasyon: http://localhost:8765/?simulate=1
```

---

## 📦 IPA Üretimi — GitHub Actions ile Sideload

Bu proje [Capacitor](https://capacitorjs.com/) ile iOS uygulamasına
çevrilmektedir. **Mac'e gerek yok** — derleme GitHub'ın ücretsiz macOS
runner'ında otomatik yapılır.

### Proje Yapısı

```
repo-kökü/
├── package.json           ← Capacitor npm bağımlılıkları
├── capacitor.config.json  ← Capacitor ayarları (appId: com.feware.rota)
├── .gitignore
├── .github/
│   └── workflows/
│       └── build-ipa.yml  ← Otomatik build workflow'u
└── Map/                   ← Web kaynak dosyaları (webDir)
    ├── index.html
    ├── css/
    └── js/
```

### Adım 1 — Workflow'u Manuel Tetikle

1. GitHub reposunu tarayıcıda aç
2. Üstteki **Actions** sekmesine tıkla
3. Sol panelde **"Build Unsigned IPA"** workflow'unu seç
4. Sağdaki **"Run workflow"** butonuna tıkla → **"Run workflow"** ile onayla

Otomatik tetikleme: `main` branch'e her `git push` yapıldığında da çalışır.

> Build süresi: CocoaPods + xcodebuild dahil yaklaşık **8-15 dakika**.

### Adım 2 — IPA'yı İndir

Build tamamlandığında:

1. Actions sekmesindeki yeşil ✅ işaretli workflow run'a tıkla
2. Sayfanın alt kısmındaki **Artifacts** bölümüne in
3. **`unsigned-ipa`** bağlantısına tıkla → `unsigned-ipa.zip` inecek
4. ZIP'i aç → içinde `Rota.ipa` dosyası

> Artifact'lar **30 gün** boyunca saklanır.

### Adım 3 — AltStore / SideStore ile iPhone'a Yükle

**Ön gereksinim:** iPhone'unda AltStore veya SideStore kurulu olmalı.

#### AltStore ile:
```
1. Bilgisayarında AltServer'ı çalıştır (Mac veya Windows)
2. iPhone'u bilgisayara USB ile bağla
3. iPhone'daki AltStore'u aç → (+) butonuna bas → "My Apps"
4. Dosya seçiciden Rota.ipa'yı seç
5. AltStore, ücretsiz Apple ID'nle imzalayıp yükler
```

#### SideStore ile:
```
1. Rota.ipa'yı iCloud Drive veya "Dosyalar" uygulamasına kopyala
2. SideStore'u aç → (+) → dosyayı seç
3. SideStore kendi imzalama altyapısıyla yükler
```

> ⚠️ **Önemli:** Ücretsiz Apple ID ile imzalanan uygulamalar **7 günde bir**
> sona erer. AltStore/SideStore, arka planda yenileme yapabilir ama telefonu
> haftada en az bir kez AltServer'a bağlı WiFi'de açık tutman gerekir.

### GPS / Konum İzinleri

Build sırasında `Info.plist`'e aşağıdaki izinler otomatik eklenir:

| Anahtar | Açıklama |
|---------|----------|
| `NSLocationWhenInUseUsageDescription` | Uygulama açıkken GPS takibi |
| `NSLocationAlwaysAndWhenInUseUsageDescription` | Arka plan konum (ilerisi için) |

---

## Notlar

- Harita görsellemeleri (OpenStreetMap karoları) internet gerektir; GPS
  takibinin kendisi internet gerektirmez.
- Arka plan konum takibi bu sürümde yoktur (web teknoloji sınırı).
- Capacitor köprüsü sayesinde ilerleyen sürümlerde native eklentiler
  (arka plan GPS, bildirimler, vb.) eklenebilir.

---

© 2026 FeWare Technology. All Copyrights Reserved.
