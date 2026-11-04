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

function goldIcon() {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:14px;height:14px;
      background:#c9a55a;
      border-radius:50%;
      border:2.5px solid #fff;
      box-shadow:0 2px 10px rgba(0,0,0,0.55);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -12],
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
        <Marker key={city} position={[lat, lng]} icon={goldIcon()}>
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
