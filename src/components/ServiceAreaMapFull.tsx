'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface Location {
  city: string
  lat: number
  lng: number
  note: string
}

function FlyTo({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap()
  useEffect(() => {
    map.flyTo([lat, lng], 13, { duration: 1.2 })
  }, [lat, lng, map])
  return null
}

function redPinIcon() {
  return L.divIcon({
    className: '',
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 42" width="28" height="37">
      <defs>
        <radialGradient id="pinGrad" cx="38%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#ff5555"/>
          <stop offset="100%" stop-color="#cc0000"/>
        </radialGradient>
        <radialGradient id="shineGrad" cx="38%" cy="30%" r="45%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.55)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
        </radialGradient>
      </defs>
      <!-- Pin body -->
      <path d="M16 2C9.4 2 4 7.4 4 14c0 8 12 26 12 26s12-18 12-26C28 7.4 22.6 2 16 2z" fill="url(#pinGrad)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))"/>
      <!-- Shine overlay -->
      <path d="M16 2C9.4 2 4 7.4 4 14c0 8 12 26 12 26s12-18 12-26C28 7.4 22.6 2 16 2z" fill="url(#shineGrad)"/>
      <!-- White circle hole -->
      <circle cx="16" cy="13.5" r="5.5" fill="white" opacity="0.92"/>
    </svg>`,
    iconSize: [28, 37],
    iconAnchor: [14, 37],
    popupAnchor: [0, -38],
  })
}

export default function ServiceAreaMapFull({
  locations,
  focusCity,
}: {
  locations: Location[]
  focusCity: { lat: number; lng: number } | null
}) {
  return (
    <MapContainer
      center={[43.72, -79.52]}
      zoom={9}
      zoomControl={false}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
      {focusCity && <FlyTo lat={focusCity.lat} lng={focusCity.lng} />}
      {locations.map(({ city, lat, lng, note }) => (
        <Marker key={city} position={[lat, lng]} icon={redPinIcon()}>
          <Popup closeButton={false}>
            <div style={{ fontFamily: 'Inter, sans-serif', minWidth: '140px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#0f172a', marginBottom: '2px' }}>
                {city}
              </div>
              <div style={{ fontSize: '11px', color: '#8a6928', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                {note}
              </div>
              <div style={{ marginTop: '6px', fontSize: '11px', color: '#64748b', borderTop: '1px solid #e7e5e4', paddingTop: '5px' }}>
                Elite Roofing serves this area
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
