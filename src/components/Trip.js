import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Map from "./Map";
import PackingList from "./PackingList";
import HatchMates from "./HatchMates";
import WeatherCard from "./WeatherCard";
import axios from "axios";

export default function Trip(props) {
  const [state, setState] = useState({
    packingList: [],
    destinations: [],
    collaborators: [],
  });

  useEffect(() => {
    axios
      .get(`/api/trips/${props.match.params.id}`)
      .then((res) => {
        setState({
          packingList: res.data.packing_items,
          destinations: res.data.destinations,
          collaborators: res.data.collaborators,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  return (
    <>
      <Nav />
      {console.log("render")}
      <div class="trip-page">
        <WeatherCard />
        <PackingList 
          packingList={state.packingList} 
          tripID={props.match.params.id}
          />
        <HatchMates
          collaborators={state.collaborators}
          tripID={props.match.params.id}
        />
        <Map destinations={state.destinations} />
      </div>
    </>
  );
}
