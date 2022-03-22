import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Calander from "./Calander";
import CalanderDemo from "./CalanderDemo";
import ComHeader from "./Com";
import ComMain from "./ComMain";
import FormComponent from "./Form";
import NavbarCom from "./Navbar";
import StopWatch from "./StopWatch";

function App() {
  return (
    <>
      <Router>
        <NavbarCom />
        <Switch>
          <Route exact path="/" component={ComHeader} />
          <Route path="/ComMain" component={ComMain} />
          <Route path="/FormCom" component={FormComponent} />
          <Route path="/Calander" component={Calander} />
          <Route path="/CalanderDemo" component={CalanderDemo} />
          <Route path="/StopWatch" component={StopWatch} />
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
