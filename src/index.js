import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import NavBarComponent from "./components/NavBarComponent";
import { Redirect,Route,BrowserRouter,Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PhotoPage from "./pages/PhotoPage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from './pages/SkillsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';

ReactDOM.render(
    // <App />
    <BrowserRouter>
        <NavBarComponent/>
        <Switch>
            <Route exact path="/home" component={HomePage}></Route>
            <Route exact path="/photos" component={PhotoPage}></Route>
            <Route exact path="/projects" component={ProjectPage}></Route>
            <Route exact path="/resume" component={ResumePage}></Route>
            <Route exact path="/contact" component={ContactPage}></Route>
            <Route path="*" component={HomePage}><Redirect to="/home"/></Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
