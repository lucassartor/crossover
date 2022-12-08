import {useEffect, useState} from "react";
import CustomMap from "./components/Map/Map";
import Matches from "./components/Matches";
import {Grid} from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles.scss";
import Infobar from "./components/Infobar/Infobar";
import FavoritesPage from "./pages/FavoritesPage";
import MapPage from "./pages/MapPage";

function App() {
    const [activePage, setActivePage] = useState("Home");
    const [favorites, setFavorites] = useState([]);

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
                            "Mapa": <MapPage favorites={favorites} setFavorites={setFavorites}/>,
                            "Favoritos":
                                <>
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
