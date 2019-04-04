import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

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
				<Transition in={this.state.showModal} timeout={1000} mountOnEnter unmountOnExit >
					{(state) => (<Modal show={state} clicked={this.closeModalHandler} />)}
				</Transition>
				<button className={classes.Button} onClick={this.showModalHandler}>
					Βιβλία Καινής Διαθήκης
				</button>
			</div>
		);
	}
}

export default Layout;
