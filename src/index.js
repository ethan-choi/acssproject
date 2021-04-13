import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home.js";
import Join from "./Join.js";
import Team from "./Team.js";
import About from "./About.js"
import galleryPage from "./galleryPage.js"
import odayGallery from "./eventGalleries/odayGallery.js"
import lunarGallery from "./eventGalleries/lunarGallery.js"
import welcomeGallery from "./eventGalleries/welcomeGallery.js"
import bbqGallery from "./eventGalleries/bbqGallery.js"
import Events from "./Events.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/about" component={About} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/gallery" component={galleryPage} />
      <Route exact path="/odayGallery" component={odayGallery} />
      <Route exact path="/lunarGallery" component={lunarGallery} />
      <Route exact path="/welcomeGallery" component={welcomeGallery} />
      <Route exact path="/bbqGallery" component={bbqGallery} />

    </Switch>
  </BrowserRouter>,
  rootElement
);