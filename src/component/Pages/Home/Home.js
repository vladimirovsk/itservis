import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Card, CardContent, CardMedia, CardHeader, Avatar, CardActions, IconButton} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {translate} from 'react-switch-lang';
import imgDatabase from '../Home/img/database.jpg';
import imgServer from '../Home/img/servers.jpg';
import imgRest from '../Home/img/REST.jpeg';
import imgWebDev from '../Home/img/webdev.jpg';
import imgDelphi from '../Home/img/delphi.png';
import imgNodeJs from '../Home/img/nodejs.png';
import imgReactJs from '../Home/img/react.png';
import imgSql from '../Home/img/sql.png';
import imgHtml from '../Home/img/html.png';
import img1C from '../Home/img/1c.jpeg';
import imgVm from '../Home/img/vm.jpeg';
import imgArduino from '../Home/img/arduino2.png';
import laptopItservis1 from '../Home/img/laptopItservis.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from '@material-ui/core/Collapse';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CheckIcon from '@material-ui/icons/Check';
//import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary,
        flexGrow: 1,
      },
      mainFuturePost:{
        position: "relative",
        //position: 'static',
        //top: '0px',
        //zIndex: '-1000',
        //marginTop: theme.spacing(6),
        color: theme.palette.common.white,
        marginBottom: theme.spacing(6),
        backgroundImage: `url(${laptopItservis1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
      overlay:{
        position:"absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0, 
        backgroundOverlay: "rgba(0,0,0,.9)"
     },
     mainFuturePostContetnt:{
         MarginLeftleft:'-500px',
        position:"relative",
        padding:theme.spacing(6),
        textShadow: '1px 1px 2px black, 0 0 1em black',
        marginTop: theme.spacing(4),
       // opacity:0
        //transition: 'all 0.8s easy 0s',
        //marginLeft: theme.spacing(-20)
      },
      mainContent:{
        backgroundColor: theme.palette.primary
      },

      mainButtons:{
          backgroundColor:theme.palette.secondary

      },

      cardMedia:{
        paddingTop: "56.25%",
        //borderRadius: theme.spacing(2), // 16px   
        //boxShadow: '0px 4px 4px rgba(34, 35, 58, 0.2)',
          //position: 'relative'
      },
      
      CardContent:{
            margin:'auto',
            maxWidth: 500,
            //paddingBottom: theme.spacing(2),
            flexGrow:1,

            //heigh:500
      },

    CardContentSkills:{
        //margin:'auto',
        //maxWidth: 500,
        //paddingBottom: theme.spacing(2),
        //flexGrow:1,
        margin: '10px',
        backgroundColor:'#f6f6f6',
        borderRadius: theme.spacing(1),
        //boxShadow: '0px 5px 5px rgba(34, 35, 58, 0.4)',

    },

      cardGrid:{
            // 16px
            transition: '0.3s',
            //boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
            //position: 'relative',
            //maxWidth: 500,
            //marginLeft: 'auto',
            overflow: 'initial',
            background: theme.palette.primary, //'#ffffff',
            //display: 'flex',
            //flexDirection: 'column',
            //alignItems: 'left',
            //paddingBottom: 100,
            //marginTop: theme.spacing(4)
      },
      cardItem:{
        borderRadius: theme.spacing(2),  
        width: '100%',
        height: '100%',
        //paddingBottom: theme.spacing(2),
        //marginBottom:theme.spacing(4),
        "&:hover":{
            //color: "red"
            boxShadow: '0px 14px 14px rgba(34, 35, 58, 0.4)',
          }
      },
      cardItemSkyl:{
        width: '100%',
        height: '100%',
      },
      gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      },
      title: {
        color: theme.palette.primary.light,
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      avatar: {
        backgroundColor: theme.palette.common.colorSecondary,
        width: theme.spacing(7),
        height: theme.spacing(7),
        boxShadow: theme.shadows[10],
      },

    expand: {
        outline: 'none',
        WebkitTapHighlightColor: 'transparent',
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
             }),
        },
        expandOpen: {
        WebkitTapHighlightColor: 'transparent',
        outline: 'none',
        transform: 'rotate(180deg)',
        },
    }));

  
let cards = [];
let skils = [];


function Home (props) {
    const [expanded0, setExpanded0] = React.useState(false);
    const [expanded1, setExpanded1] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const [expanded3, setExpanded3] = React.useState(false);
    const [expanded4, setExpanded4] = React.useState(false);
    const [expanded5, setExpanded5] = React.useState(false);
    const [expanded6, setExpanded6] = React.useState(false);
    const [expanded7, setExpanded7] = React.useState(false);

    const classes = useStyles();
    const [{t}] = useState(props)
    skils[0] = {
        id:0,
        title: t("home.modul2.skils.skil0.title"),
        img: imgDelphi,
        expanded: expanded0,
        hidden:false,
        disabled:false,
        framework:[
            {name:"Windows application"},
            {name:"Fast Report"},
            {name:"FIB Plus"},
            {name:"EHlib"}
        ]

    };
    skils[1] = {
        id:1,
        title: t("home.modul2.skils.skil1.title"),
        subheader:t("home.modul2.skils.skil1.subheader"),
        img: imgNodeJs,
        expanded: expanded1,
        disabled:false,
        hidden:false,
        framework:[
            {name:"Express"},
            {name:"Redis"},
            {name:"Route"},
            {name:"Sequelize"}
        ]

    };
    skils[2] = {
        id:2,
        title: t("home.modul2.skils.skil2.title"),
        subheader:t("home.modul2.skils.skil2.subheader"),
        img: imgReactJs,
        expanded: expanded2,
        disabled:false,
        hidden:false,
        framework:[
            {name:"Redux"},
            {name:"Hooks"},
            {name:"Material UI"},
            {name:"Bootstrap"}
        ]
    };
    skils[3] = {
        id:3,
        title: t("home.modul2.skils.skil3.title"),
        subheader:t("home.modul2.skils.skil3.subheader"),
        img: imgSql,
        disabled:false,
        hidden:false,
        expanded: expanded3,
        framework:[
            {name:"PostgreSQL"},
            {name:"MySQL"},
            {name:"Firebird"},
            {name:"MongoDB"}
        ]
    };
    skils[4] = {
        id:4,
        title: t("home.modul2.skils.skil4.title"),
        subheader:t("home.modul2.skils.skil4.subheader"),
        img: imgHtml,
        expanded: expanded4,
        disabled:true,
        hidden:true,
        framework:[{}]
    };
    skils[5] = {
        id:5,
        title: t("home.modul2.skils.skil5.title"),
        subheader:t("home.modul2.skils.skil5.subheader"),
        img: img1C,
        expanded: expanded5,
        disabled:true,
        hidden:true,
        framework:[{}]
    };
    skils[6] = {
        id:6,
        title: t("home.modul2.skils.skil6.title"),
        subheader:t("home.modul2.skils.skil6.subheader"),
        img: imgVm,
        expanded: expanded6,
        hidden:true,
        disabled:true,
        framework:[{}]
    };
    skils[7] = {
        id:7,
        title: t("home.modul2.skils.skil7.title"),
        subheader:t("home.modul2.skils.skil7.subheader"),
        img: imgArduino,
        expanded: expanded7,
        hidden:true,
        disabled:true,
        framework:[{}]
    };
    /////////////////////////////////////////////////
    cards[0] = {
        id:"1",
        title:t("home.modul1.cards.card1.header"),
        text:t("home.modul1.cards.card1.text"),
        img: imgDatabase
    };
    cards[1] = {
        id:"2",
        title:t("home.modul1.cards.card2.header"),
        text:t("home.modul1.cards.card2.text"),
        img: imgServer
    };
    cards[2] = {
        id:"3",
        title:t("home.modul1.cards.card3.header"),
        text:t("home.modul1.cards.card3.text"),
        img: imgRest
    };
    cards[3] = {
        id:"4",
        title:t("home.modul1.cards.card4.header"),
        text:t("home.modul1.cards.card4.text"),
        img: imgWebDev
    };

    const handleExpandClick = (event) => {

         switch (parseInt(event.currentTarget.id)) {
             case 0: setExpanded0(!expanded0); break;
             case 1: setExpanded1(!expanded1); break;
             case 2: setExpanded2(!expanded2); break;
             case 3: setExpanded3(!expanded3); break;
             case 4: setExpanded4(!expanded4); break;
             case 5: setExpanded5(!expanded5); break;
             case 6: setExpanded6(!expanded6); break;
             case 7: setExpanded7(!expanded7); break;
             default:
                 console.log('Not find id element: ' + event.currentTarget.id);
         }
    };

    return (
            <React.Fragment>
                <Paper className={classes.mainFuturePost}>
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={6} >
                            <div className={classes.mainFuturePostContetnt}>
                            <Typography variant="h3" component="h1" color="inherit" >
                                {t('home.deviz.text1')}
                             </Typography>
                             <Typography variant="h6" component="h2" color="inherit" paragraph>
                                {t('home.deviz.text2')}
                             </Typography>
                             </div>
                        </Grid>
                    </Grid>    
                </Container>
                </Paper>

                <div className={classes.mainContent}>
                    <Container maxWidth='md'>
                        <Typography variant='h3' color='textPrimary'  gutterBottom align="center">{t('home.modul1.text1')}</Typography>
                        <Typography variant='h5' color='textSecondary' gutterBottom align="center" paragraph>{t('home.modul1.text2')}</Typography>
                    </Container>
                </div>
                
                <Container className={classes.cardGrid}>
                <Grid container spacing={2} justify='center'>
                        {cards.map ((card)=> (
                            <Grid item key={card.id} xs={12} md={6} lg={3}>
                                <Card className={classes.cardItem}>
                                <CardMedia 
                                        className={classes.cardMedia}
                                        image={card.img}
                                        //title="image card"
                                />
                                    <CardContent  className={classes.cardContext}>
                                        <Typography variant="h5" gutterBottom align='center'>
                                            {card.title}
                                        </Typography>
                                        <Typography paragraph gutterBottom align='justify'>
                                            {card.text}
                                        </Typography>
                                    </CardContent>
                                </Card>    
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <div className={classes.mainContent} bgcolor='grey'>
                <Container maxWidth='md' style={{paddingTop: '2em'}}>
                    <Typography variant='h3' color='textPrimary'  gutterBottom align="center">{t('home.modul2.text1')}</Typography>
                    <Typography variant='h5' color='textSecondary' gutterBottom align="center" paragraph>{t('home.modul2.text2')}</Typography>
                </Container>
                </div>                    
                <Container className={classes.cardGridSkil}>
                    <Grid container spacing={2} justify='center'>
                            {skils.map((skil)=> (
                                <Grid item key={skil.id} xs={12} sm={6} md={4} lg={3} xl={3}>
                                <Card className={classes.cardItemSkil}>
                                    <CardHeader
                                        avatar={
                                            <ScrollAnimation animateIn='animate__swing' >
                                            <Avatar aria-label="recipe" className={classes.avatar} src={skil.img}/>
                                            </ScrollAnimation>
                                            }
                                        title= {skil.title}
                                        subheader ={skil.subheader}   
                                    />
                                    <CardActions disableSpacing style={{margin: '0', padding:'0'}}>
                                        <IconButton
                                            id={skil.id}
                                            className={clsx(classes.expand, {
                                                [classes.expandOpen]:skil.expanded,
                                            })}
                                            onClick={handleExpandClick}
                                            aria-expanded={skil.expanded}
                                            aria-label="show more"
                                            hidden = {true}
                                            disabled={skil.disabled}
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </CardActions>
                                    <Collapse in={skil.expanded} timeout="auto" unmountOnExit>
                                    <CardContent  className={classes.CardContentSkills}>
                                        <List key={'list_'+skil.id}  style={{backgroundColor:'transparent'}}>
                                        {skil.framework.map(fw=>(
                                            <ListItem key={'list_item'+fw.name} button dense={true}>
                                                <ListItemIcon key={'list_item_icon'+fw.name}><CheckIcon/></ListItemIcon>
                                                <ListItemText key={'list_item_text'+fw.name}>
                                                    {fw.name}
                                                </ListItemText>
                                            </ListItem>
                                        ))}
                                        </List>
                                    </CardContent>
                                    </Collapse>
                                </Card>
                                </Grid>

                            ))}
                    </Grid>   
                </Container>          
                          
            </React.Fragment>
        )
}
export default translate(Home);
