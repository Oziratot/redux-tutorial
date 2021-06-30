import React from 'react'
import { Route, Switch, Router, Redirect } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';

const App = () => {
  return (
          <Switch>
              <Route exact path='/' component={DashboardPage}></Route>
              <Route exact path='/posts' component={PostsPage}></Route>
              <Redirect to='/' />
          </Switch>
  )
}

export default App;