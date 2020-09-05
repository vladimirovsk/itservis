import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import About from "../Pages/About";
import Auth from "../Auth";
import './App.css';
import {connect} from "react-redux";
import Logout from "../Logout/Logout";
import {autoLogin} from "../../store/actions/auth";
import Home from "../Pages/Home";
import Headers from '../UI/Headers/Headers';
//import ButtomPanel from '../UI/BottomPanel/BottomPanel';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../UI/Theme'
import Project from "../Pages/Project";
import {setDefaultLanguage, setLanguageCookie, setTranslations, translate} from "react-switch-lang";
import Footer from "../UI/Footer/Footer" 
import ru from '../../i18/ru.json';
import en from '../../i18/en.json';
import pl from '../../i18/pl.json';

import * as PropTypes from "prop-types";

setTranslations({ ru, en, pl });
setDefaultLanguage('ru');
setLanguageCookie();

class App extends Component {

    componentDidMount() {
        this.props.autoLogin();
    }

    render(){
        let routes = '';
        //Если выполненна авторизация
        if (this.props.isAuth){
            routes = (
            <Switch>
                <Route exact path="/"  render={()=><Home />}/>
                <Route path="/logout" exact={true} render={() =><Logout />}/>
                <Route path="/project" exact={true} render={() =><Project />}/>
                <Route exact={true} path="/about"  render={() => <About />}/>
                <Redirect to={'/'}/>
            </Switch>
            )}
            else{
                routes =(
                    <Switch>
                        <Route exact={true} path="/"       render={()=><Home />}/>
                        <Route exact={true} path="/auth"   render={() => <Auth  />}/>
                        <Route exact={true} path="/project"  render={()=><Project />}/>
                        <Route exact={true} path="/about"  render={() => <About />}/>
                        <Redirect to={'/auth'}/>
                    </Switch>
                )
            }


    return (
        <ThemeProvider theme={theme}>
                <Headers />
                {routes}
               <Footer /> 
            
        </ThemeProvider>
    )
    }
}

App.propTypes = {
    t: PropTypes.func.isRequired,
};

function mapStateToProps(state){
    return{
        isAuth: !!state.auth.token
    }
}

function mapDispatchToProps(dispatch){
    return {
        autoLogin: () => dispatch(autoLogin())
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(translate(App)))



