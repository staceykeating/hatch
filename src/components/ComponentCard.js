import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Collapsable from "./Collapsable";
import EditButton from "./EditButton";
import axios from "axios";
import TextField from "@material-ui/core/TextField";


export default function ComponentCard(props) {
  const [text, setText] = useState(props.text ? props.text : '');
  const [newItem, setNewItem] = useState(true)


  function updateTitle() {
  setNewItem(false)
    axios({
      method: "PATCH",
      url: `/api/components/1`,
      data: {
        title: text,
        destination_id: 1
      },
    })
    .then((res) => {
      console.log("UPDATE TITLE", res.data)
    });
  }

  function createTitle() {
    setNewItem(false)
      axios({
        method: "POST",
        url: "/api/components",
        data: {
          title: text,
          destination_id: 1
        },
      })
      .then((res) => {
        console.log("NEWTITLE", res.data)
      });
  }

  function onBlur() {
    if (!props.text && !text) {
      setNewItem(false)
    } else if (!props.text) {
      createTitle()
    } else {
      updateTitle()
    }
  }

  function keyPressed(event) {
    if (event.key === "Enter") {
      event.target.blur();
    }
  }


  const title = text ?
    (<Typography id={props.id} onKeyPress={keyPressed} onBlur={() => onBlur()}>
    <TextField
     type="text"
     value={text}
     onChange={(event) => {
       setText(event.target.value);
     }}
     />
    </Typography>) :
   (<Typography id={props.id} onKeyPress={keyPressed} onBlur={() => onBlur()}>
    <TextField
     type="text"
     label="*Add Title"
     value={text}
     onChange={(event) => {
       setText(event.target.value);
     }}
     />
    </Typography>)



return(
 <>
 <Card>
   <CardContent>
     {title}
     <EditButton>
     </EditButton>
     <Collapsable>
     </Collapsable>
   </CardContent>
 </Card>
 </>
)

}