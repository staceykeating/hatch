import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";

function PlaceSearch(props) {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      axios.get(`/api/places/${input}`).then((res) => {
        setOptions(res.data.predictions);
      });
    }, 200);
    return () => clearTimeout(delay);
  }, [input]);

  return (
    <div>
      <Autocomplete
        multiple
        filterSelectedOptions
        id="places_search"
        options={options}
        getOptionLabel={(option) => option.description}
        style={{ width: 400 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.setPlaces(newValue);
        }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              onChange={(event) => setInput(event.target.value)}
              label="*Destinations"
            />
          );
        }}
      />
    </div>
  );
}

export default PlaceSearch;
