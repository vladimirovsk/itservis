import React, {useState} from "react";
import './About.scss';
import cx from 'clsx';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPhone, faAddressCard, faCity, } from '@fortawesome/free-solid-svg-icons';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';

import {translate} from "react-switch-lang";

const useStyles = makeStyles(({breakpoints, spacing}) => ({
    root: {
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: 500,
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
      paper: {
        padding: '10px',
        //textAlign: 'center',
        //color: theme.palette.text.secondary,
      },
    }));

function About (props ) {
    const [{t}] = useState(props);
    const classes = useStyles();
    const shadowStyles = useOverShadowStyles();
    return (

        <Grid container spacing={1} className={classes.root}>
                <Grid container item xs={12} spacing={3}>
                    <Paper className={classes.paper}>
                        <Grid item xs={12}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {t("contact.block1.header")}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {t('contact.block1.text')}
                            </Typography>
                        </Grid>
                    </Paper>       
                </Grid>

                <Grid container item xs={12} spacing={3}>
                   <Paper className={classes.paper}>
                        <Grid item xs={12}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {t("contact.block2.header")}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {t('contact.block2.text')}
                            </Typography>
                        </Grid>    
                    </Paper>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Paper className={classes.paper}>
                        <Grid item xs={12}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {t("contact.block3.header")}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            {t('contact.block3.text')}
                            </Typography>
                        </Grid>    
                    </Paper>        
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Paper className={classes.paper}>
                        <Grid item xs={12}>
                            <Typography>
                                <FontAwesomeIcon icon={faCoffee}/>
                                {t('kontact.title')}
                            </Typography>        
                            <Typography>
                                <FontAwesomeIcon icon={faCity}/>
                                {t('kontact.city')}
                            </Typography>  
                            <Typography>
                                <FontAwesomeIcon icon={faPhone}/>
                                {t('kontact.phone')}
                            </Typography>
                            <Typography>
                                <FontAwesomeIcon icon={faAddressCard}/>
                                <a className="mail text-white " href="mailto:admin@citypay.org.ua"><u>admin@citypay.org.ua</u></a>
                            </Typography>
                        </Grid>
                     </Paper>       
                </Grid> 
        </Grid>
    )
}


export default translate(About);
