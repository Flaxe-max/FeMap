<div align="center">
  <img src="https://img.icons8.com/color/100/000000/map-pin.png" alt="Rota Logo" width="100"/>
  
  # FeMap - Rota GPS 🌍
  
  **Building digital worlds**
  
  [![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
  
  *Gelişmiş GPS Rota Takip Uygulaması*
</div>

---

## 🚀 Proje Hakkında

**Feware** tarafından geliştirilen Rota GPS, OpenStreetMap ve Leaflet tabanlı, internet veya hesap gerektirmeyen modern bir GPS takip uygulamasıdır. Capacitor altyapısı kullanılarak iOS için özel olarak optimize edilmiştir. Kayıtlı rotalarınız cihazınızda yerel olarak güvenle saklanır.

## ✨ Özellikler

- 📍 **Canlı Takip:** Konumunuzu periyodik olarak alarak harita üzerinde canlı rota çizer.
- 🎯 **Varış Noktası:** Haritada dokunarak bir varış noktası belirleyin, hedefe ~30 metre yaklaştığınızda kayıt otomatik olarak sonlansın.
- 💾 **Rota Kaydı:** Rota bitiminde isimlendirme ve aktivite tipi (yürüyüş, bisiklet, araç) seçenekleriyle rotalarınızı saklayın.
- 🌓 **Temalar:** Sistem ile tam entegre Karanlık ve Aydınlık tema desteği.
- 🌍 **Dil Desteği:** Türkçe ve İngilizce dil seçenekleriyle global kullanım.

---

## 🛠️ Yerelde Geliştirme

Projeyi bilgisayarınızda çalıştırmak ve test etmek için aşağıdaki adımları izleyebilirsiniz:

```bash
# Proje dizininde Python ile yerel sunucu başlatın:
python -m http.server 8765 --directory Map

# Tarayıcı üzerinden yerel sunucuya erişim:
http://localhost:8765
```

---

## 📦 IPA Üretimi & iOS Yükleme

Bu proje modern web teknolojileri (HTML/JS/CSS) ile yazılmış ve [Capacitor](https://capacitorjs.com/) köprüsü sayesinde iOS uygulamasına dönüştürülmektedir. **Apple cihazına (Mac) ihtiyacınız yoktur**; derleme işlemleri GitHub Actions üzerindeki ücretsiz macOS sunucularında otomatik olarak gerçekleştirilir.

### 🔄 GitHub Actions ile Derleme (Otomatik IPA)

1. Projenin GitHub reposunda üst kısımdan **Actions** sekmesini açın.
2. Sol taraftaki panelden **"Build Unsigned IPA"** workflow'unu seçin.
3. Sağdaki **"Run workflow"** butonuna tıklayarak derlemeyi başlatın.
4. Sistemin paketleri indirmesi ve projeyi inşa etmesi yaklaşık **8-15 dakika** sürebilir.

### 📥 Kurulum

Derleme başarıyla tamamlandığında yeşil tikli çalıştırmaya tıklayın ve sayfanın en altındaki **Artifacts** bölümüne gidin. `unsigned-ipa` bağlantısına tıklayarak `.zip` dosyasını indirin. 

İndirdiğiniz dosyanın içindeki `Rota.ipa` uygulamasını **AltStore** veya **SideStore** gibi araçlar kullanarak kolayca iPhone cihazınıza yükleyebilirsiniz.

---

## 🔒 Gizlilik ve Veri Güvenliği

Uygulamamız kullanıcı gizliliğine ve veri güvenliğine maksimum derecede önem verir. Çizdiğiniz rotalar yalnızca cihazınızın `localStorage` belleğinde tutulur; **hiçbir zaman buluta veya uzak sunuculara yüklenmez**. Uygulama açık olduğu sürece lokasyon işlemleri gerçekleşir.

---

<div align="center">

  **Building digital worlds**
  
  [🌐 Web Sitemizi Ziyaret Edin](http://feware.unaux.com/index.html?i=1)
  
  *© 2026 FeWare Technology. All Rights Reserved.*
</div>
