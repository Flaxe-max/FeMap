(function () {
  "use strict";

  // ============================================================
  // SABITLER
  // ============================================================
  var STORAGE_KEY   = "rota_app_routes_v1";
  var STORAGE_LANG  = "rota_lang";
  var STORAGE_THEME = "rota_theme";
  var APP_VERSION   = "1.0.0";
  var SIM_PASSWORD  = "feware26";

  var ARRIVAL_THRESHOLD_M    = 30;
  var ARRIVAL_MIN_READINGS   = 3;
  var ARRIVAL_MIN_DURATION_MS = 10000;
  var ACCURACY_MAX_M         = 100;
  var SIM_INTERVAL_MS        = 300;
  var SIM_ACCURACY_M         = 5;

  var COLORS = ["#FF6A3D", "#2FD6B3", "#4EA8FF", "#A47CF3", "#FFC24E", "#FF5C8A"];

  L.Icon.Default.imagePath = "js/leaflet/images/";

  // ============================================================
  // i18n
  // ============================================================
  var STRINGS = {
    tr: {
      tab_map: "Harita", tab_saved: "Kaydedilenler", tab_settings: "Ayarlar",
      dest_btn: "Varış Noktası", dest_btn_set: "Varış Ayarlandı",
      dest_banner: "Haritada varış noktasını seçin",
      dest_cancel: "vazgeç", dest_toast: "Varış noktası belirlendi",
      arrival_toast: "Varış noktasına ulaşıldı! 🎯",
      rec_start: "Başlat", rec_stop: "Bitir",
      saved_title: "Kaydedilen Rotalar",
      saved_empty: "Henüz kayıtlı rotan yok.",
      saved_empty_sub: "Haritada kayıt butonuna basarak ilk rotanı oluştur.",
      preview_close: "kapat",
      sheet_title: "Rota Tamamlandı 🎯", route_name_label: "Rota adı",
      route_name_ph: "ör. Ev Yolu", btn_discard: "Kaydetme", btn_save: "Kaydet",
      toast_saved: "✓ Rota kaydedildi",
      toast_no_geo: "Bu cihazda konum servisi bulunamadı",
      toast_low_acc: "Düşük GPS hassasiyeti", toast_waiting: "bekleniyor…",
      err_permission: "Konum izni verilmedi. Ayarlardan konum iznini etkinleştirin.",
      err_unavailable: "Konum alınamadı — GPS sinyali bekleniyor…",
      err_timeout: "Konum zaman aşımına uğradı, tekrar deneniyor…",
      confirm_delete: "silinsin mi?",
      // Ayarlar
      settings_title: "Ayarlar",
      settings_appearance: "GÖRÜNÜM", settings_theme: "Tema",
      settings_theme_dark: "Karanlık", settings_theme_light: "Aydınlık", settings_theme_system: "Sistem",
      settings_language: "DİL",
      settings_dev: "GELİŞTİRİCİ",
      settings_sim_btn: "Simülasyon Moduna Gir",
      settings_sim_desc: "Gerçek GPS olmadan rotaları test edin",
      settings_sim_active: "Simülasyon Modu Aktif ✓",
      settings_about: "HAKKINDA",
      settings_app_name_label: "Uygulama", settings_version: "Versiyon",
      settings_dev_name: "Geliştirici", settings_contact: "İletişim",
      settings_privacy: "Gizlilik Politikası", settings_terms: "Kullanım Koşulları",
      settings_clear_data: "Tüm Verileri Sil",
      settings_clear_confirm: "Tüm kayıtlı rotalar kalıcı olarak silinecek. Emin misiniz?",
      settings_data_section: "VERİLER",
      // Şifre modalı
      pw_title: "Geliştirici Erişimi", pw_desc: "Bu alan yalnızca geliştiriciler içindir.",
      pw_placeholder: "Şifreyi girin", pw_btn_enter: "Giriş", pw_btn_cancel: "İptal",
      pw_wrong: "Yanlış şifre. Tekrar deneyin.",
      // Simülatör
      sim_title: "🧪 Simülatör",
      sim_speed_label: "Hız:", sim_wp_btn: "📍 Waypoint Ekle",
      sim_clear_btn: "✕ Temizle",
      sim_hint: "Haritaya tıklayarak waypoint ekle. Bitince \"Başlat\"a bas.",
      sim_waypoint: "waypoint",
      sim_auto_route: "Waypoint eklenmedi — otomatik rota oluşturuldu",
      sim_started_log: "m/s",
      toast_sim_enabled: "🧪 Simülasyon modu etkinleştirildi",
      toast_data_cleared: "✓ Tüm veriler silindi",
      toast_privacy_soon: "Yakında eklenecek",
    },
    en: {
      tab_map: "Map", tab_saved: "Saved", tab_settings: "Settings",
      dest_btn: "Destination", dest_btn_set: "Destination Set",
      dest_banner: "Tap the map to set destination",
      dest_cancel: "cancel", dest_toast: "Destination set",
      arrival_toast: "Destination reached! 🎯",
      rec_start: "Start", rec_stop: "Stop",
      saved_title: "Saved Routes",
      saved_empty: "No saved routes yet.",
      saved_empty_sub: "Tap the record button on the map to create your first route.",
      preview_close: "close",
      sheet_title: "Route Complete 🎯", route_name_label: "Route name",
      route_name_ph: "e.g. Home Route", btn_discard: "Discard", btn_save: "Save",
      toast_saved: "✓ Route saved",
      toast_no_geo: "Location service not available on this device",
      toast_low_acc: "Low GPS accuracy", toast_waiting: "waiting…",
      err_permission: "Location permission denied. Enable it in Settings.",
      err_unavailable: "Location unavailable — waiting for GPS signal…",
      err_timeout: "Location timed out, retrying…",
      confirm_delete: "delete?",
      // Settings
      settings_title: "Settings",
      settings_appearance: "APPEARANCE", settings_theme: "Theme",
      settings_theme_dark: "Dark", settings_theme_light: "Light", settings_theme_system: "System",
      settings_language: "LANGUAGE",
      settings_dev: "DEVELOPER",
      settings_sim_btn: "Enter Simulation Mode",
      settings_sim_desc: "Test routes without real GPS",
      settings_sim_active: "Simulation Mode Active ✓",
      settings_about: "ABOUT",
      settings_app_name_label: "App", settings_version: "Version",
      settings_dev_name: "Developer", settings_contact: "Contact",
      settings_privacy: "Privacy Policy", settings_terms: "Terms of Use",
      settings_clear_data: "Clear All Data",
      settings_clear_confirm: "All saved routes will be permanently deleted. Are you sure?",
      settings_data_section: "DATA",
      // Password modal
      pw_title: "Developer Access", pw_desc: "This area is for developers only.",
      pw_placeholder: "Enter password", pw_btn_enter: "Enter", pw_btn_cancel: "Cancel",
      pw_wrong: "Wrong password. Try again.",
      // Simulator
      sim_title: "🧪 Simulator",
      sim_speed_label: "Speed:", sim_wp_btn: "📍 Add Waypoint",
      sim_clear_btn: "✕ Clear",
      sim_hint: "Tap the map to add waypoints. Then tap \"Start\".",
      sim_waypoint: "waypoint(s)",
      sim_auto_route: "No waypoints — auto route generated",
      sim_started_log: "m/s",
      toast_sim_enabled: "🧪 Simulation mode enabled",
      toast_data_cleared: "✓ All data cleared",
      toast_privacy_soon: "Coming soon",
    }
  };

  var currentLang  = localStorage.getItem(STORAGE_LANG)  || "tr";
  var currentTheme = localStorage.getItem(STORAGE_THEME) || "dark";

  function t(key) {
    return (STRINGS[currentLang] && STRINGS[currentLang][key]) ||
           (STRINGS.tr[key]) || key;
  }

  // ============================================================
  // DURUM
  // ============================================================
  var map, liveLine, destMarker, previewLine, previewMarkers = [];
  var tracking = false;
  var watchId = null;
  var routePoints = [];
  var startTime = null;
  var timerHandle = null;
  var destination = null;
  var settingDestination = false;
  var pendingRoute = null;
  var selectedColor = COLORS[0];
  var arrivalConsecutive = 0;

  // Simülatör
  var SIM_MODE = (new URLSearchParams(window.location.search).get("simulate") === "1") ||
                 (sessionStorage.getItem("sim_mode") === "1");
  var SIM_SPEED_MPS  = 10;
  var simUIInitialized = false;
  var simWaypoints   = [];
  var simWpMarkers   = [];
  var simSettingWaypoints = false;
  var simIntervalId  = null;
  var simSegIdx      = 0;
  var simSegProgress = 0;

  // ============================================================
  // YARDIMCILAR
  // ============================================================
  function $(id) { return document.getElementById(id); }

  function haversine(a, b) {
    var R = 6371000;
    var dLat = (b.lat - a.lat) * Math.PI / 180;
    var dLng = (b.lng - a.lng) * Math.PI / 180;
    var s1 = Math.sin(dLat / 2), s2 = Math.sin(dLng / 2);
    var v = s1 * s1 + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * s2 * s2;
    return R * 2 * Math.atan2(Math.sqrt(v), Math.sqrt(1 - v));
  }

  function totalDistance(pts) {
    var d = 0;
    for (var i = 1; i < pts.length; i++) d += haversine(pts[i - 1], pts[i]);
    return d;
  }

  function formatDistance(m) { return (m / 1000).toFixed(2) + " km"; }

  function formatDuration(ms) {
    var s = Math.floor(ms / 1000);
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    function pad(n) { return n < 10 ? "0" + n : "" + n; }
    return pad(h) + ":" + pad(m) + ":" + pad(sec);
  }

  function formatDate(ts) {
    return new Date(ts).toLocaleDateString(currentLang === "en" ? "en-GB" : "tr-TR",
      { day: "numeric", month: "short", year: "numeric" });
  }

  function offsetLatLng(lat, lng, bearingRad, distM) {
    var R = 6371000;
    var dLat = (distM / R) * Math.cos(bearingRad);
    var dLng = (distM / R) * Math.sin(bearingRad) / Math.cos(lat * Math.PI / 180);
    return { lat: lat + dLat * 180 / Math.PI, lng: lng + dLng * 180 / Math.PI };
  }

  var toastTimer = null;
  function showToast(msg, dur) {
    var el = $("toast");
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, dur || 2800);
  }

  // ============================================================
  // TEMA
  // ============================================================
  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem(STORAGE_THEME, theme);
    var effectiveTheme = theme;
    if (theme === "system") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.dataset.theme = effectiveTheme;
    $("meta-theme-color").content = effectiveTheme === "light" ? "#F1F3F8" : "#0B0F17";
  }

  // ============================================================
  // DİL
  // ============================================================
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    document.documentElement.lang = lang;
    applyLanguage();
  }

  function applyLanguage() {
    // Tab etiketleri
    $("tab-label-map").textContent      = t("tab_map");
    $("tab-label-saved").textContent    = t("tab_saved");
    $("tab-label-settings").textContent = t("tab_settings");
    // Harita görünümü
    $("dest-banner-text").textContent = t("dest_banner");
    $("dest-cancel").textContent      = t("dest_cancel");
    if (!destination) $("dest-btn-label").textContent = t("dest_btn");
    else              $("dest-btn-label").textContent = t("dest_btn_set");
    $("record-btn").setAttribute("aria-label", tracking ? t("rec_stop") : t("rec_start"));
    // Kaydetme paneli
    $("sheet-title").textContent     = t("sheet_title");
    $("route-name-label").textContent = t("route_name_label");
    $("route-name").placeholder       = t("route_name_ph");
    $("discard-route").textContent    = t("btn_discard");
    $("confirm-save").textContent     = t("btn_save");
    // Kaydedilenler
    $("saved-title").textContent    = t("saved_title");
    $("saved-empty-text").textContent = t("saved_empty");
    $("saved-empty-sub").textContent  = t("saved_empty_sub");
    // Önizleme
    $("preview-close").textContent = t("preview_close");
    // Şifre modalı
    $("pw-title-text").textContent = t("pw_title");
    $("pw-desc-text").textContent  = t("pw_desc");
    $("pw-input").placeholder      = t("pw_placeholder");
    $("pw-cancel").textContent     = t("pw_btn_cancel");
    $("pw-enter").textContent      = t("pw_btn_enter");
    var pwErr = $("pw-error");
    if (!pwErr.hidden) pwErr.textContent = t("pw_wrong");
    // Ayarlar sayfasını yeniden oluştur
    renderSettings();
    // Simülatör paneli etiketlerini güncelle
    if (simUIInitialized) updateSimLabels();
  }

  // ============================================================
  // HARİTA
  // ============================================================
  function initMap() {
    map = L.map("map", { zoomControl: true, attributionControl: true }).setView([39.925, 32.836], 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap katkıda bulunanlar"
    }).addTo(map);
    liveLine = L.polyline([], { color: selectedColor, weight: 4, opacity: 0.95 }).addTo(map);
    map.on("click", onMapClick);

    if (!SIM_MODE && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        map.setView([pos.coords.latitude, pos.coords.longitude], 15);
      }, function () {}, { timeout: 5000 });
    }
    if (SIM_MODE) initSimUI();
  }

  function onMapClick(e) {
    if (simSettingWaypoints) { addSimWaypoint(e.latlng.lat, e.latlng.lng); return; }
    if (!settingDestination) return;
    setDestination(e.latlng.lat, e.latlng.lng);
    settingDestination = false;
    $("dest-banner").hidden = true;
  }

  function setDestination(lat, lng) {
    destination = { lat: lat, lng: lng };
    if (destMarker) map.removeLayer(destMarker);
    destMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        className: "",
        html: '<div style="width:16px;height:16px;border-radius:50%;background:#2FD6B3;border:3px solid #0B0F17;box-shadow:0 0 0 2px #2FD6B3;"></div>',
        iconSize: [16, 16], iconAnchor: [8, 8]
      })
    }).addTo(map);
    $("dest-btn").classList.add("active");
    $("dest-btn-label").textContent = t("dest_btn_set");
    showToast(t("dest_toast"));
  }

  function clearDestination() {
    destination = null;
    if (destMarker) { map.removeLayer(destMarker); destMarker = null; }
    $("dest-btn").classList.remove("active");
    $("dest-btn-label").textContent = t("dest_btn");
  }

  // ============================================================
  // TAKİP
  // ============================================================
  function startTracking() {
    if (!SIM_MODE && !navigator.geolocation) {
      showToast(t("toast_no_geo")); return;
    }
    routePoints = [];
    startTime = Date.now();
    tracking = true;
    arrivalConsecutive = 0;

    liveLine.setLatLngs([]);
    liveLine.setStyle({ color: selectedColor });

    $("record-btn").classList.add("active");
    $("icon-play").hidden = true;
    $("icon-stop").hidden = false;
    $("record-btn").setAttribute("aria-label", t("rec_stop"));
    $("dest-btn").disabled = true;
    $("stats-chip").hidden = false;

    timerHandle = setInterval(updateStatsChip, 1000);
    updateStatsChip();

    if (SIM_MODE) {
      startSimulator();
    } else {
      watchId = navigator.geolocation.watchPosition(onPosition, onPositionError, {
        enableHighAccuracy: true, maximumAge: 1000, timeout: 15000
      });
    }
  }

  function onPosition(pos) {
    var accuracy = pos.coords.accuracy;
    var p = { lat: pos.coords.latitude, lng: pos.coords.longitude, t: Date.now() };

    if (accuracy > ACCURACY_MAX_M) {
      console.warn("[rota] Düşük hassasiyet, okuma atlandı — accuracy=" + Math.round(accuracy) + "m");
      showToast(t("toast_low_acc") + " (" + Math.round(accuracy) + " m), " + t("toast_waiting"));
      arrivalConsecutive = 0;
      return;
    }

    routePoints.push(p);
    liveLine.addLatLng([p.lat, p.lng]);
    map.panTo([p.lat, p.lng], { animate: true });
    updateStatsChip();

    if (destination) {
      var dist    = haversine(p, destination);
      var elapsed = Date.now() - startTime;

      if (dist <= ARRIVAL_THRESHOLD_M) arrivalConsecutive++;
      else arrivalConsecutive = 0;

      console.log(
        "[arrival-check] dist=" + Math.round(dist) + "m" +
        " accuracy=" + Math.round(accuracy) + "m" +
        " consecutive=" + arrivalConsecutive + "/" + ARRIVAL_MIN_READINGS +
        " elapsed=" + Math.round(elapsed / 1000) + "s"
      );

      if (arrivalConsecutive >= ARRIVAL_MIN_READINGS && elapsed >= ARRIVAL_MIN_DURATION_MS) {
        showToast(t("arrival_toast"));
        stopTracking(true);
      }
    }
  }

  function onPositionError(err) {
    if (err.code === 1)      showToast(t("err_permission")),  stopTracking(false, true);
    else if (err.code === 2) showToast(t("err_unavailable"));
    else                     showToast(t("err_timeout"));
  }

  function updateStatsChip() {
    $("stat-time").textContent = formatDuration(Date.now() - startTime);
    $("stat-dist").textContent = formatDistance(totalDistance(routePoints));
  }

  function stopTracking(auto, silentDiscard) {
    if (!tracking) return;
    arrivalConsecutive = 0;
    tracking = false;

    if (SIM_MODE) stopSimulator();
    if (watchId !== null) { navigator.geolocation.clearWatch(watchId); watchId = null; }
    clearInterval(timerHandle);

    $("record-btn").classList.remove("active");
    $("icon-play").hidden = false;
    $("icon-stop").hidden = true;
    $("record-btn").setAttribute("aria-label", t("rec_start"));
    $("dest-btn").disabled = false;
    $("stats-chip").hidden = true;

    if (silentDiscard || routePoints.length < 2) {
      routePoints = []; liveLine.setLatLngs([]); return;
    }

    pendingRoute = {
      points: routePoints.slice(),
      distance: totalDistance(routePoints),
      duration: Date.now() - startTime,
      destination: destination
    };
    openSaveSheet();
  }

  // ============================================================
  // SİMÜLASYON
  // ============================================================
  function enableSimMode() {
    SIM_MODE = true;
    sessionStorage.setItem("sim_mode", "1");
    initSimUI();
    switchTab("map");
    showToast(t("toast_sim_enabled"));
    renderSettings();
  }

  function initSimUI() {
    if (simUIInitialized) return;
    simUIInitialized = true;

    var badge = document.createElement("div");
    badge.id = "sim-badge";
    badge.className = "sim-badge";
    badge.innerHTML = '<span class="sim-dot"></span> SİMÜLASYON';
    document.body.appendChild(badge);

    var panel = document.createElement("div");
    panel.id = "sim-panel";
    panel.className = "sim-panel";
    panel.innerHTML =
      '<div class="sim-panel-header">' +
      '  <span class="sim-panel-title" id="sim-panel-title">' + t("sim_title") + '</span>' +
      '  <button id="sim-help-btn" class="sim-icon-btn" title="Help">?</button>' +
      '</div>' +
      '<div class="sim-section">' +
      '  <label class="sim-label"><span id="sim-speed-label">' + t("sim_speed_label") + '</span> <span id="sim-speed-val">10</span> m/s</label>' +
      '  <input id="sim-speed" type="range" min="1" max="50" value="10" class="sim-slider">' +
      '</div>' +
      '<div class="sim-section sim-section-row">' +
      '  <button id="sim-wp-btn" class="sim-action-btn"><span id="sim-wp-btn-label">' + t("sim_wp_btn") + '</span></button>' +
      '  <button id="sim-clear-btn" class="sim-action-btn sim-action-danger"><span id="sim-clear-btn-label">' + t("sim_clear_btn") + '</span></button>' +
      '</div>' +
      '<div id="sim-wp-count" class="sim-wp-count">0 ' + t("sim_waypoint") + '</div>' +
      '<div id="sim-hint" class="sim-hint hidden">' + t("sim_hint") + '</div>';
    document.body.appendChild(panel);

    $("sim-speed").addEventListener("input", function () {
      SIM_SPEED_MPS = parseInt(this.value, 10);
      $("sim-speed-val").textContent = this.value;
    });
    $("sim-wp-btn").addEventListener("click", function () {
      simSettingWaypoints = !simSettingWaypoints;
      this.classList.toggle("active", simSettingWaypoints);
      $("sim-hint").classList.toggle("hidden", !simSettingWaypoints);
      map.getContainer().style.cursor = simSettingWaypoints ? "crosshair" : "";
    });
    $("sim-clear-btn").addEventListener("click", clearSimWaypoints);
    $("sim-help-btn").addEventListener("click", function () {
      showToast(t("sim_hint"), 4000);
    });
  }

  function updateSimLabels() {
    var el;
    if ((el = $("sim-panel-title")))   el.textContent = t("sim_title");
    if ((el = $("sim-speed-label")))   el.textContent = t("sim_speed_label");
    if ((el = $("sim-wp-btn-label")))  el.textContent = t("sim_wp_btn");
    if ((el = $("sim-clear-btn-label"))) el.textContent = t("sim_clear_btn");
    if ((el = $("sim-hint")))          el.textContent = t("sim_hint");
    updateSimWpCount();
  }

  function addSimWaypoint(lat, lng) {
    simWaypoints.push({ lat: lat, lng: lng });
    var marker = L.circleMarker([lat, lng], {
      radius: 7, color: "#FFC24E", weight: 2,
      fillColor: "#FFC24E", fillOpacity: 0.85
    }).addTo(map);
    marker.bindTooltip(String(simWaypoints.length), {
      permanent: true, direction: "center", className: "sim-wp-label"
    });
    simWpMarkers.push(marker);
    updateSimWpCount();
    console.log("[sim] Waypoint " + simWaypoints.length + " eklendi:", lat.toFixed(5), lng.toFixed(5));
  }

  function clearSimWaypoints() {
    simWpMarkers.forEach(function (m) { map.removeLayer(m); });
    simWpMarkers = []; simWaypoints = [];
    updateSimWpCount();
  }

  function updateSimWpCount() {
    var el = $("sim-wp-count");
    if (el) el.textContent = simWaypoints.length + " " + t("sim_waypoint");
  }

  function startSimulator() {
    if (simWaypoints.length < 2) {
      var c = map.getCenter();
      simWaypoints = [
        { lat: c.lat, lng: c.lng },
        offsetLatLng(c.lat, c.lng, 0, 200),
        offsetLatLng(c.lat, c.lng, Math.PI / 2, 300),
        offsetLatLng(c.lat, c.lng, Math.PI, 200),
        { lat: c.lat, lng: c.lng }
      ];
      showToast(t("sim_auto_route"), 3000);
    }
    simSegIdx = 0; simSegProgress = 0;
    feedSimPosition(simWaypoints[0].lat, simWaypoints[0].lng);
    simIntervalId = setInterval(simTick, SIM_INTERVAL_MS);
    console.log("[sim] Başlatıldı —", simWaypoints.length, "waypoint,", SIM_SPEED_MPS, "m/s");
  }

  function stopSimulator() {
    clearInterval(simIntervalId); simIntervalId = null;
    console.log("[sim] Durduruldu");
  }

  function simTick() {
    if (!tracking) return;
    var stepM = SIM_SPEED_MPS * (SIM_INTERVAL_MS / 1000);
    simSegProgress += stepM;
    while (simSegIdx < simWaypoints.length - 1) {
      var from = simWaypoints[simSegIdx], to = simWaypoints[simSegIdx + 1];
      var segLen = haversine(from, to);
      if (simSegProgress <= segLen) {
        var t2 = segLen > 0 ? simSegProgress / segLen : 1;
        feedSimPosition(from.lat + t2 * (to.lat - from.lat), from.lng + t2 * (to.lng - from.lng));
        return;
      }
      simSegProgress -= segLen; simSegIdx++;
    }
    var last = simWaypoints[simWaypoints.length - 1];
    feedSimPosition(last.lat, last.lng);
    if (simIntervalId && !destination) { stopSimulator(); if (tracking) stopTracking(true); }
  }

  function feedSimPosition(lat, lng) {
    onPosition({
      coords: {
        latitude: lat, longitude: lng, accuracy: SIM_ACCURACY_M,
        altitude: null, altitudeAccuracy: null, heading: null, speed: SIM_SPEED_MPS
      },
      timestamp: Date.now()
    });
  }

  // ============================================================
  // KAYDETME PANELİ
  // ============================================================
  function buildColorRow() {
    var row = $("color-row");
    row.innerHTML = "";
    COLORS.forEach(function (c) {
      var dot = document.createElement("button");
      dot.className = "color-dot" + (c === selectedColor ? " selected" : "");
      dot.style.background = c;
      dot.setAttribute("aria-label", "Renk: " + c);
      dot.addEventListener("click", function () {
        selectedColor = c;
        Array.prototype.forEach.call(row.children, function (el) { el.classList.remove("selected"); });
        dot.classList.add("selected");
      });
      row.appendChild(dot);
    });
  }

  function openSaveSheet() {
    $("sheet-dist").textContent = formatDistance(pendingRoute.distance);
    $("sheet-time").textContent = formatDuration(pendingRoute.duration);
    $("route-name").value = "";
    buildColorRow();
    var sheet = $("save-sheet");
    sheet.hidden = false;
    var inner = sheet.querySelector(".sheet");
    inner.style.transform = "translateY(100%)";
    requestAnimationFrame(function () {
      inner.style.transition = "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)";
      inner.style.transform  = "translateY(0)";
    });
    setTimeout(function () { $("route-name").focus(); }, 320);
  }

  function closeSaveSheet() {
    var sheet = $("save-sheet");
    var inner = sheet.querySelector(".sheet");
    inner.style.transition = "transform 0.22s ease-in";
    inner.style.transform  = "translateY(100%)";
    setTimeout(function () {
      sheet.hidden = true;
      inner.style.transform = inner.style.transition = "";
    }, 240);
    pendingRoute = null; routePoints = [];
    destination = null; clearDestination();
    liveLine.setLatLngs([]);
  }

  function saveRoute() {
    var name   = $("route-name").value.trim() || (currentLang === "en" ? "Unnamed Route" : "İsimsiz Rota");
    var routes = loadRoutes();
    routes.unshift({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name, color: selectedColor, simulated: SIM_MODE,
      points: pendingRoute.points, distance: pendingRoute.distance,
      duration: pendingRoute.duration, createdAt: Date.now()
    });
    persistRoutes(routes);
    renderSavedList();
    showToast(t("toast_saved"));
    closeSaveSheet();
  }

  // ============================================================
  // DEPOLAMA
  // ============================================================
  function loadRoutes() {
    try { var r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : []; }
    catch (e) { return []; }
  }
  function persistRoutes(routes) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(routes)); }
    catch (e) { showToast("Kaydetme sırasında bir sorun oluştu"); }
  }
  function deleteRoute(id) {
    persistRoutes(loadRoutes().filter(function (r) { return r.id !== id; }));
    renderSavedList();
  }

  // ============================================================
  // KAYDEDİLENLER LİSTESİ
  // ============================================================
  function renderSavedList() {
    var routes = loadRoutes();
    var list   = $("saved-list");
    list.innerHTML = "";
    $("saved-empty").hidden = routes.length > 0;
    var cnt = $("saved-count");
    cnt.hidden = routes.length === 0; cnt.textContent = routes.length;

    routes.forEach(function (r) {
      var card = document.createElement("div");
      card.className = "route-card";

      var bar = document.createElement("div");
      bar.className = "route-color"; bar.style.background = r.color;

      var info = document.createElement("div");
      info.className = "route-info";
      var simTag = r.simulated ? '<span class="route-sim-tag">SİM</span>' : "";
      info.innerHTML = '<div class="route-name">' + simTag + '</div><div class="route-meta"></div>';
      info.querySelector(".route-name").appendChild(document.createTextNode(r.name));
      info.querySelector(".route-meta").textContent =
        formatDate(r.createdAt) + " · " + formatDistance(r.distance) + " · " + formatDuration(r.duration);

      var del = document.createElement("button");
      del.className = "route-delete"; del.setAttribute("aria-label", "Rotayı sil");
      del.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m2 0v13a1 1 0 01-1 1H8a1 1 0 01-1-1V7h10z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      del.addEventListener("click", function (ev) {
        ev.stopPropagation();
        if (confirm('"' + r.name + '" ' + t("confirm_delete"))) deleteRoute(r.id);
      });

      card.appendChild(bar); card.appendChild(info); card.appendChild(del);
      card.addEventListener("click", function () { showRouteOnMap(r); });
      list.appendChild(card);
    });
  }

  function showRouteOnMap(route) {
    switchTab("map"); clearPreview();
    var latlngs = route.points.map(function (p) { return [p.lat, p.lng]; });
    previewLine = L.polyline(latlngs, { color: route.color, weight: 4, opacity: 0.95 }).addTo(map);
    map.fitBounds(previewLine.getBounds(), { padding: [40, 40] });
    var s = L.circleMarker(latlngs[0], { radius: 6, color: "#fff", weight: 2, fillColor: route.color, fillOpacity: 1 }).addTo(map);
    var e = L.circleMarker(latlngs[latlngs.length - 1], { radius: 6, color: route.color, weight: 2, fillColor: "#0B0F17", fillOpacity: 1 }).addTo(map);
    previewMarkers.push(s, e);
    $("preview-name").textContent = route.name;
    $("preview-meta").textContent = formatDistance(route.distance) + " · " + formatDuration(route.duration);
    $("preview-bar").hidden = false;
  }

  function clearPreview() {
    if (previewLine) { map.removeLayer(previewLine); previewLine = null; }
    previewMarkers.forEach(function (m) { map.removeLayer(m); }); previewMarkers = [];
    $("preview-bar").hidden = true;
  }

  // ============================================================
  // AYARLAR
  // ============================================================
  function renderSettings() {
    var view = $("view-settings");
    if (!view) return;

    var rows = [];

    // Header
    rows.push('<div class="settings-header"><h1>' + t("settings_title") + '</h1></div>');
    rows.push('<div class="settings-body">');

    // Görünüm
    rows.push('<div class="settings-section-label">' + t("settings_appearance") + '</div>');
    rows.push('<div class="settings-card">');
    rows.push('  <div class="settings-row">');
    rows.push('    <span class="settings-row-label">' + t("settings_theme") + '</span>');
    rows.push('    <div class="theme-seg">');
    ["dark","light","system"].forEach(function(th) {
      var label = t("settings_theme_" + th);
      var icon = th === "dark" ? "🌙" : th === "light" ? "☀️" : "⚙️";
      rows.push('      <button class="seg-btn' + (currentTheme === th ? " active" : "") + '" data-theme-val="' + th + '">' + icon + ' ' + label + '</button>');
    });
    rows.push('    </div>');
    rows.push('  </div>');
    rows.push('</div>');

    // Dil
    rows.push('<div class="settings-section-label">' + t("settings_language") + '</div>');
    rows.push('<div class="settings-card">');
    rows.push('  <div class="settings-row">');
    rows.push('    <div class="lang-options">');
    rows.push('      <button class="lang-btn' + (currentLang === "tr" ? " active" : "") + '" data-lang="tr">🇹🇷 Türkçe</button>');
    rows.push('      <button class="lang-btn' + (currentLang === "en" ? " active" : "") + '" data-lang="en">🇬🇧 English</button>');
    rows.push('    </div>');
    rows.push('  </div>');
    rows.push('</div>');

    // Geliştirici
    rows.push('<div class="settings-section-label">' + t("settings_dev") + '</div>');
    rows.push('<div class="settings-card">');
    if (SIM_MODE) {
      rows.push('  <div class="settings-row settings-row-sim-active">');
      rows.push('    <span class="sim-active-badge">✓</span>');
      rows.push('    <span class="settings-row-label" style="color:var(--amber-400)">' + t("settings_sim_active") + '</span>');
      rows.push('  </div>');
    } else {
      rows.push('  <button class="settings-row settings-row-btn" id="open-sim-btn">');
      rows.push('    <div class="settings-row-lock">🔒</div>');
      rows.push('    <div class="settings-row-content">');
      rows.push('      <div class="settings-row-label">' + t("settings_sim_btn") + '</div>');
      rows.push('      <div class="settings-row-sub">' + t("settings_sim_desc") + '</div>');
      rows.push('    </div>');
      rows.push('    <svg class="settings-chevron" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>');
      rows.push('  </button>');
    }
    rows.push('</div>');

    // Hakkında
    rows.push('<div class="settings-section-label">' + t("settings_about") + '</div>');
    rows.push('<div class="settings-card">');
    [
      [t("settings_app_name_label"), "Rota GPS"],
      [t("settings_version"), "v" + APP_VERSION],
      [t("settings_dev_name"), "FeWare Technology"],
      [t("settings_contact"), "info@feware.dev"]
    ].forEach(function(row, i, arr) {
      rows.push('  <div class="settings-row">');
      rows.push('    <span class="settings-row-label">' + row[0] + '</span>');
      rows.push('    <span class="settings-row-val">' + row[1] + '</span>');
      rows.push('  </div>');
      if (i < arr.length - 1) rows.push('  <div class="settings-divider"></div>');
    });
    rows.push('</div>');

    // Politika
    rows.push('<div class="settings-card">');
    rows.push('  <button class="settings-row settings-row-btn" id="privacy-btn">');
    rows.push('    <span class="settings-row-label">' + t("settings_privacy") + '</span>');
    rows.push('    <svg class="settings-chevron" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    rows.push('  </button>');
    rows.push('  <div class="settings-divider"></div>');
    rows.push('  <button class="settings-row settings-row-btn" id="terms-btn">');
    rows.push('    <span class="settings-row-label">' + t("settings_terms") + '</span>');
    rows.push('    <svg class="settings-chevron" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    rows.push('  </button>');
    rows.push('</div>');

    // Veri
    rows.push('<div class="settings-section-label">' + t("settings_data_section") + '</div>');
    rows.push('<div class="settings-card settings-card-danger">');
    rows.push('  <button class="settings-row settings-row-btn settings-row-danger" id="clear-data-btn">');
    rows.push('    <span>🗑 ' + t("settings_clear_data") + '</span>');
    rows.push('  </button>');
    rows.push('</div>');

    // Footer
    rows.push('<div class="settings-footer">');
    rows.push('  <div class="settings-footer-brand">');
    rows.push('    <div class="settings-footer-logo">⚡ FeWare</div>');
    rows.push('    <div class="settings-footer-tagline">Technology for Everyone</div>');
    rows.push('  </div>');
    rows.push('  <p class="settings-footer-copy">© 2026 FeWare Technology. All Copyrights Reserved.</p>');
    rows.push('  <p class="settings-footer-ver">Rota GPS Tracker · v' + APP_VERSION + '</p>');
    rows.push('</div>');

    rows.push('</div>'); // settings-body

    view.innerHTML = rows.join("\n");
    bindSettingsEvents();
  }

  function bindSettingsEvents() {
    // Tema butonları
    document.querySelectorAll(".seg-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyTheme(this.dataset.themeVal);
        renderSettings();
      });
    });
    // Dil butonları
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { setLanguage(this.dataset.lang); });
    });
    // Sim butonu
    var simBtn = $("open-sim-btn");
    if (simBtn) simBtn.addEventListener("click", openPwModal);
    // Politika
    var privBtn = $("privacy-btn");
    if (privBtn) privBtn.addEventListener("click", function () { showToast(t("toast_privacy_soon")); });
    var termsBtn = $("terms-btn");
    if (termsBtn) termsBtn.addEventListener("click", function () { showToast(t("toast_privacy_soon")); });
    // Veri silme
    var clearBtn = $("clear-data-btn");
    if (clearBtn) clearBtn.addEventListener("click", function () {
      if (confirm(t("settings_clear_confirm"))) {
        localStorage.removeItem(STORAGE_KEY);
        renderSavedList();
        showToast(t("toast_data_cleared"));
      }
    });
  }

  // ============================================================
  // ŞIFRE MODALI
  // ============================================================
  function openPwModal() {
    $("pw-input").value = "";
    $("pw-error").hidden = true;
    $("pw-modal").hidden = false;
    setTimeout(function () { $("pw-input").focus(); }, 100);
  }

  function closePwModal() {
    $("pw-modal").hidden = true;
    $("pw-input").value = "";
    $("pw-error").hidden = true;
  }

  function checkPassword() {
    var val = $("pw-input").value;
    if (val === SIM_PASSWORD) {
      closePwModal();
      enableSimMode();
    } else {
      $("pw-error").textContent = t("pw_wrong");
      $("pw-error").hidden = false;
      $("pw-input").value = "";
      $("pw-input").focus();
      // Sallama animasyonu
      var input = $("pw-input");
      input.classList.add("shake");
      setTimeout(function () { input.classList.remove("shake"); }, 500);
    }
  }

  // ============================================================
  // SEKMELER
  // ============================================================
  function switchTab(tab) {
    document.querySelectorAll(".tab").forEach(function (t) {
      var active = t.dataset.tab === tab;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    $("view-map").classList.toggle("active",      tab === "map");
    $("view-saved").classList.toggle("active",    tab === "saved");
    $("view-settings").classList.toggle("active", tab === "settings");
    if (tab === "map") setTimeout(function () { map.invalidateSize(); }, 50);
  }

  // ============================================================
  // OLAYLAR
  // ============================================================
  function bindEvents() {
    document.querySelectorAll(".tab").forEach(function (btn) {
      btn.addEventListener("click", function () { switchTab(btn.dataset.tab); });
    });

    $("record-btn").addEventListener("click", function () {
      if (tracking) stopTracking(false); else startTracking();
    });

    $("dest-btn").addEventListener("click", function () {
      if (destination) { clearDestination(); return; }
      settingDestination = true; $("dest-banner").hidden = false;
    });

    $("dest-cancel").addEventListener("click", function () {
      settingDestination = false; $("dest-banner").hidden = true;
    });

    $("confirm-save").addEventListener("click", saveRoute);
    $("route-name").addEventListener("keydown", function (e) { if (e.key === "Enter") saveRoute(); });
    $("discard-route").addEventListener("click", closeSaveSheet);
    $("preview-close").addEventListener("click", clearPreview);

    // Şifre modalı
    $("pw-enter").addEventListener("click", checkPassword);
    $("pw-cancel").addEventListener("click", closePwModal);
    $("pw-input").addEventListener("keydown", function (e) {
      if (e.key === "Enter") checkPassword();
      if (e.key === "Escape") closePwModal();
    });
    // Modalın dışına tıklama
    $("pw-modal").addEventListener("click", function (e) {
      if (e.target === $("pw-modal")) closePwModal();
    });

    // Sistem tema değişikliği dinle
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
      if (currentTheme === "system") applyTheme("system");
    });
  }

  // ============================================================
  // BAŞLAT
  // ============================================================
  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(currentTheme);
    document.documentElement.lang = currentLang;
    initMap();
    bindEvents();
    renderSavedList();
    renderSettings();
    applyLanguage();
  });

})();
