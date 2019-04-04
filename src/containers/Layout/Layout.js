import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		showModal: false
	};

	closeModalHandler = () => {
		this.setState({ showModal: false });
	};

	showModalHandler = () => {
		this.setState({ showModal: true });
	};

	render() {
		
		return (
			<div>
				<Modal show={this.state.showModal} clicked={this.closeModalHandler} />
				<button className={classes.Button} onClick={this.showModalHandler}>
					Βιβλία Καινής Διαθήκης
				</button>
			</div>
		);
	}
}

export default Layout;
