import "./styles.css";
import SidebarLink from "./SidebarLink/SidebarLink";
import HomeIcon from "@mui/icons-material/HomeRounded";
import MapIcon from '@mui/icons-material/FmdGoodRounded';
import FavoriteIcon from '@mui/icons-material/FavoriteRounded';

function Sidebar(props){
    return(
        <div className="sidebar">
            <SidebarLink text="Home" setActivePage={props.setActivePage} icon={<HomeIcon/>}/>
            <SidebarLink text="Mapa" setActivePage={props.setActivePage} icon={<MapIcon/>}/>
            <SidebarLink text="Favoritos" setActivePage={props.setActivePage} icon={<FavoriteIcon/>}/>
        </div>
    );
}

export default Sidebar;
