import 'leaflet/dist/leaflet.css'

import { MapController } from './MapControler';
import provinces from './data/provinces.geojson?raw';
import { MapContainer, TileLayer, Marker, Circle, GeoJSON, ZoomControl } from 'react-leaflet';
import { useAtom } from 'jotai';
import { modalOpened } from './state/modal';

// Parse data
const provincesData = JSON.parse(provinces);

// Provinces styling
const provincesStyle = {
    fillColor: 'transparent',
    color: 'black',
    weight: 1,
    opacity: 0.5,
    fillOpacity: 0.5
};

// Middelburg position
const position = [51.49478418689096, 3.6100106071687725];

export function Map() {
    const [modal, setModal] = useAtom(modalOpened);

    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={true} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* <Marker
                position={position}
                title='sdfsdf'
                eventHandlers={{
                    click: (e) => {
                        setModal(true);
                        console.log('marker clicked', e)
                    },
                }}
            /> */}

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