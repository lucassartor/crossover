import {useEffect, useState} from "react";
import CustomMap from "./components/Map/Map";
import Matches from "./components/Matches";
import {Grid} from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles.css";
import Infobar from "./components/Infobar/Infobar";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
    const [activePage, setActivePage] = useState("Home");
    const [coords, setCoords] = useState(null);
    const [currentPark, setCurrentPark] = useState(null)
    const [isInfoBarActive, setIsInfoBarActive] = useState(false);
    const [matches, setMatches] = useState(false);
    const [activeMatches, setActiveMatches] = useState(new Map());
    const [favorites, setFavorites] = useState([]);

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
            <Grid container style={{margin: '0 auto'}}>
                <Grid item xs={2}>
                    <Sidebar setActivePage={setActivePage}/>
                </Grid>
                <Grid item xs={10}>
                    {
                        {
                            "Home": <>Home</>,
                            "Mapa":
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
                                                     setFavorites={setFavorites} favorites={favorites}/> : <></>}
                                    </div>
                                </>,
                            "Favoritos": <>
                                {favorites.length > 0
                                    ? <FavoritesPage favorites={favorites} setFavorites={setFavorites}/>
                                    : <>Voce nao possui quadras favoritadas!</>
                                }
                            </>
                        }[activePage]
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default App;
