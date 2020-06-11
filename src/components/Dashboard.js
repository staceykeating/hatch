import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Dashboard.scss";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import EditIcon from "@material-ui/icons/Edit";
import WeatherCard from "./WeatherCard";

const trips = [
  {
    name: "Girls Euro Trip",
    url:
      "https://images.pexels.com/photos/59519/pexels-photo-59519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: `Jessica's newly single, girls trip!`,
  },
  {
    name: "Fun In the Sun",
    url:
      "https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: `Nothing but getting our tan on!`,
  },
  {
    name: "Hit The Road Jack",
    url:
      "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: `Road trip through all of the national parks!`,
  },
  {
    name: "Concrete Jungle",
    url:
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: `Weekend away in New York, shoppping, eating and sightseeing!`,
  },
];

class Dashboard extends Component {
  render() {
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
    return <WeatherCard />;
    // return (
    //   <>
    //     <Nav />
    //     <div id="dash">
    //       <div class="dashboard-label">
    //         <h2>Trip Dashboard</h2>
    //         <Button variant="outlined">Create New Trip</Button>
    //       </div>

    //       <Slider {...settings}>
    //         {trips.map((trip) => {
    //           return (
    //             <div id="slider-box">
    //               <div class="trip-info-box">
    //                 <div class="trip-info">
    //                   <div class="icon-row">
    //                     <img src="/hatch-icon-2.png" alt="trip" />
    //                     <EditIcon />
    //                   </div>
    //                   <h2>{trip.name}</h2>
    //                   <p>{trip.description}</p>
    //                   <p>Paris</p>
    //                   <p>Paris</p>
    //                   <p>Paris</p>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </Slider>
    //       <div>
    //         <Link to="/create-trip"></Link>
    //       </div>
    //     </div>
    //   </>
    // );
  }
}
export default Dashboard;
