import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Map from "./Map"
import PackingList from "./PackingList";
import HatchMates from "./HatchMates";
import axios from 'axios'

export default function Trip(props) {
  const [packingList, setPackingList] = useState([])
  const [destinations, setDestinations] = useState([])
  const [collaborators, setCollaborators] = useState([])

  useEffect(() => {
    axios.get(`/api/trips/${props.match.params.id}`)
    .then(res => {
      setPackingList(res.data.packing_items);
      setDestinations(res.data.destinations);
      setCollaborators(res.data.collaborators);
    })
    .catch(err => {
      console.log(err);
    })
  },[props])

  return (
    <>
      <Nav />
      <div class="trip-page">
        <PackingList packingList={packingList}/>
        <HatchMates collaborators={collaborators}/>
        <Map destinations={destinations}/>
      </div>
    </>
  );
}
