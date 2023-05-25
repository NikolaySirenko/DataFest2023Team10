import { useEffect, useState } from 'react';
import { GeoJSON, useMap } from 'react-leaflet';

import provinces from './data/provinces.geojson?raw'
import townships from './data/townships.geojson?raw'

// Parse data
const provinces_data = JSON.parse(provinces);
const townships_data = JSON.parse(townships);

export function MapController() {
    const [mode, setMode] = useState('townships');
    const map = useMap();

    useEffect(() => {
        map.on('zoomend', (e) => {
            const zoomLevel = e.target.getZoom();
            console.log(zoomLevel)

            if (zoomLevel < 10) {
                setMode('provinces')
            } else {
                setMode('townships')
            }
        })

    }, []);

    useEffect(() => {
        console.log(mode)
    }, [mode])

    return (
        <>
            <GeoJSON data={mode === 'townships' ? townships_data : provinces_data} />
            {/* {
                mode === 'townships'
                    ? <GeoJSON data={provinces_data}  />
                    : <GeoJSON data={townships_data} />
            } */}
        </>
    )
}