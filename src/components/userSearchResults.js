import React from "react";
import classnames from "classnames";

export default function userSearchResults(props) {
  const userInfo = classnames("user_info");

  return (
    <article className="user">
      <div className={userInfo}>
        <div className="user_name">{props.userName}</div>
        <div className="user_email">{props.userEmail}</div>
      </div>
    </article>
  );
}