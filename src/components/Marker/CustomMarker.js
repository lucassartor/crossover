import {MarkerF} from "@react-google-maps/api";
import PlaceIcon from '@mui/icons-material/Place';

const CustomMarker = (props) => {

  // const onMarkerClick = (event) => {
  //   setMarker(true);
  //   console.log(props);
  // }

  return (
    <MarkerF
      //onClick={onMarkerClick}
      icon={"https://i.ibb.co/B4kZCtb/Frame-203.png"}
      color='#fff'
      {...props}
    />
  );
}

export default CustomMarker;
