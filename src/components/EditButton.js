import React, { useState } from "react";
import useAppData from "../hooks/useAppData.js";
import CreateTwoToneIcon from "@material-ui/icons/CreateTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from "@material-ui/icons/Close";
import Textbox from "./Textbox";
import PlaceSearch from "./PlaceSearch";
import axios from "axios";
import { Button, Typography } from "@material-ui/core";

export default function EditButton(props) {
  // const [onEdit, setOnEdit] = useState(false);
  // const [onDelete, setOnDelete] = useState(false);
  // const [onSearch, setOnSearch] = useState(false);
  // const [onText, setOnText] = useState(false);
  const [mode, setMode] = useState("EDIT");

  const onDelete = () => {
    axios({
      method: "DELETE",
      url: `/api/components/${props.component_id}`,
      data: {
        destination_id: props.destination_id,
      },
    })
      .then((res) => {
        props.setComponents(res.data);
        setMode("EDIT");
        console.log("DELETE:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const text = (
    <div>
      <Textbox></Textbox>
      <CloseIcon onClick={() => setMode("EDIT")} />
    </div>
  );

  const search = (
    <div>
      <PlaceSearch></PlaceSearch>
      <CloseIcon onClick={() => setMode("EDIT")} />
    </div>
  );

  return (
    <div>
      {mode === "EDIT" && <CreateTwoToneIcon onClick={() => setMode("SHOW")} />}
      {mode === "SHOW" && <TextFieldsIcon onClick={() => setMode("TEXT")} />}
      {mode === "TEXT" && text}
      {mode === "SHOW" && <SearchIcon onClick={() => setMode("SEARCH")} />}
      {mode === "SEARCH" && search}
      {mode === "SHOW" && (
        <DeleteIcon onClick={() => setMode("VERIFYDELETING")} />
      )}
      {mode === "SHOW" && <CloseIcon onClick={() => setMode("EDIT")} />}
      {mode === "VERIFYDELETING" && (
        <Typography>
          Are you sure you want to delete?
          <Button onClick={() => setMode("EDIT")}>No</Button>
          <Button onClick={() => onDelete()}>Yes</Button>
        </Typography>
      )}
    </div>
  );
}
