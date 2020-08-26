import React, {useState}from 'react'
import Typography from '@material-ui/core/Typography';
import RestoreIcon from '@material-ui/icons/Restore';
import FavotiteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FolderIcon from '@material-ui/icons/Folder';
import {BottomNavigation, BottomNavigationAction, useTheme} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import {translate} from 'react-switch-lang';


const useStyles = makeStyles((theme) => ({
    root: {
        
      },
})) 

function BottomPanel (props)  {

    const classes = useStyles();
    const theme = useTheme();
    const [{t}] = useState(props)
    const [value, setValue] = React.useState("recents")
    const handleChangle =  (event, newValue) =>{
            setValue(newValue )
    }
    
    const [value, setValue] = React.useState("recents")
    const handleChangle =  (event, newValue) =>{
            setValue(newValue )
    }
    return(
        <footer>
                    <Typography variant='h6' align='center' gutterBottom>Fotter</Typography>
                    <BottomNavigation
                        value={value}
                        onChange={handleChangle}
                        //className={classes.}
                        //color="primary"
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

    );

}

export default translate(BottomPanel);