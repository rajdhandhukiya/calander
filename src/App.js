import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ComHeader from "./Com";
import ComMain from "./ComMain";
import NavbarCom from "./Navbar";
import Calander from "./Calander";
import FormComponent from "./Form";
import StopWatch from "./StopWatch";
import TableCom  from "./Table";

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
          <Route path="/StopWatch" component={StopWatch} />
          <Route path="/TableCom" component={TableCom} />
        </Switch>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
