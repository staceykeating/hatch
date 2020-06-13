import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Dashboard.scss";
import Button from "@material-ui/core/Button";
import DashboardItem from './DashboardItem';
import {Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';

import axios from 'axios';

export default function Dashboard() {
  const [trips, setTrips] = useState([])

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: false,
    prevArrow: false,
    className: "Photos",
  };

  let user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;

  useEffect(() => {
      axios
      .get(`/api/users/${user.id}`)
      .then(res => {
        setTrips(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  const formattedTrips = trips.length > 0 
    ? (trips.map(trip => 
      <DashboardItem 
        trip={trip.trip.trip} 
        destinations={trip.destinations}
        setTrips={setTrips}
      />))
    : null;

  return !user
  ? (<Redirect to="/login" />)
  : (
    <>
      <Nav />
      <div id="dash">
        <div class="dashboard-label">
        </div>

        <Slider {...settings}>
          {formattedTrips}
          <DashboardItem add={true}/>
        </Slider>

      </div>
    </>
  );
}