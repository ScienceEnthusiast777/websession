import "./App.css";
import Main from "./Main";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function App() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(1);

  const [cookies, setCookie] = useCookies(["session"]);
  useEffect(() => {
    createCookie();
  }, [message]);
  function createCookie() {
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let max = 1800;
    if (hour === 23 && minutes > 30) {
      max = 3600 - minutes * 60;
      time.setHours(0, 0, 0, 0);
    } else {
      time.setTime(time.getTime() + 30 * 60 * 1000);
    }
    let val = "expiring at: " + time.toString();
    setCookie("session", val, { path: "/", expires: time, maxAge: max });
  }

  function refreshSession() {
    setCount(count + 1)
    setMessage("session refreshed " + count + ' time(s). ' + cookies.session);
  }

  return (
    <div className="App">
      <h1>Session Tracker</h1>
      <p>Click the button below to check the status of your session</p>
      <Main />
      <p>click the button below to refresh your sesion:</p>
      <button onClick={refreshSession}>refresh session</button>
      <p className="message">{message}</p>
    </div>
  );
}

export default App;
