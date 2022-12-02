import CustomMap from "../components/Map/Map";
import Matches from "../components/Matches";
import Infobar from "../components/Infobar/Infobar";
import {useEffect, useState} from "react";

const MapPage = (props) => {
    const [coords, setCoords] = useState(null);
    const [currentPark, setCurrentPark] = useState(null)
    const [isInfoBarActive, setIsInfoBarActive] = useState(false);
    const [matches, setMatches] = useState(false);
    const [activeMatches, setActiveMatches] = useState(new Map());

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoords({lat: latitude, lng: longitude});
        }, showError);
    }, []);

    const showError = err => {
        console.log("Erro ao pegar a geoloc");
        console.log(err.message);
    };

    return (
        <>
            <div className="map">
                <CustomMap coords={coords} setCoords={setCoords}
                           setIsInfoBarActive={setIsInfoBarActive}
                           setCurrentPark={setCurrentPark}/>
                {matches && <Matches setMatches={setMatches} setActiveMatches={setActiveMatches}
                                     activeMatches={activeMatches} currentPark={currentPark}/>}
            </div>
            <div className="infobar">
                {isInfoBarActive ?
                    <Infobar parkInfo={currentPark} setIsInfoBarActive={setIsInfoBarActive}
                             setMatches={setMatches} activeMatches={activeMatches}
                             setFavorites={props.setFavorites} favorites={props.favorites}/> : <></>}
            </div>
        </>
    );
}

export default MapPage;
