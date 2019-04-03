import React from 'react'
import Books from '../../Books/Books'

import "./Modal.module.css";

const modal = (props) => {
      const classes = [ 'Modal', props.show ? 'ModalOpen' : 'ModalClosed' ];
   
        return ( 
            <div onClick={props.closed} className={classes.join(' ')} >
                <Books />
            </div>
         );

}
 
export default modal;