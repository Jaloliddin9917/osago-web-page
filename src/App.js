import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Block from './pages/block-1/block';

import { Route, Switch } from "react-router-dom";
import ErrorPage from "./pages/404-page/ErrorPage";

import {ReactQueryDevtools} from 'react-query/devtools'
import BlockDetails from "./pages/block-1/block-details/block-details";
import BlockTableVersion from "./pages/block-1/block-table-version/block-table-version";
import Login from "./pages/auth/sign-in/login";
import Register from "./pages/auth/sign-up/register";


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/block-table">
          <BlockTableVersion />
        </Route>
        <Route exact path="/airlines">
          <Block />
        </Route>
        <Route exact path="/airlines/:id">
          <BlockDetails />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </Layout>
  );
};

export default App;
