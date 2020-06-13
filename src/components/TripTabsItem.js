import React from "react";
import classnames from "classnames";
import "./TripTabsItem.scss";

export default function TripTabsItem(props) {
  const buttonClass = classnames("tab", {
    "tab-selected": props.selected === props.name,
    "tab-not_selected": props.selected !== props.name,
  });

  return (
    <>
      <button
        class={buttonClass}
        onClick={() => {
          props.transition(props.name);
          props.setSelected(props.name);
        }}
      >
        {props.name}
      </button>
    </>
  );
}
