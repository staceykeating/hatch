import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Dashboard.scss";

// export default function Dashboard() {
//   return (
//   <div>
//     <Nav />
//     <h1>Dashboard</h1>
//   </div>
// )

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
      // arrow: true,
      className: "Photos",
    };
    return (
      <div className="Dash">
        <Nav />
        <h1>HATCHED IDEAS</h1>

        <Slider {...settings}>
          {trips.map((trip) => {
            return (
              <div class="photo">
                <img width="50%" src={trip.url} alt="trip" />
                <div class="trip-details">
                  <p class="name">
                    {trip.name}
                    <span class="edit">edit</span>
                  </p>
                  <p class="decription">{trip.description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
        <div>
          <Link to="/create-trip">
            <button class="trip-button">HATCH A TRIP</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Dashboard;
