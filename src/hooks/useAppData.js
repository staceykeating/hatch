import { useEffect, useState } from 'react';
import axios from 'axios'

export default function useAppData(trip_id) {
  const [state, setState] = useState({
    packingList: [],
    destinations: [],
    collaborators: [],
    startDate: "",
    endDate: "",
    title: "",
    description: "",
  });

  const [loaded, setLoaded] = useState(false);

  function getData() {
    return (
      axios
      .get(`/api/trips/${trip_id}`)
      .then((res) => {
        setState({
          packingList: res.data.packing_items,
          destinations: res.data.destinations,
          collaborators: res.data.collaborators,
          startDate: res.data.trip.trip.start_date,
          endDate: res.data.trip.trip.end_date,
          title: res.data.trip.trip.title,
          description: res.data.trip.trip.description
        })
      })  
      .catch((err) => { 
        console.log(err);
      })
    )
  }

  useEffect(() => {
    getData()
    .then(() => {
      setTimeout(() => {
        setLoaded(true)
      }, 2500);
    })
  },[])

  return { state, loaded, getData }
}