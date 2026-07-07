<div align="center">
  <img src="https://img.icons8.com/color/100/000000/map-pin.png" alt="Rota Logo" width="100"/>
  
  # FeMap - Rota GPS 🌍
  
  **Building digital worlds**
  
  [![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)
  
  *Advanced GPS Route Tracking Application*
</div>

---

## 🚀 About The Project

Developed by **Feware**, FeMap (Rota GPS) is a modern GPS tracking application based on OpenStreetMap and Leaflet that does not require an internet connection or an account to use core tracking features. It is specifically optimized for iOS using the Capacitor framework. Your recorded routes are safely stored locally on your device.

## ✨ Features

- 📍 **Live Tracking:** Periodically fetches your location and draws a live route on the map.
- 🎯 **Destination Setting:** Set a destination by tapping on the map. Recording automatically stops when you are within ~30 meters of the target.
- 💾 **Route Recording:** Save your routes by naming them and selecting an activity type (walking, cycling, driving).
- 🌓 **Themes:** Fully integrated System Dark and Light theme support.
- 🌍 **Language Support:** Bilingual support with English and Turkish options.

---

## 🛠️ Local Development

To run and test the project on your local machine, follow these steps:

```bash
# Start a local server with Python in the project directory:
python -m http.server 8765 --directory Map

# Access the local server via browser:
http://localhost:8765
```

---

## 📦 IPA Generation & iOS Sideloading

This project is built with modern web technologies (HTML/JS/CSS) and converted into an iOS application using the [Capacitor](https://capacitorjs.com/) bridge. **You do not need a Mac device**; builds are automatically handled on GitHub Actions' free macOS runners.

### 🔄 Build via GitHub Actions (Automated IPA)

1. Navigate to the **Actions** tab on your GitHub repository.
2. Select the **"Build Unsigned IPA"** workflow from the left panel.
3. Click the **"Run workflow"** button on the right to start the build.
4. The system will download packages and build the project. This takes approximately **8-15 minutes**.

### 📥 Installation

Once the build successfully completes, click the green checkmark run and scroll down to the **Artifacts** section at the bottom. Click on the `unsigned-ipa` link to download the `.zip` file.

You can easily sideload the `Rota.ipa` file inside the downloaded zip to your iPhone using tools like **AltStore** or **SideStore**.

---

## 🔒 Privacy and Data Security

Our application prioritizes user privacy and data security. The routes you draw are only stored in your device's `localStorage` memory; **they are never uploaded to the cloud or remote servers**. Location processing only occurs while the app is active.

---

<div align="center">

  **Building digital worlds**
  
  [🌐 Visit Our Website](http://feware.unaux.com/index.html?i=1)
  
  *© 2026 FeWare Technology. All Rights Reserved.*
</div>
