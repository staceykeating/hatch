import React from "react";
import classnames from "classnames";
import "./TripTabsItem.scss";

export default function TripTabsItem(props) {
  const buttonClass = classnames("tab", {
    "tab-selected": props.selected === props.id,
    "tab-not_selected": props.selected !== props.id,
  });

  return (
    <>
    {console.log()}
      <button
        class={buttonClass}
        onClick={() => {
          if (props.id === "MAIN") {
            props.transition("MAIN");
          } else {
            props.transition(props.name);
          }
          props.setSelected(props.id)
        }}
      >
        {props.name}
      </button>
    </>
  );
}
