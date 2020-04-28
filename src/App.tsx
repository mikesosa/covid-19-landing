import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Spread from "./components/Spread/Spread";
import Symptoms from "./components/Symptoms/Symptoms";
import Prevention from "./components/Prevention/Prevention";
import Steps from "./components/Steps/Steps";
import HandWash from "./components/HandWash/HandWash";
import Treatment from "./components/Treatment/Treatment";
import Protect from "./components/Protect/Protect";
import MyFooter from "./components/MyFooter/MyFooter";
import TermsConditions from "./components/TermsConditions/TermsConditions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivacyPolicies from "./components/PrivacyPolcies/PrivacyPolicies";
import UseGuide from "./components/UseGuide/UseGuide";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Route exact path="/">
        <Banner />
        <main className="nk-pages">
          <About />
          <Spread />
          <Symptoms />
          <Prevention />
          <Steps />
          <HandWash />
          <Treatment />
          <Protect />
        </main>
      </Route>
      <Route path="/terminos-y-condiciones">
        <TermsConditions />
      </Route>
      <Route path="/politicas-de-privacidad">
        <PrivacyPolicies />
      </Route>
      <Route path="/guia-de-uso">
        <UseGuide />
      </Route>
      <MyFooter />
    </Router>
  );
};

export default App;
