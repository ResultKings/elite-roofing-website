'use client'

import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

function GestureHandler() {
  const map = useMap()
  const [showHint, setShowHint] = useState(false)
  const hintTimer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: coarse)').matches) return

    const container = map.getContainer()
    map.dragging.disable()

    const onTouchStart = (e: TouchEvent) => {
      clearTimeout(hintTimer.current)
      if (e.touches.length >= 2) {
        map.dragging.enable()
      } else {
        map.dragging.disable()
        setShowHint(true)
        hintTimer.current = setTimeout(() => setShowHint(false), 1500)
      }
    }
    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) map.dragging.disable()
    }

    container.addEventListener('touchstart', onTouchStart, { passive: true })
    container.addEventListener('touchend', onTouchEnd, { passive: true })
    container.addEventListener('touchcancel', onTouchEnd, { passive: true })
    return () => {
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchend', onTouchEnd)
      container.removeEventListener('touchcancel', onTouchEnd)
    }
  }, [map])

  if (!showHint) return null
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
      <div style={{ background: 'rgba(0,0,0,0.65)', color: 'white', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 600, padding: '10px 20px', borderRadius: '8px' }}>
        Use two fingers to move the map
      </div>
    </div>
  )
}

// Fix Leaflet's default marker icons when bundled with webpack/Next.js
function fixLeafletIcons() {
  delete (L.Icon.Default.prototype as any)._getIconUrl
  L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  })
}

// Gold dot marker matching the brand
function goldIcon() {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:14px;height:14px;
      background:#D0000F;
      border-radius:50%;
      border:2.5px solid #fff;
      box-shadow:0 2px 10px rgba(0,0,0,0.55);
    "></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -10],
  })
}

const SERVICE_AREAS = [
  { name: 'Toronto',     lat: 43.6532, lng: -79.3832, region: 'Greater Toronto Area' },
  { name: 'Mississauga', lat: 43.5890, lng: -79.6441, region: 'Peel Region' },
  { name: 'Brampton',    lat: 43.7315, lng: -79.7624, region: 'Peel Region' },
  { name: 'Vaughan',     lat: 43.8361, lng: -79.5000, region: 'York Region' },
  { name: 'Markham',     lat: 43.8561, lng: -79.3370, region: 'York Region' },
  { name: 'Oakville',    lat: 43.4675, lng: -79.6877, region: 'Halton Region' },
  { name: 'Burlington',  lat: 43.3255, lng: -79.7990, region: 'Halton Region' },
  { name: 'Hamilton',    lat: 43.2557, lng: -79.8711, region: 'City of Hamilton' },
]

export default function ServiceAreaMap() {
  const mapKey = useRef(`service-area-map-${Math.random()}`)

  useEffect(() => {
    fixLeafletIcons()
  }, [])

  return (
    <MapContainer
      key={mapKey.current}
      center={[43.58, -79.60]}
      zoom={10}
      zoomControl={false}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', background: '#1a2035' }}
    >
      {/* CartoDB dark theme, matches the navy brand palette */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      <GestureHandler />
      {/* Zoom controls in bottom-right corner */}
      <ZoomControl position="bottomright" />

      {SERVICE_AREAS.map(({ name, lat, lng, region }) => (
        <Marker key={name} position={[lat, lng]} icon={goldIcon()}>
          <Popup
            className="elite-popup"
            closeButton={false}
          >
            <div style={{ fontFamily: 'Inter, sans-serif', minWidth: '140px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#0f172a', marginBottom: '2px' }}>
                {name}
              </div>
              <div style={{ fontSize: '11px', color: '#8a6928', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                {region}
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
