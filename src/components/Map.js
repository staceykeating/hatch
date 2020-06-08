import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  const [map, setMap] = React.useState(null)

  const points = [
    { lat: 49.2827, lng: -123.1207 } // Vancouver
    // {lat: 51.0447, lng: -114.0719 },
    // {lat: 40.7128, lng: -74.0060 }
  ]

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    for (let i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

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
            maxZoom: 10
          }}
        >
          <Marker
          label={'Vancouver'}
          position={{ lat: 49.2827, lng: -123.1207 }} />
          <Marker
          label={'Calgary'}
          position={{lat: 51.0447, lng: -114.0719 }} />
          <Marker
          label={'New york'}
          position={{lat: 40.7128, lng: -74.0060 }} />
        </GoogleMap>

      </LoadScript>
    </div>
  )
}

export default React.memo(MyComponent)