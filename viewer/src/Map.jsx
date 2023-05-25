import 'leaflet/dist/leaflet.css'

import provinces from './data/provinces.geojson?raw'

import { MapContainer, TileLayer, Marker, Popup, GeoJSON, ZoomControl } from 'react-leaflet';
import { MapController } from './MapControler';
import { Layer, Geometry } from 'leaflet';

// Parse data
const provincesData = JSON.parse(provinces);

// Provinces styling
const provincesStyle = {
    fillColor: 'transparent',
    color: 'black',
    weight: 1,
    opacity: 0.5,
    fillOpacity: 0.5
}

// Middelburg position
const position = [51.49478418689096, 3.6100106071687725]

export function Map() {
    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={true} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={position}>
                <Popup>
                    Middelburg
                </Popup>
            </Marker>

            <ZoomControl position="bottomleft" />

            <GeoJSON
                data={provincesData}
                style={provincesStyle}
                onEachFeature={(feature, layer) => {
                    layer.on('click', (e) => {
                        console.log(e)
                    })
                }}
            />

            <MapController />
        </MapContainer>
    )
}