import React, { useState, useEffect } from "react";
import useVisualMode from "../hooks/useVisualMode.js";
import axios from "axios";
import Nav from "./Nav";
import Map from "./Map";
import PackingList from "./PackingList";
import HatchMates from "./HatchMates";
import WeatherCard from "./WeatherCard";
import Card from "@material-ui/core/Card";
import TripDates from "./TripDates";
import TripPageTitle from "./TripPageTitle";
import TripLoading from "./TripLoading";
import TripTabs from "./TripTabs";
import Cookies from "js-cookie";
import DestinationTab from "./DestinationTab";
import { Redirect } from "react-router-dom";
import TestPage from "./Testpage";
import useAppData from "../hooks/useAppData.js";

export default function Trip(props) {
  const [modes] = useState({ MAIN: "MAIN" });

  const { mode, transition } = useVisualMode();

  const { state, setState } = useAppData();

  const [loaded, setLoaded] = useState(false);

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
          description: res.data.trip.trip.description
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

  const user = Cookies.get("user");

  state.destinations.forEach((destination) => {
    modes[destination.destination.destination.name] = destination;
  });

  return !user ? (
    <Redirect to="/login" />
  ) : !loaded ? (
    <TripLoading />
  ) : (
    <>
      <Nav />
      <TripTabs destinations={state.destinations} transition={transition} />
      {mode === "MAIN" && (
        <>
          <div class="trip-page-column">
            <div class="trip-title-row">
              <TripPageTitle
                title={state.title}
                description={state.description}
              />
              <HatchMates
                collaborators={state.collaborators}
                tripID={props.match.params.id}
              />
            </div>
            <div class="trip-date">
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
      )}
      {Object.keys(modes).map(dest => {
        if (mode === dest && mode !== 'MAIN') {
          return <DestinationTab destination={modes[dest].destination} components={modes[dest].components} />
        }
        return null;
      })}
    </>
  );
}
