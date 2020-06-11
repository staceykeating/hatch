import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Map from "./Map";
import PackingList from "./PackingList";
import HatchMates from "./HatchMates";
import axios from "axios";

export default function Trip(props) {
  const [state, setState] = useState({
    packingList: [],
    destinations: [],
    collaborators: []
  })

  const [packingList, setPackingList] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/trips/${props.match.params.id}`)
      .then((res) => {
        setState({
          packingList: res.data.packing_items,
          destinations: res.data.destinations,
          collaborators: res.data.collaborators
        })
        setPackingList(res.data.packing_items);
        setDestinations(res.data.destinations);
        setCollaborators(res.data.collaborators);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  return (
    <>
      <Nav />
      {console.log('render')}
      <div class="trip-page">
        {/* <PackingList packingList={packingList} />
        <HatchMates collaborators={collaborators} /> */}
        <Map destinations={destinations} />
      </div>
    </>
  );
}
