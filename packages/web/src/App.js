import { useEffect, useState } from "react";
import CustomMap from "./components/Map/Map";
import Matches from "./components/Matches";
import { dividerClasses, Grid } from "@mui/material";
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
      <Grid container classsName="gap-2">
        <Grid className="" item xs={3}>
          <Sidebar setActivePage={setActivePage} />
        </Grid>
        <Grid className="!max-h-[50vh]" item xs={9}>
          {
            {
              Home: <>Home</>,
              Mapa: (
                <MapPage favorites={favorites} setFavorites={setFavorites} />
              ),
              Favoritos: (
                <>
                  {favorites.length > 0 ? (
                    <FavoritesPage
                      favorites={favorites}
                      setFavorites={setFavorites}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full m-10">
                      <img
                        className="mb-4"
                        src="images/empty-favorite.svg"
                        alt="empty"
                      />
                      <h1 className="text-l font-bold text-white mb-2">
                        Você não tem nenhuma quadra favorita ainda...
                      </h1>
                      <p className="text-sm text-[#BDBDBD] mb-5">
                        Explore quadras e favorite as suas preferidas!
                      </p>
                      <button className="py-2 px-10 text-[#1C1E1F] bg-[#E8FC0F]">
                        Mapa
                      </button>
                    </div>
                  )}
                </>
              ),
            }[activePage]
          }
        </Grid>
      </Grid>
    </>
  );
}

export default App;
