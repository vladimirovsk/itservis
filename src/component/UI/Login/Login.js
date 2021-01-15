import React, {useState}  from 'react';
//import {withStyles} from "@material-ui/styles";
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {translate} from 'react-switch-lang';

const thStyles = makeStyles( theme => ({
  textField: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    backgroundColor: '#fff', //theme.palette.common.primary''
    paddingTop: theme.spacing(4),
  }
}));

function Login (props, openDlgNew) {
  const [{t}] = useState(props)
  const [openDlg, setOpenDlg] = useState(false);
  const classes = thStyles();

  //console.log("Login openDlg="+openDlgNew);

  const handleCloseDlg = () => {
    setOpenDlg(false);
    console.log("Login openDlg="+openDlg);
  }

  

  return(
    <React.Fragment>
    
    </React.Fragment>
    
  )
}

function mapStateToProps(state){
  //console.log(new Date(localStorage.getItem('expirationDate')))
  //console.log(state.openDlg)
  return{
    isAuth: !!state.auth.token,
    stDate: new Date(state.auth.expData)
    
  }
}

//export default connect(mapStateToProps) (translate(withStyles(useStyles) (Login)));
export default connect(mapStateToProps) (translate( Login));
//export default Login;

/*
  <Dialog open={openDlgNew} onClose={handleCloseDlg} aria-labelledby="customized-dialog-title">

  <DialogTitle id="form-dialog-title">{t('login.header')}</DialogTitle>
  <DialogContent>
    <DialogContentText>
      
    </DialogContentText>
    <TextField className={classes.textField}
      id="login" 
      label={t("login.placeholderEmail")}
      //margin="dense" 
      type="email"
      //autoComplete="current-email"
      //variant="outlined"
      fullWidth
    />
    <TextField className={classes.textField}
      //disabled={false}
      //autoFocus   
      //margin="dense"
      id="password"
      label={t("login.placeholderPassword")}
      type="password"
      //autoComplete="current-password"
      //variant="outlined"
      fullWidth
    />
  </DialogContent>
  <DialogActions>
    
    <Button onClick={handleCloseDlg} color="secondary" variant="outlined">
    {t('login.logout')}
    </Button>
    <Button disabled={true} onClick={handleCloseDlg} color="secondary" variant="outlined">
    {t('login.login')}
    </Button>

  </DialogActions>
    </Dialog>*/