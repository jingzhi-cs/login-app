import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;