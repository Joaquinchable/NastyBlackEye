import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./scss/Estilos.css"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import RegisterLogin from './components/Registro/index';
import Inicio from "./components/Pages/Inicio";
import Home from "./components/Pages/Home";
import Blog from "./components/Pages/Blog";
import Exposiciones from "./components/Pages/Exposiciones";
import Biofoto from "./components/Pages/Biofoto";

import SignIn from "./components/Registro/SignIn";
import SignUp from "./components/Registro/SignUp";
import HeaderInicio from "./components/Layout/HeaderInicio";
//import HeaderHome from "./components/Layout/HeaderHome";
import Footer from "./components/Layout/Footer";
import Reducer from './components/reducers';
import UserDashboard from "./components/Usuario/index";



const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);



const App = () => (
  <Provider store={createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>

    <BrowserRouter basename="/Inicio">

      <div>




        <Switch>

          <Redirect from="/Inicio" to="/home" />
          <Route exact path="/" component={Inicio} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/exposiciones" component={Exposiciones} />
          <Route exact path="/biofoto" component={Biofoto} />
          <Route exact path="/user/dashboard" component={UserDashboard} />

          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/RegisterLogin" component={RegisterLogin} />

        </Switch>
        <Footer />

      </div>
    </BrowserRouter >
  </Provider >

);

ReactDOM.render(<App />, document.getElementById("root"));
