import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Calendar from "./Calendar";
import PlaceSearch from "./PlaceSearch";
import axios from "axios";
import Card from "@material-ui/core/Card";
import "./CreateTrip.scss";
import InputField from "./InputField";
import UserSearch from "./UserSearch";
import TripLoading from "./TripLoading";

function CreateTrip() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [places, setPlaces] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submit() {
    places.forEach((place) => {
      axios.get(`/api/place_details/${place.place_id}`).then((res) => {
        console.log(
          `lat: ${res.data.result.geometry.location.lat} lng:${res.data.result.geometry.location.lng}`
        ); //title, description, places, collaborators, statedate, enddate
      });
    });
    setIsSubmitted(true);
    console.log(
      // "title desc:",
      // title,
      // description,
      // collaborators,
      startDate._d
    );
  }

  return isSubmitted ? (
    <TripLoading />
  ) : (
    <>
      <Nav />

      <Card>
        <form onSubmit={(event) => event.preventDefault()}>
          <InputField setTitle={setTitle} setDescription={setDescription} />
          <PlaceSearch setPlaces={setPlaces} />
          <UserSearch setCollaborators={setCollaborators} />
          <Calendar setStartDate={setStartDate} setEndDate={setEndDate} />
          <button type="submit" onClick={() => submit()}>
            Submit
          </button>
        </form>
      </Card>
    </>
  );
}

export default React.memo(CreateTrip);
