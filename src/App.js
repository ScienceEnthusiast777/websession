import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import { useEffect } from "react";
import { useCookies, withCookies } from "react-cookie";

function App() {
  
  const [cookies, setCookie] = useCookies(["session"]);
  useEffect(() => {
    createCookie();
  });
  function createCookie() {
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    if(hour === 23 && minutes > 30){
      time.setHours(0,0,0,0)
    }else{
      time.setTime(time.getTime() + 30 * 60 * 1000);      
    }
    let val = 'expiring at: ' + time.toString();
    setCookie("session", val, { path: "/", expires: time });
    console.log(cookies);
  }
  let message = (<p>Welcome to your session, {cookies.session}</p>)
  return (
    <div className="App">
    {/* <withCookies><Main/></withCookies> */}
      {message}
    </div>
  );
}

export default App;
