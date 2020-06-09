import React, {useState, useEffect} from "react";
import Nav from "./Nav";
import Calendar from "./Calendar";
import PlaceSearch from "./PlaceSearch"
import axios from 'axios';

function CreateTrip() {
  const [places, setPlaces] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
      places.forEach(place => {
        axios.get(`/api/place_details/${place.place_id}`)
        .then(res => {
          console.log(`lat: ${res.data.result.geometry.location.lat} lng:${res.data.result.geometry.location.lng}`)
        })
      })
  }, [isSubmitted])

  

  return (
    <>
      <Nav />

      {/* <Calendar /> */}
      <form onSubmit={event => event.preventDefault()}>
        <PlaceSearch 
          setPlaces={ setPlaces }
        />
        <button 
          type='submit'
          onClick={ () => setIsSubmitted(true) }
          >Submit</button>
      </form>

    </>
  );
}

export default React.memo(CreateTrip);
