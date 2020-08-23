import React, {Component} from "react"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Navbar, Nav, NavDropdown, Container, Form} from 'react-bootstrap';



import Home from '../Pages/Home/Home'

import {
    setLanguage,
    getLanguage,
    translate,
} from 'react-switch-lang';


const drawerWidth = 220;

const useStyles =(theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24,
        /*background:'#424242',// keep right padding when drawer closed*/
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    container: {
       // paddingTop: theme.spacing(4),
       // paddingBottom: theme.spacing(4),
        height:'100vh',
        width: '100vh',
    },
});

class Headers extends Component {

    constructor(props) {
        super(props);
        this.handleSetLanguage = this.handleSetLanguage.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
        this.state = {
            count:0,
            open:true,
            setAnchorEl:0
        }
    }

    handleDrawerOpen = () => {
        this.setState({open:true});
    }

    handleDrawerClose = () => {
        this.setState({open:false});
    }

    handleSetLanguage = (key) => () => {
        setLanguage(key);
    }

    handleProfileMenuOpen = (event) => {
        this.setState({setAnchorEl:event.currentTarget})
        //setAnchorEl(event.currentTarget);
    };

    render() {
        const {t} = this.props;

        return (
            <Navbar sticky="top" collapseOnSelect expand="md"
            className="navbar-expand-lg fixed-top scrolling-navbar navbar-dark bg-dar">
        <Container>
        <Navbar.Toggle aria-controls="responcive-navbar-nav"/>
        <Navbar.Collapse id="responcive-navbar-nav">
            <Nav className="mr-auto">
                <NavLink className="nav-link waves-effect" exact activeClassName={'wfm-active'}
                         to="/">{t('navbar.glavn')}</NavLink>
                <NavDropdown title={t('navbar.directory')} id="direct-dropdown"
                             hidden={!this.props.isAuth}>
                    <NavDropdown.Item href="/about">Приборы</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item href="/">Организации</NavDropdown.Item>
                    <NavDropdown.Item href="/">Улицы</NavDropdown.Item>
                </NavDropdown>

                <NavLink className="nav-link waves-effect" exact activeClassName={'wfm-active'}
                         to="/project">{t('navbar.project')}</NavLink>
                <NavLink className="nav-link waves-effect" exact activeClassName={'wfm-active'}
                         to="/dashboard" hidden={!this.props.isAuth}>{t('navbar.dashboard')}</NavLink>
                <NavLink className="nav-link waves-effect" exact activeClassName={'wfm-active'}
                         to="/cabinet" hidden={!this.props.isAuth}>{t('navbar.cabinet')}</NavLink>
                <NavLink className="nav-link waves-effect" exact activeClassName={'wfm-active'}
                         to={"/about"}>{t('navbar.kontact')}</NavLink>
            </Nav>

            <Form inline>
                <NavDropdown variant="success" id={"lng-dropdown"} title={getLanguage().toUpperCase()}>
                    <NavDropdown.Item onClick={this.handleSetLanguage('ru')} id={"lng_ru"}
                                      title={"RU"}>RU</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.handleSetLanguage('en')} id={"lng_en"}
                                      title={"EN"}>EN</NavDropdown.Item>
                    <NavDropdown.Item onClick={this.handleSetLanguage('pl')} id={"lng_pl"}
                                      title={"PL"}>PL</NavDropdown.Item>
                </NavDropdown>
                <NavLink to={"/auth"} hidden={this.props.isAuth}>
                    <Button className="btn-primary my-2 my-sm-0">{t('navbar.login')}</Button>
                </NavLink>
                <NavLink to={"/logout"} hidden={!this.props.isAuth}>
                    <Button className="btn-success my-2 my-sm-0">{t('navbar.logout')}</Button>
                </NavLink>
            </Form>
        </Navbar.Collapse>
    </Container>
</Navbar>

        )

    }
}

function mapStateToProps(state){
    //console.log(new Date(localStorage.getItem('expirationDate')))
    //console.log(new Date(state.auth.expData))
    return{
        isAuth: !!state.auth.token,
        stDate: new Date(state.auth.expData)
    }
}

export default connect(mapStateToProps) (translate(useStyles)(Headers));
