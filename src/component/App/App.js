import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import About from "../Pages/About";
import AlertState from '../../context/alert/alertState'
import './App.css';
import Home from "../Pages/Home";
import Headers from '../UI/Headers/Headers';
import Project from "../Pages/Project";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../UI/Theme'
import {setDefaultLanguage, setLanguageCookie, setTranslations, translate} from "react-switch-lang";
import ru from '../../i18/ru.json';
import en from '../../i18/en.json';
import pl from '../../i18/pl.json';
import "animate.css/animate.min.css";

import * as PropTypes from "prop-types";
import Footer from "../UI/Footer/Footer";

setTranslations({ ru, en, pl });
setDefaultLanguage('en');
setLanguageCookie();

class App extends Component {
    render(){
        let routes = (
            <Switch>
                <Route exact={true} path="/"       render={()=><Home />}/>
                <Route exact={true} path="/project"  render={()=><Project />}/>
                <Route exact={true} path="/about"  render={() => <About />}/>
                <Redirect to={'/'}/>
            </Switch>
        )

    return (
        <AlertState>
        <ThemeProvider theme={theme}>
                <Headers />
                {routes}
                <Footer/>
        </ThemeProvider>
        </AlertState>
    )
    }
}

App.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withRouter(translate(App))



