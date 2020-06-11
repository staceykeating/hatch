import React, {useState, useEffect, useCallback} from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent(props) {

  const [map, setMap] = useState(null);
  // const [points, setPoints] = useState([])
  const [destinations, setDestinations] = useState([]);
  

  useEffect(() => {
    setDestinations(props.destinations)
  }, [props]);

  const points = destinations.map(item => {
    return (
      { 
        lat: Number(item.destination.lat), 
        lng: Number(item.destination.lng) 
      }
    )
  });
  
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    for (let i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    map.fitBounds(bounds);
    if (points.length > 0) {
      console.log(points)
      setMap(map);
    }
  }, [points]);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

 
  const markers = destinations.map(item => {
    return(
      <Marker
        label={item.destination.name}
        position={{ lat: Number(item.destination.lat), lng: Number(item.destination.lng) }}
      />)
  });

  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyAlNz_VzfRUMEfZgsQK0noHXmRQ3YV6OqY"
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            disableDefaultUI: true,
            maxZoom: 10,
          }}
        >
          { markers }}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(MyComponent);
