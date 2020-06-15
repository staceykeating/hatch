import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Dashboard.scss";
import DashboardItem from "./DashboardItem";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import beachPic from "./images/2019-03-01 07.55.49 3.jpg";

import axios from "axios";


// const images = [
//   {
//     url: 'https://images.pexels.com/photos/59519/pexels-photo-59519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     name: 'Fun In the Sun',
//     url: 'https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     description: `Nothing but getting our tan on!`
//   },
//   {
//     url: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     url: 'https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
// ]




export default function Dashboard() {
  const [trips, setTrips] = useState([]);

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

  let user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;

  useEffect(() => {
    if (user) {
      axios
        .get(`/api/users/${user.id}`)
        .then((res) => {
          setTrips(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const formattedTrips = trips.length > 0
    ? (trips.map(trip =>
      <>
        {/* <img width = "30%" src={images[0].url}/> */}
      <DashboardItem
        trip={trip.trip.trip}
        destinations={trip.destinations}
        setTrips={setTrips}
       />
        </>
        ))
    : null;

  return !user ? (
    <Redirect to="/login" />
  ) : (
    <>
      <Nav />
      <div id="dash">
        <div class="dashboard-label"></div>

        <Slider {...settings}>
          {formattedTrips}
          <img src={beachPic} />
          <DashboardItem add={true} />
        </Slider>
      </div>
    </>
  );
}
