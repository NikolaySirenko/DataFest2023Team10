import 'leaflet/dist/leaflet.css'

import provinces from './data/provinces.geojson?raw'
import townships from './data/townships.geojson?raw'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapController } from './MapControler';

const provinces_data = JSON.parse(provinces);
const townships_data = JSON.parse(townships);

// Middelburg position
const position = [51.49478418689096, 3.6100106071687725]

export function Map() {
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Middelburg
                </Popup>
            </Marker>

            <MapController />
        </MapContainer>
    )
}