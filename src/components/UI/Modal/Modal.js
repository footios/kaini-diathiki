import React from 'react'
import Books from '../../Books/Books'

import classes from "./Modal.module.css";

const modal = (props) => {
     const cssClasses = [ classes.Modal, props.show ? classes.ModalOpen : classes.ModalClosed ];
   
        return ( 
            <div  className={cssClasses.join(' ')} >
                <Books />
            <button onClick={props.clicked} className={classes.Button} >Έξοδος</button>
            </div>
         );

}
 
export default modal;