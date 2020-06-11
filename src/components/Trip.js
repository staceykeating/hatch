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

  useEffect(() => {
    axios
      .get(`/api/trips/${props.match.params.id}`)
      .then((res) => {
        setState({
          packingList: res.data.packing_items,
          destinations: res.data.destinations,
          collaborators: res.data.collaborators
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);


  return (
    <>
      <Nav />
      {console.log(state)}
      <div class="trip-page">
        <PackingList packingList={state.packingList} />
        <HatchMates
          collaborators={state.collaborators}
          state={state}
<<<<<<< HEAD
          setCollaborators={setState}
          tripId={props.match.params.id}
          />
=======
          setCollaborators={setState} />
>>>>>>> component/tabs
        <Map destinations={state.destinations} />
      </div>
    </>

  );
}
