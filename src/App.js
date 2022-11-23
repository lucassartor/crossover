import {useEffect, useState} from "react";
import Map from "./components/Map/Map";

function App() {

    const [coords, setCoords] = useState(null)

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
            <Map coords={coords} setCoords={setCoords}/>
        </>
    )
}

export default App;