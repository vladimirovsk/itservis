import React, {useState} from "react";
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';

//import {faHome} from '@fortawesome/free-solid-svg-icons'
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {CardDeck, Container} from "react-bootstrap";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'


import Container from '@material-ui/core/Container';
import {
    translate,
} from 'react-switch-lang';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
         textAlign: 'center',
         color: theme.palette.text.secondary,
        height: 550,
        //width: 600,
    },
    containerHome:{
        maxWidth:'xl',
        flex: '1 0 auto',
        imgCard:{
            height:'100vh',
            maxWidth: 300

        }

        //padding: theme.spacing(2),
        //margin: '120px'
    }
  }));

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 960px
lg, large: 1280px
xl, extra-large: 1920px
*/

function Home (props) {

    const classes = useStyles();
    const [{t}] = useState(props)

        //console.log(h('card1.header'));
        return (
            <Grid className={classes.root} container spacing={5}>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <CardActionArea>
                    <CardMedia className={classes.containerHome.imgCard}
                        height='350'
                        width='200'
                        component="img"
                        alt="database"
                        image={"database.jpg"}
                        title="database"
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {t("home.card1.header")}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {t('home.card1.text')}
                        </Typography>
                    </CardContent>    
                    </CardActionArea>
                    </Paper>
                </Grid>    
            </Grid>
        )
    
}

/*Home.propTypes = {
    t: PropTypes.func.isRequired,
};*/


export default translate(Home);

/*

                    <Card  bg={"info"} className=" m-4 bg-light">
                        <Card.Img varian={"top"} src={"database.jpg"}/>

                        <Card.Header>{t("home.card1.header")}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="text-left">
                                {t('home.card1.text')}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                    
                    <Card bg={"info"} className=" m-4 bg-light">
                        <Card.Img varian={"bottom"} src={"servers.jpg"}/>
                        <Card.Header>{t("home.card2.header")}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="text-left">
                                {t("home.card2.text")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    <Card className=" m-4 bg-light">
                        <Card.Img varian={"top"} src={"REST.jpeg"}/>
                        <Card.Header>{t("home.card3.header")}</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text className="text-left">
                                {t("home.card3.text")}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
*/