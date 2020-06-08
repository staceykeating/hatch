import React from 'react'
import Nav from './Nav'
import Calendar from './Calendar'
import Textbox from './Textbox'


export default function CreateTrip() {
  return (
    <div>
      <Nav />
      <Calendar></Calendar>
      <Textbox></Textbox>
    </div>
  );
}