import {useEffect, useState} from "react";
import CustomMap from "./components/Map/Map";
import Matches from "./components/Matches";
import {Grid} from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles.css";
import Infobar from "./components/Infobar/Infobar";

function App() {
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
      <Grid container style={{margin: '0 auto'}}>
        <Grid item xs={2}>
          <Sidebar/>
        </Grid>
        <Grid item xs={10}>
          <div className="map">
            <CustomMap coords={coords} setCoords={setCoords} setIsInfoBarActive={setIsInfoBarActive} setCurrentPark={setCurrentPark}/>
            {matches && <Matches setMatches={setMatches} setActiveMatches={setActiveMatches} activeMatches={activeMatches} currentPark={currentPark}/>}
          </div>
          <div className="infobar">
            {isInfoBarActive ? <Infobar parkInfo={currentPark} setIsInfoBarActive={setIsInfoBarActive} setMatches={setMatches} activeMatches={activeMatches}/> : <></>}
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default App;
