import React, {useState} from "react";
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import DeleteIcon from '@material-ui/icons/Delete';
import Textbox from './Textbox';
import PlaceSearch from './PlaceSearch';


export default function EditButton() {
  const [onEdit, setOnEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [onText, setOnText] = useState(false);

  const showButtons = () => {
    setOnEdit(true);
  };
  const showText = () => {
    console.log("text")
    setOnText(true);
  };

  const showSearch = () => {
    console.log("search")
    setOnSearch(true);
  };
  const showDelete = () => {
    setOnDelete(true);
  };

  const text = onText ?
  (  <div>
      <Textbox>
      </Textbox>
    </div>)
    :(<TextFieldsIcon onClick={() => showText()}/>)

  const search = onSearch ?
  (  <div>
      <PlaceSearch>
      </PlaceSearch>
    </div>)
    :(<TextFieldsIcon onClick={() => showSearch()}/>)


  const show = onEdit ?
  (<div>
    <SearchIcon onClick={() => showSearch()}>
    </SearchIcon>
    <TextFieldsIcon onClick={() => showText()}>
    </TextFieldsIcon>
    <DeleteIcon onClick={() => showDelete()}/>
  </div>)
  :(<CreateTwoToneIcon onClick={() => showButtons()}/>)



  return (
  <div>
     {show}
  </div>

    ?(<div>
      {text}
    </div>)
    :(<div>
      {show}
    </div>)
  )
}


