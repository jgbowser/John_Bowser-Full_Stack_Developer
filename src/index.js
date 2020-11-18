import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css';
import App from './Components/App/App';
import AllPosts from './Components/AllPosts/AllPosts'
import BlogPost from './Components/BlogPost/BlogPost'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/blog' component={AllPosts} />
      <Route path='/:slug' component={BlogPost} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


