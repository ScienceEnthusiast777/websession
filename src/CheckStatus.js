import React from "react";
import { useState } from "react";
import { Cookies } from "react-cookie";

export default function CheckStatus(props) {
  const [message, setMessage] = useState("");
  function buttonHandler() {
    let myCookies = new Cookies();
    let a = myCookies.getAll("session");
    if (a.session) {
      setMessage("Your Session Is Still Active");
    } else {
      setMessage("your session has expired please refresh the page");
    }
  }
  return (
    <div>
      <button className="buttonCheck" onClick={buttonHandler}>click to check session status</button>
      <p className="message">{message}</p>
    </div>
  );
}
