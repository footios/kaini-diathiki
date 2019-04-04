import React from 'react';
import Books from '../../Books/Books';

import classes from './Modal.module.css';

const modal = (props) => {
	const cssClasses = [
		classes.Modal,
		props.show === 'entered' ? classes.ModalOpen : props.show === 'exiting' ? classes.ModalClosed : null
	];

	return (
		<div className={cssClasses.join(' ')} onClick={props.clicked}>
			<Books onEntered={props.onEntered} />
		</div>
	);
};

export default modal;
