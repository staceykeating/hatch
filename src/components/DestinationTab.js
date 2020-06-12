import React, { useState } from 'react';
import WeatherCard from './WeatherCard'

export default function Destination(props) {
  return (
    <>
      <WeatherCard destination={props.destination}/>
      <div>You are on the {props.destination.name} page</div>
    </>
  )
}