import React from 'react';
import Books from '../../Books/Books';


import classes from './Modal.module.css';

const modal = (props) => {
	const cssClasses = [
		classes.Modal,
		props.show === 'entering' ? classes.ModalOpen : props.show === 'exiting' ? classes.ModalClosed : null
	];

	return (
		<div className={cssClasses.join(' ')}>
				<Books onEntered={props.onEntered} />
				<button onClick={props.clicked} className={classes.Button}>
					Έξοδος
				</button>
			
		</div>
	);
};

export default modal;
