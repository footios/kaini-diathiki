import React from 'react';
import Books from '../../Books/Books';
import TranstitionGroup from 'react-transition-group/TransitionGroup';

import classes from './Modal.module.css';

const modal = (props) => {
	const cssClasses = [
		classes.Modal,
		props.show === 'entering' ? classes.ModalOpen : props.show === 'exiting' ? classes.ModalClosed : null
	];

	return (
		<div className={cssClasses.join(' ')}>
			<TranstitionGroup component="ul" className={classes.List} timeout={300} >
				<Books />
				<button onClick={props.clicked} className={classes.Button}>
					Έξοδος
				</button>
			</TranstitionGroup>
		</div>
	);
};

export default modal;
