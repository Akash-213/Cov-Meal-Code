import "./App.css";
import Header from "../src/components/Header/header";
import Footer from "../src/components/Footer/footer";

import PartnerForm from "./components/PartnerForm/partnerForm";
import PartnerList from "./components/PartnerList/partnerList";

import { Route, Switch, Redirect } from "react-router-dom";
import Landing from "./components/Pages/landing";
import Developer from "./components/Pages/developer";
import otherLink from "./components/Pages/otherLink";
import Utils from "./components/Pages/Utils/utils";
import Feedback from "./components/Pages/Feedback/feedback";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/partnerForm" component={PartnerForm} />
        <Route path="/partnerList" component={PartnerList} />
        <Route path="/developer" component={Developer} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/utils" component={Utils} />
        <Route path="/links" component={otherLink} />
        <Route path="/" exact component={Landing} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

// landing page che links takaychet

export default App;
