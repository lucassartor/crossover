import React, {useCallback, useState} from 'react'
import {GoogleMap, MarkerF, useJsApiLoader, OverlayView} from '@react-google-maps/api';
import {parks} from "../../db/parks";
import CustomMarker from "../Marker/CustomMarker";
import mapStyle from './mapStyle';

const containerStyle = {
  //width: '720px',
  position: "relative",
  width: '100%',
  height: '720px',
  align:'center'
};

const Map = ({coords, setMatches, setCurrentPark, setIsInfoBarActive}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD9Qx5N762HtFu_ZMnUdrF0_3UyyHlcBio"
  });

  const [map, setMap] = useState(null)

  const onLoad = useCallback(map => {
    const bounds = new window.google.maps.LatLngBounds(coords);
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
      options={{styles: mapStyle, disableDefaultUI: true, zoomControl: true}}
    >
      <MarkerF position={coords} icon={"https://i.ibb.co/SVfjkt6/Frame-204-1.png"} />
      {parks.map( parkInfo =>
        <CustomMarker position={parkInfo.position} setIsInfoBarActive={setIsInfoBarActive} setCurrentPark={setCurrentPark} {...parkInfo} />
      )}
    </GoogleMap>
  ) : <>Carregando mapa...</>
}

export default Map;
