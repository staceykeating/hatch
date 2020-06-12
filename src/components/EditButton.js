import React, {useState} from "react";
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import Textbox from './Textbox';
import PlaceSearch from './PlaceSearch';
import axios from 'axios';


export default function EditButton(props) {
  // const [onEdit, setOnEdit] = useState(false);
  // const [onDelete, setOnDelete] = useState(false);
  // const [onSearch, setOnSearch] = useState(false);
  // const [onText, setOnText] = useState(false);
  const [mode, setMode] = useState("EDIT");


  const onDelete = () => {
      axios({
        method: "DELETE",
        url: `/api/components/1`,
        data: {
          destination_id : 1
        },
      }).then((res) => {
        console.log("THIS IS THEN",res.data)
        //after add props.setData
    })
    .catch((res) =>{
      console.log("THIS IS CATCH", res)
    })
  };

  const text = (
  <div>
    <Textbox>
    </Textbox>
  </div>)

  const search = (
  <div>
    <PlaceSearch>
    </PlaceSearch>
  </div>)



  return (
    <div>
      {mode === "EDIT" && <CreateTwoToneIcon
      onClick={() => setMode("SHOW")}/>}
      {mode === "SHOW" && <TextFieldsIcon
      onClick={() => setMode("TEXT")}/>}
      {mode === "TEXT" && text &&
       <CloseIcon
       onClick={() => setMode("EDIT")}/>}
      {mode === "SHOW" && <SearchIcon
      onClick={() => setMode("SEARCH")} />}
      {mode === "SEARCH" && search &&
       <CloseIcon
       onClick={() => setMode("EDIT")}/>}
      {mode === "SHOW" && <DeleteIcon
      onClick={() => setMode("DELETE")}/>}
      {mode === "DELETE" && onDelete()}
      {mode === "SHOW" && <CloseIcon
      onClick={() => setMode("EDIT")}/>}

    </div>
  )
}


