import {MarkerF} from "@react-google-maps/api";

const CustomMarker = (props) => {

    const onMarkerClick = (event) => {
        // Colocar logica de abrir a quadra num tab
        console.log(props);
    }

    return (
        <MarkerF
            onClick={onMarkerClick}
            {...props}
        />
    );
}

export default CustomMarker;
