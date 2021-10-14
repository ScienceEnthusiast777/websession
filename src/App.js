import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import { useCookies } from "react-cookies";

function App() {
  const [cookies,setCookie] = useCookies(["session"])
  function createCookie(){
    let time = new Date()
    time.setTime(time.getTime() + 30*60*1000)
    setCookie("session", "",{path:"/",})
  }
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
