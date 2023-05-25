import 'leaflet/dist/leaflet.css'

import { MapController } from './MapControler';
import MarkerClusterGroup from 'react-leaflet-cluster'
import features from './data/features_by_cords.json';

import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import { useAtom } from 'jotai';
import { modalData, modalOpened } from './state/modal';

// Middelburg position
const middelburg = [51.49478418689096, 3.6100106071687725];

export function Map() {
    const [modal, setModal] = useAtom(modalOpened);
    const [data, setData] = useAtom(modalData);

    return (
        <MapContainer center={middelburg} zoom={12} scrollWheelZoom={true} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup
                chunkedLoading
                singleMarkerMode
                removeOutsideVisibleBounds
                maxClusterRadius={64}
            >
                {
                    Object.keys(features).map((key) => {
                        const position = key.split(':').map((value) => parseFloat(value));
                        const featuresPerCoordinate = features[key];

                        return (
                            <Marker
                                key={key}
                                bubblingMouseEvents={true}
                                position={position}
                                eventHandlers={{
                                    click: (e) => {
                                        setModal(true)
                                        setData(featuresPerCoordinate)
                                    }
                                }}
                            />
                        )


                    })
                }

            </MarkerClusterGroup>

            <ZoomControl position="bottomleft" />

            <MapController />
        </MapContainer>
    )
}