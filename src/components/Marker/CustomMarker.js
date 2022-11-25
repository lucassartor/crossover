import {MarkerF} from "@react-google-maps/api";

const CustomMarker = (props) => {

  // const onMarkerClick = (event) => {
  //   setMarker(true);
  //   console.log(props);
  // }

  return (
    <MarkerF
      //onClick={onMarkerClick}
      {...props}
    />
  );
}

export default CustomMarker;
