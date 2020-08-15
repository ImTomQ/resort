import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     main: () => {
//       return <Home />;
//     },
//   },
//   {
//     path: "/rooms",
//     exact: true,
//     main: () => {
//       return <Rooms />;
//     },
//   },
//   {
//     path: "/rooms/:slug",
//     exact: true,
//     main: () => {
//       return <SingleRoom />;
//     },
//   },
//   {
//     main: () => {
//       return <Error />;
//     },
//   },
// ];

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
        {/* {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))} */}
      </Switch>
    </>
  );
}

export default App;
