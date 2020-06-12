import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Map from "./Map";
import PackingList from "./PackingList";
import HatchMates from "./HatchMates";
import WeatherCard from "./WeatherCard";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TripDates from "./TripDates";
import TripPageTitle from "./TripPageTitle";
import TripLoading from './TripLoading'

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
  const [state, setState] = useState({
    packingList: [],
    destinations: [],
    collaborators: [],
    startDate: "",
    endDate: "",
    title: "",
    description: "",
  });
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios
      .get(`/api/trips/${props.match.params.id}`)
      .then((res) => {
        setState({
          packingList: res.data.packing_items,
          destinations: res.data.destinations,
          collaborators: res.data.collaborators,
          startDate: res.data.trip.trip.start_date,
          endDate: res.data.trip.trip.end_date,
          title: res.data.trip.trip.title,
          description: res.data.trip.trip.description,
        });
      })
      .then(() => {
        setTimeout(() => {
          setLoaded(true);
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  return !loaded 
  ? (<TripLoading />)
  : (
    <>
      <Nav />
      {console.log("render")}
      <div class="trip-page-column">
        <div class="trip-row">
          <TripPageTitle title={state.title} description={state.description} />
          <HatchMates
            collaborators={state.collaborators}
            tripID={props.match.params.id}
          />
        </div>
        <div class="trip-row">
          <TripDates startDate={state.startDate} endDate={state.endDate} />
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
