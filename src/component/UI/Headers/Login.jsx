import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {translate} from "react-switch-lang";

const Login = (props, openDlg=false) => {

    const [{t}] = React.useState(props)

    console.log(openDlg);
    return(
    <Dialog open={openDlg} aria-labelledby="customized-dialog-title">

        <DialogTitle id="form-dialog-title">{t('login.header')}</DialogTitle>

        <DialogContent>
            <DialogContentText>

            </DialogContentText>
            <TextField
                       //className={classes.textField}
                       id="login"
                       label={t("login.placeholderEmail")}
                //margin="dense"
                       type="email"
                //autoComplete="current-email"
                //variant="outlined"
                       fullWidth
            />
            <TextField
                //className={classes.textField}
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

            <Button //onClick={handleCloseDlg}
                color="secondary" variant="outlined">
                {t('login.logout')}
            </Button>
            <Button disabled={true}
                    //onClick={handleCloseDlg}
                    color="secondary" variant="outlined">
                {t('login.login')}
            </Button>

        </DialogActions>
    </Dialog>
    )
}


export default translate(Login);
