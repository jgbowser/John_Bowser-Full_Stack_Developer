import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./Components/App/App";
import AllPosts from "./Components/AllPosts/AllPosts";
import BlogPost from "./Components/BlogPost/BlogPost";

ReactDOM.render(
  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path='/' component={App} />
  //     <Route path='/blog' component={AllPosts} />
  //     <Route path='/:slug' component={BlogPost} />
  //   </Switch>
  // </BrowserRouter>,
  <h1 style={{ textAlign: "center" }}>UNDER RECONSTRUCTION, CHECK BACK LATER</h1>,
  document.getElementById("root")
);
