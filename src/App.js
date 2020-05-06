import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from '../src/components/layout/layout'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/about">
            <h1>about</h1>
          </Route>
          <Route path="/users">
            <h1>users</h1>
          </Route>
          <Route path="/">
            <h1>home</h1>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
