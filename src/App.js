import "./App.css";
import Main from "./Main";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookie] = useCookies(["session"]);
  useEffect(() => {
    createCookie();
  });
  function createCookie() {
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let max = 1800;
    if (hour === 23 && minutes > 30) {
      max = 3600 - (minutes * 60)
      time.setHours(0, 0, 0, 0);
    } else {
      time.setTime(time.getTime() + 30 * 60 * 1000);
    }
    let val = "expiring at: " + time.toString();
    setCookie("session", val, { path: "/", expires: time, maxAge: max });
  }
  let message = <p>Welcome to your session, {cookies.session}</p>;

  return (
    <div className="App">
      <h1>{message}</h1>
      <Main />
    </div>
  );
}

export default App;
