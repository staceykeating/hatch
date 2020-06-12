import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Map from "./Map";
import PackingList from "./PackingList";
import HatchMates from "./HatchMates";
import WeatherCard from "./WeatherCard";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export default function Trip(props) {
  const classes = useStyles();
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
      <div class="trip-page-column">
        <div class="trip-row">
          <div class="trip-title-section">
            <h1>Euro Trip</h1>
            <h3>Jessica is getting another divorce!</h3>
          </div>
          <HatchMates
            collaborators={state.collaborators}
            tripID={props.match.params.id}
          />
        </div>
        <div class="trip-row">
          <PackingList
            packingList={state.packingList}
            tripID={props.match.params.id}
          />
          <div id="map-box">
            <Card>
              <Map destinations={state.destinations} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
