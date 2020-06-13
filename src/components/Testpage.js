import React, { useState, useEffect } from "react";
import TripTabs from "./TripTabs";
import Nav from "./Nav";
import DestinationTab from "./DestinationTab";
import useVisualMode from "../hooks/useVisualMode.js";
import Cookies from "js-cookie";
import Trip from "./Trip";
import HatchMates from './HatchMates'

<<<<<<< HEAD
export default function Testpage() {
  // const [modes] = useState({ MAIN: "MAIN" });
=======
// export default function Testpage(props) {
//   const [modes] = useState({ MAIN: "MAIN" });
>>>>>>> 0bf10c3f6ee1466ef1754b29b73eee8d31533235

  // const { mode, transition } = useVisualMode();

  // console.log("Current Mode:", mode);

  // useEffect(() => {
  //   const user = Cookies.get("user");
  //   console.log("USER", user);
  // });

<<<<<<< HEAD
  // propsDestinations.forEach((destination) => {
  //   modes[destination.destination.name] = destination.destination;
  // });

  return (
    <>
      {/* <TripTabs destinations={propsDestinations} transition={transition} />
      {mode === "MAIN" && <></>}
      {mode !== "MAIN" && <DestinationTab destination={modes[mode]} />} */}
      <HatchMates />
    </>
  );
}
=======
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
// }
>>>>>>> 0bf10c3f6ee1466ef1754b29b73eee8d31533235
