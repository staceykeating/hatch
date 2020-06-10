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
import Button from "@material-ui/core/Button";

function CreateTrip() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [places, setPlaces] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submit() {
    axios({
      method: "POST",
      url: "/api/trips",
      data: {
        title: title,
        description: description,
        start_date: startDate,
        end_date: endDate,
        destinations: places,
        collaborators: collaborators,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsSubmitted(true);
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
          <Button variant="outlined" onClick={() => submit()}>
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
}

export default React.memo(CreateTrip);
