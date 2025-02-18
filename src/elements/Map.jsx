import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import geoData from './../images/data.json';
import markerSVG from './svg/map-marker.svg'; // Импорт SVG

// Функция для стилизации GeoJSON с использованием SVG-градиента
const styleFeature = (feature) => ({
  fillColor: 'url(#myGradient)',
  weight: 2,
  opacity: 1,
  color: 'white',
  fillOpacity: 1,
});

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

// Обычная иконка (без hover)
const customIcon = L.icon({
  iconUrl: markerSVG,
  iconRetinaUrl: markerSVG,
  iconSize: [40, 65],
  iconAnchor: [20, 65],
  popupAnchor: [1, -50],
});

// Увеличенная иконка (hover-версия)
const hoverIcon = L.icon({
  iconUrl: markerSVG,
  iconRetinaUrl: markerSVG,
  iconSize: [48, 78],       // Увеличенные размеры
  iconAnchor: [24, 78],     // Точка привязки по центру нижней части
  popupAnchor: [1, -60],
});

const MyMap = () => {
  return (
    <>
      {/* Определение SVG-градиента */}
      <svg style={{ height: 0, width: 0, position: 'absolute' }}>
        <defs>
          <linearGradient id="myGradient" x1="60%" y1="70%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(219, 64.10%, 28.40%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(219, 73.30%, 52.90%)" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "20vh",
          paddingBottom: "20vh",
          backgroundColor: "white",
        }}
      >
        <MapContainer
          center={[48.505, 67.09]}
          zoom={4.75}
          style={{ height: '90vh', width: '90%', backgroundColor: "white" }}
          doubleClickZoom={false}
          scrollWheelZoom={false}
          touchZoom={false}
          zoomControl={false}
          keyboard={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            opacity={0}
            style={{ filter: 'brightness(150%) saturate(120%)' }}
          />

          <GeoJSON data={geoData} style={styleFeature} />

          {kazakhstanCities.map((city, index) => (
            <Marker
              key={index}
              position={city.coords}
              icon={customIcon}
              eventHandlers={{
                mouseover: (e) => {
                  e.target.setIcon(hoverIcon);
                },
                mouseout: (e) => {
                  e.target.setIcon(customIcon);
                },
              }}
            >
              <Popup>
                <strong>{city.name}</strong>
                <br />
                {city.content}
                <br />
                Регион: {city.region}
                <br />
                <a href={city.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <br />
                <a href={city.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default MyMap;
