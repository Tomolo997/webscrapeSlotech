import MainContainer from "./Containers/MainContainer/MainContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import mainApp from "./Containers/MainApp/mainApp";
import Header from "./Containers/Header/Header";
import PostAJob from "./Containers/PostAJob/PostAJob";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={mainApp} />
          <Route path="/post-a-job" exact component={PostAJob} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
