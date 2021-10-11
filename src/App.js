import MainContainer from "./Containers/MainContainer/MainContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import mainApp from "./Containers/MainApp/mainApp";
import Header from "./Containers/Header/Header";
import PostAJob from "./Containers/PostAJob/PostAJob";
import userEmail from "./Containers/userEmail/userEmail";
function App() {
  return (
    <Switch>
      <div className="App">
        <Route path="/" exact component={mainApp} />
        <Route path="/post-a-job" exact component={PostAJob} />
        <Route path="/user-email" exact component={userEmail} />
      </div>
    </Switch>
  );
}

export default App;
