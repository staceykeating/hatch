import React from 'react';
import useVisualMode from '../hooks/useVisualMode'
import TripTabsItem from './TripTabsItem'
import './TripTabs.scss'

export default function TripTabs() {

  const { mode, transition } = useVisualMode;
  

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

  const tabs = propsDestinations.map(destination => {
    return (
    <TripTabsItem
    name={destination.destination.name}
    >
    </TripTabsItem>)
  })

  return (
    <div class="tabs-container">
      <TripTabsItem name="Main" />
      { tabs }
    </div>
  )
};