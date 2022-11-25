import React, {useCallback, useState} from 'react'
import {GoogleMap, MarkerF, useJsApiLoader} from '@react-google-maps/api';
import {markers} from "../../db/markers";
import CustomMarker from "../Marker/CustomMarker";

const containerStyle = {
    //width: '720px',
    width: '100%',
    height: '480px',
    align:'center'
};

const Map = ({coords}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD9Qx5N762HtFu_ZMnUdrF0_3UyyHlcBio"
    });

    const [map, setMap] = useState(null)

    const onLoad = useCallback(map => {
        const bounds = new window.google.maps.LatLngBounds(coords);
        console.log(coords);

        map.fitBounds(bounds);

        setMap(map)
    }, [coords])

    const onUnmount = useCallback(map => {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={coords}
            zoom={2}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{disableDefaultUI: true, zoomControl: true}}
        >
            <MarkerF position={coords} label={"Voce"} icon={""} />
            {markers.map( markerInfo =>
                <CustomMarker position={markerInfo.position} {...markerInfo} />
            )}
        </GoogleMap>
    ) : <>Carregando mapa...</>
}

export default Map;
