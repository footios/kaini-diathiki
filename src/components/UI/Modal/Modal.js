import React from 'react'
import Books from '../../Books/Books'

import classes from "./Modal.module.css";

const modal = (props) => {
     const cssClasses = [ classes.Modal, props.show ? classes.ModalOpen : classes.ModalClosed ];
   
        return ( 
            <div onClick={props.closed} className={cssClasses.join(' ')} >
                <Books />
            </div>
         );

}
 
export default modal;