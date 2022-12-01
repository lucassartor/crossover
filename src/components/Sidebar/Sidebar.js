import "./styles.css";
import SidebarLink from "./SidebarLink/SidebarLink";
import HomeIcon from "@mui/icons-material/HomeRounded";
import MapIcon from '@mui/icons-material/FmdGoodRounded';
import FavoriteIcon from '@mui/icons-material/FavoriteRounded';
import SettingsIcon from '@mui/icons-material/TuneRounded';

function Sidebar(){
    return(
        <div className="sidebar">
            <SidebarLink text="Home" icon={<HomeIcon/>}/>
            <SidebarLink text="Mapa" icon={<MapIcon/>}/>
            <SidebarLink text="Favoritos" icon={<FavoriteIcon/>}/>
            <SidebarLink text="Configuracoes" icon={<SettingsIcon/>}/>
        </div>
    );
}

export default Sidebar;
