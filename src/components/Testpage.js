import React, { useState, useEffect } from "react";
import TripTabs from "./TripTabs";
import Nav from "./Nav";
import DestinationTab from "./DestinationTab";
import useVisualMode from "../hooks/useVisualMode.js";
import Cookies from "js-cookie";
import Trip from "./Trip";
import HatchMates from './HatchMates'

export default function Testpage(props) {
//   const [modes] = useState({ MAIN: "MAIN" });

  // const { mode, transition } = useVisualMode();

  // console.log("Current Mode:", mode);

  // useEffect(() => {
  //   const user = Cookies.get("user");
  //   console.log("USER", user);
  // });

//   destinations.forEach((destination) => {
//     modes[destination.destination.name] = destination.destination;
//   });

//   return (
//     <>
//      <TripTabs destinations={destinations} transition={transition} />
//       {mode === "MAIN" && <></>}
//       {mode !== "MAIN" && <DestinationTab destination={modes[mode]} />}
//     </>
//   );
}
