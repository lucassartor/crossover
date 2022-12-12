import {useEffect, useState} from "react";
import CustomMap from "./components/Map/Map";
import Matches from "./components/Matches";
import {dividerClasses, Grid} from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles.scss";
import FavoritesPage from "./pages/FavoritesPage";
import MapPage from "./pages/MapPage";

function App() {
    const [activePage, setActivePage] = useState("Mapa");
    const [favorites, setFavorites] = useState(new Map());

    return (
        <>
            <Grid container classsName="gap-2">
                <Grid className="" item xs={3}>
                    <Sidebar setActivePage={setActivePage}/>
                </Grid>
                <Grid className="!max-h-[50vh]" item xs={9}>
                    {
                        {
                            Mapa: <MapPage favorites={favorites} setFavorites={setFavorites}/>,
                            Favoritos: <FavoritesPage favorites={favorites} setFavorites={setFavorites} setActivePage={setActivePage}/>,
                        }[activePage]
                    }
                </Grid>
            </Grid>
        </>
    );
}

export default App;
