import React, { useState } from 'react';
import TripTabs from './TripTabs'
import Nav from './Nav'
import DestinationTab from './DestinationTab'
import useVisualMode from '../hooks/useVisualMode.js'

export default function Testpage() {

  const [modes] = useState({MAIN: 'MAIN'})

  const {mode, transition} = useVisualMode();

  console.log("Current Mode:", mode)

  const propsDestinations = [
    {destination: {
      id: 1,
      name: 'Paris',
      lat: 48.8566,
      lng: -2.3522
    }},
    {destination: {
      id: 2,
      name: 'Vancouver',
      lat: 49.2827, 
      lng: -123.1207
    }}
  ]

  propsDestinations.forEach(destination => {
    modes[destination.destination.name] = destination.destination;
  })

  return (
    <>
      <Nav />
      <TripTabs destinations={propsDestinations} transition={transition}/>
      {mode === 'MAIN' && 
      <h2>You're on the main page</h2>}
      {mode !== 'MAIN' && 
      <DestinationTab destination={modes[mode]}/>}
    </>
  )
}