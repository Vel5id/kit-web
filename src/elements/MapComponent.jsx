import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  useEffect(() => {
    // Определяем, мобильное ли устройство
    const isMobile = window.innerWidth <= 768;

    // Инициализируем карту в контейнере с id "map"
    const map = L.map("map", {
      center: [45, 70],
      zoom: 4,
      scrollWheelZoom: false,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    // Определяем кастомные иконки для активных и неактивных меток
    const activeMarkerIcon = L.divIcon({
      html: `<div style="width:52px;height:52px;border-radius:50%;background: linear-gradient(white, #90C9F1);display:flex;align-items:center;justify-content:center;color:#004677;font-weight:bold;">★</div>`,
      className: "",
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });
    const inactiveMarkerIcon = L.divIcon({
      html: `<div style="width:52px;height:52px;border-radius:50%;background: white; border: 2px solid #90C9F1;display:flex;align-items:center;justify-content:center;color:#004677;font-weight:bold;">☆</div>`,
      className: "",
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });

    // Данные для городов Казахстана
    const kazakhstanCities = [
      {
        name: "KIT Astana",
        coords: [51.1694, 71.4491],
        content: "Микрорайон Самал, 111 кабинет; 2 этаж",
        region: "Tselinogradskiy",
        whatsapp: "https://wa.me/77007370535",
        instagram: "https://www.instagram.com/kitastana/",
        isActive: true,
      },
      {
        name: "KIT Almaty",
        coords: [43.273564, 76.914851],
        content: "Most IT Hub, БЦ Fortis, ул. Ходжанова, 2/2, 1 этаж",
        region: "Almaty",
        whatsapp: "https://wa.me/77079215141",
        instagram: "https://www.instagram.com/kit_almaty/",
        isActive: true,
      },
      {
        name: "KIT Karaganda",
        coords: [49.80776, 73.088504],
        content: "БЦ Премьер, проспект Нурсултана Назарбаева, 33/3",
        region: "Karaganda",
        whatsapp: "https://wa.me/77715358101",
        instagram: "https://www.instagram.com/kitkaraganda/",
        isActive: true,
      },
      {
        name: "KIT Kostanay",
        coords: [53.214496, 63.6321],
        content: "ул. Алтынсарина 117а, 2 этаж",
        region: "Kostanay",
        whatsapp: "https://wa.me/77007370535",
        instagram: "https://www.instagram.com/kitkostanay/",
        isActive: true,
      },
      {
        name: "KIT Shymkent",
        coords: [42.3417, 69.5901],
        content: "Qazan plov, ул. Торекулова, 61а",
        region: "South Kazakhstan",
        whatsapp: "https://wa.me/77778074663",
        instagram: "https://www.instagram.com/kitshymkent/",
        isActive: true,
      },
      {
        name: "KIT Semey",
        coords: [50.404976, 80.249235],
        content: "",
        region: "East Kazakhstan",
        whatsapp: "https://wa.me/77779998868",
        instagram: "https://www.instagram.com/kitsemey/",
        isActive: true,
      },
    ];

    // Данные для городов мира
    const worldCities = [
      {
        name: "KIT DUBAI",
        coords: [25.229762, 55.289311],
        content: "",
        country: "UAE",
        whatsapp: "",
        instagram: "https://www.instagram.com/kit.dubai/",
        isActive: true,
      },
      {
        name: "KIT ISTANBUL",
        coords: [41.011218, 28.978178],
        content: "",
        country: "TUR",
        whatsapp: "",
        instagram: "https://www.instagram.com/kit_istanbul/",
        isActive: true,
      },
      {
        name: "KIT GUANGZHOU",
        coords: [23.131094, 113.258989],
        content: "",
        country: "CHN",
        whatsapp: "",
        instagram: "https://www.instagram.com/kit_guangzhou/",
        isActive: true,
      },
      {
        name: "KIT LOS ANGELES",
        coords: [34.055863, -118.246139],
        content: "",
        country: "USA",
        whatsapp: "",
        instagram: "",
        isActive: true,
      },
      {
        name: "KIT HAMBURG",
        coords: [53.567103, 9.941934],
        content: "",
        country: "DEU",
        whatsapp: "",
        instagram: "",
        isActive: true,
      },
      {
        name: "KIT MOSCOW",
        coords: [55.75222, 37.61556],
        content: "",
        country: "RUS",
        whatsapp: "https://wa.me/79850355868",
        instagram: "https://www.instagram.com/kit_moscow/",
        isActive: true,
      },
      {
        name: "KIT Tashkent",
        coords: [41.2646, 69.2163],
        content: "",
        country: "UZB",
        whatsapp: "",
        instagram: "",
        isActive: true,
      },
    ];

    // Создаем группы маркеров
    const kzMarkers = L.layerGroup();
    const worldMarkers = L.layerGroup();

    // Функция создания маркера из данных города
    function createMarker(city) {
      const icon = city.isActive ? activeMarkerIcon : inactiveMarkerIcon;
      const marker = L.marker(city.coords, { icon: icon });
      marker.bindPopup(`<strong>${city.name}</strong><br/>${city.content}`);
      return marker;
    }

    // Добавляем маркеры для городов Казахстана
    kazakhstanCities.forEach((city) => {
      createMarker(city).addTo(kzMarkers);
    });

    // Добавляем маркеры для городов мира
    worldCities.forEach((city) => {
      createMarker(city).addTo(worldMarkers);
    });

    // По умолчанию показываем маркеры городов Казахстана
    kzMarkers.addTo(map);

    // Определяем обработчики кликов для переключения слоев
    const btnKz = document.getElementById("btn-kz");
    const btnWorld = document.getElementById("btn-world");

    const handleKzClick = () => {
      map.removeLayer(worldMarkers);
      if (!map.hasLayer(kzMarkers)) {
        kzMarkers.addTo(map);
      }
      map.setView([45, 70], 4);
    };

    const handleWorldClick = () => {
      map.removeLayer(kzMarkers);
      if (!map.hasLayer(worldMarkers)) {
        worldMarkers.addTo(map);
      }
      map.setView([40, 0], 2);
    };

    btnKz.addEventListener("click", handleKzClick);
    btnWorld.addEventListener("click", handleWorldClick);

    // Добавляем градиент для заливки (просто для примера)
    const svgGradient = `
      <svg width="0" height="0" style="position: absolute; z-index: -100;">
        <defs>
          <linearGradient id="country-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#004677"/>
            <stop offset="100%" stop-color="#0082DD"/>
          </linearGradient>
        </defs>
      </svg>`;
    document.body.insertAdjacentHTML("beforeend", svgGradient);

    // При размонтировании компонента – удаляем обработчики и карту
    return () => {
      btnKz.removeEventListener("click", handleKzClick);
      btnWorld.removeEventListener("click", handleWorldClick);
      map.remove();
    };
  }, []);

  return (
    <div className="map-container">
      <div className="layer-toggle">
        <button id="btn-kz">Города Казахстана</button>
        <button id="btn-world">Города мира</button>
      </div>
      <div id="map" style={{ height: "600px" }}></div>
    </div>
  );
};

export default MapComponent;
