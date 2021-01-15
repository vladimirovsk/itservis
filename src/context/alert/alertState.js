import React, {useReducer} from 'react';
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {HIDE_ALERT, SHOW_ALERT} from '../type'

const AlertState = ({children}) => {
  const [state, dispatch] = useReducer(AlertReducer, null);

  const hide =()=> dispatch({type:HIDE_ALERT})

  const show = (text, type='info', autoHide=null) => {
    dispatch({
      type:SHOW_ALERT,
      payload: {type, text, autoHide}
    })

  }

  return (
    <AlertContext.Provider value={{
      hide, show, alert: state
    }}>
    {children}
    </AlertContext.Provider>
  )
}

export default AlertState;