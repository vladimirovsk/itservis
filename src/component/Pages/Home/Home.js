import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';

//import {faHome} from '@fortawesome/free-solid-svg-icons'
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {CardDeck, Container} from "react-bootstrap";

import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import LayerIcon from '@material-ui/icons/Layers'; 
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RestoreIcon from '@material-ui/icons/Restore';
import FavotiteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';

import {Card, CardContent, CardMedia, CardActions} from '@material-ui/core';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';

import {
    translate,
} from 'react-switch-lang';


import imgDatabase from '../Home/img/database.jpg';
import imgServer from '../Home/img/servers.jpg';
import imgRest from '../Home/img/REST.jpeg';
import laptopItservis from '../Home/img/laptopItservis.jpg';
//import laptopItservis from '../Home/img/laptopItservis2.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      mainFuturePost:{
        position: "relative",
        //position: 'sticky',
        //top: '0px',
        //zIndex: '-1000',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${laptopItservis})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
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
        position:"relative",
        padding:theme.spacing(4),
        textShadow: '1px 1px 2px black, 0 0 1em black',
        marginTop: theme.spacing(4)
      },
      mainContent:{

      },
      mainButtons:{

      },
      cardMedia:{
          paddingTop:"56.25%"
      },
      CardContent:{
          flexGrow:1, 
          height: '350px'
          
      },
      cardGrid:{
          marginTop: theme.spacing(4),
      }
    }));

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px
*/
  
let cards = []


function Home (props) {
    const classes = useStyles();
    const [{t}] = useState(props)
    const [value, setValue] = React.useState("recents")

    const handleChangle =  (event, newValue) =>{
            setValue(newValue )
    }

    cards[0] = {
        id:"1",
        title:t("home.card1.header"),
        text:t("home.card1.text"),
        img: imgDatabase
    }
    cards[1] = {
        id:"2",
        title:t("home.card2.header"),
        text:t("home.card2.text"),
        img: imgServer
    }
    cards[2] = {
        id:"3",
        title:t("home.card3.header"),
        text:t("home.card3.text"),
        img: imgRest
    }
            
        return (
            <React.Fragment>
                <Paper className={classes.mainFuturePost} >
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFuturePostContetnt}>
                            <Typography gutterBottom variant="h3" component="h3" color="inherit" >
                                {t('home.deviz.text1')}
                             </Typography>
                             <Typography gutterBottom variant="h5" component="h5" color="inherit" paragraph>
                                {t('home.deviz.text2')}
                             </Typography>
                              <Button variant="contained" color="secondary">
                                  Learn More
                              </Button>
                             </div>
                        </Grid>
                    </Grid>    
                </Container>
                </Paper>
                
                <div className={classes.mainContent}>
                    <Container maxWidth='md'>
                        <Typography variant='h2' align='center' color='textPrymary' gutterBottom>Developer</Typography>
                        <Typography variant='h5' align='center' color='textSecondary' gutterBottom paragraph>Труля ля тру ляля мы не пилим тополя nруля ля тру ляля мы не пилим тополя tруля ля тру ляля мы не пилим тополя</Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={5} justify="center" >
                                <Grid item>
                                    <Button variant="contained" color="primary">Start now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">Learn more</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container> 
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing="4">
                            {cards.map ((card)=> (
                                <Grid item key={card}  xs={12} xm={6} md={4}>
                                    <Card className={classes.cardGrid}>
                                    <CardMedia 
                                            className={classes.cardMedia}
                                            image={card.img}
                                            title="image card"
                                        />
                                        <CardContent  className={classes.cardContext}>
                                            <Typography variant="h5" gutterBottom>
                                                {card.title}
                                            </Typography>
                                            <Typography paragraph>
                                                {card.text}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                        <Button size="small" color="prymary">View</Button>
                                        <Button size="small" color="secondary">Edit</Button>
                                        <LayerIcon />
                                        <PlayCircleFilledIcon />
                                        </CardActions>

                                    </Card>    
                                </Grid>
                            ))}
                    </Grid>

                </Container>
                <footer>
                    <Typography variant='h6' align='center' gutterBottom> Footer</Typography>
                    <BottomNavigation
                        value={value}
                        onChange={handleChangle}
                        className={classes.root}
                    >
                                                <BottomNavigationAction 
                            label='Recents'
                            value='recents'
                            icon={<RestoreIcon/>}
                        />
                        <BottomNavigationAction 
                            label='Favorites'
                            value='favorites'
                            icon={<FavotiteIcon/>}
                        />
                        <BottomNavigationAction 
                            label='Nearby'
                            value='nearby'
                            icon={<LocationOnIcon/>}
                        />
                        <BottomNavigationAction 
                            label='Folder'
                            value='folder'
                            icon={<FolderIcon/>}
                        />

                    </BottomNavigation>


                </footer>
            </React.Fragment>
        )
}

export default translate(Home);

/**
 */