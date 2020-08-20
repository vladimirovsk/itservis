import React, {useState} from "react";
import cx from 'clsx';
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';

//import {faHome} from '@fortawesome/free-solid-svg-icons'
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
//import {CardDeck, Container} from "react-bootstrap";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
//import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';



import {
    translate,
} from 'react-switch-lang';


import imgDatabase from '../Home/database.jpg';

const useStyles = makeStyles(({breakpoints, spacing}) => ({
    root: {
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: 500,
        //height:200,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: spacing(2),
        [breakpoints.up('md')]: {
          flexDirection: 'row',
          paddingTop: spacing(2),
        },
      },
      media: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: spacing(-3),
        height: 0,
        paddingBottom: '48%',
        borderRadius: spacing(2),
        backgroundColor: '#fff',
        position: 'relative',
        [breakpoints.up('md')]: {
          width: '100%',
          marginLeft: spacing(-3),
          marginTop: 0,
          transform: 'translateX(-8px)',
        },
        '&:after': {
          content: '" "',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          //backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
          borderRadius: spacing(2), // 16
          opacity: 0.5,
        },
      },
      content: {
        padding: 24,
      },
      cta: {
        marginTop: 24,
        textTransform: 'initial',
      },
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
    const shadowStyles = useOverShadowStyles();
    const {
        button: buttonStyles,
        ...contentStyles
      } = useBlogTextInfoContentStyles();    

    const [{t}] = useState(props)
    

        //console.log(h('card1.header'));
        return (
            <Grid container spacing={5}>

                <Grid item xs={12}>
                    
                    <Card className={cx(classes.root, shadowStyles.root)}>
                        <CardMedia 
                            className={classes.media}
                            //component="img"
                            //alt="database"
                            image={imgDatabase}
                            //title="database"
                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {t("home.card1.header")}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {t('home.card1.text')}
                            </Typography>
                        </CardContent>    
                    </Card>
                   
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