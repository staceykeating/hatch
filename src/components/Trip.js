import React, { useState } from "react";
import useVisualMode from "../hooks/useVisualMode.js";
import Nav from "./Nav";
import Map from "./Map";
import PackingList from "./PackingList";
import HatchMates from "./HatchMates";
import Card from "@material-ui/core/Card";
import TripPageTitle from "./TripPageTitle";
import TripLoading from "./TripLoading";
import TripTabs from "./TripTabs";
import Cookies from "js-cookie";
import DestinationTab from "./DestinationTab";
import { Redirect } from "react-router-dom";
import useAppData from "../hooks/useAppData.js";

export default function Trip(props) {
  const { state, loaded, getData } = useAppData(props.match.params.id);
  const [modes] = useState({ MAIN: "MAIN" });

  const { mode, transition } = useVisualMode("MAIN");

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
      <TripTabs
        title={state.title}
        destinations={state.destinations}
        transition={transition}
      />
      {mode === "MAIN" && (
        <>
          <div class="trip-page-column">
            <div class="trip-title-row">
              <TripPageTitle
                title={state.title}
                startDate={state.startDate}
                endDate={state.endDate}
                description={state.description}
              />
              <HatchMates
                getData={getData}
                collaborators={state.collaborators}
                tripID={props.match.params.id}
              />
            </div>
            <div class="trip-date"></div>
            <div class="trip-row">
              <PackingList
                getData={getData}
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
      {Object.keys(modes).map((dest) => {
        if (mode === dest && mode !== "MAIN") {
          return (
            <DestinationTab
              key={dest}
              getData={getData}
              destination={modes[dest].destination}
              components={modes[dest].components}
            />
          );
        }
        return null;
      })}
    </>
  );
}
