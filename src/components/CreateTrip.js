import React, { useState } from "react";
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
import classnames from 'classnames'

function CreateTrip() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [places, setPlaces] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function submit() {
    if (title && description && places) {
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
        }
      })
      setIsSubmitted(true)
    } else {
      setError(true)
    }
  }

   const errorClass = classnames('error-message', {
      'error-message--active': error,
      'error-message--disabled': error === false
    })

  return isSubmitted ? (
    <TripLoading />
  ) : (
    <>
      <Nav />
      <Card>
        <span class={ errorClass }>* Missing mandatory fields</span>
        <form onSubmit={event => event.preventDefault()}>
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
