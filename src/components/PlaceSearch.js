import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";
import debounce from 'lodash/debounce'

function PlaceSearch(props) {
  const [input, setInput] = useState('');
  const [options, setOptions] = useState([])
  const [value, setValue] = useState([])

  useEffect(() => {
    axios.get(`/api/places/${input}`)
    .then(res => {
      setOptions(res.data.predictions)
    })
  },[input])

  function setPlaces() {
    props.setPlaces(value)
  }

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
          setPlaces();
        }}
        renderInput={params => {
          return (
          <TextField 
            {...params} 
            onChange={event => setInput(event.target.value)}
            label="Destination" 
            variant="outlined" />
        )
        }}
      />
    </div>
  )
}

export default PlaceSearch;