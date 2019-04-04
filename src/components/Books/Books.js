import React, { Component } from 'react';
import CSSTrantition from 'react-transition-group/CSSTransition';
import TranstitionGroup from 'react-transition-group/TransitionGroup';

import Book from './Book/Book';

import classes from './Books.module.css';
/* 
commit: * TrantitionGroup and CSSTrantition to Books
We tried to make the Books showup with animation,
after the Modal shows but failed.
*/
class Books extends Component {
	state = {
		books: [ 'ΚΑΤΑ ΜΑΤΘΑΙΟΝ', 'ΚΑΤΑ ΜΑΡΚΟΝ', 'ΚΑΤΑ ΛΟΥΚΑΝ', 'ΚΑΤΑ ΙΩΑΝΝΗΝ' ]
	};
	render() {
		// let books = [<div className={classes.DivBeforeShowBooks}></div>];
		let books = null;
		if (this.props.onEntered) {
			books = this.state.books.map((book, index) => (
				<CSSTrantition key={index} timeout={1000} classNames={{ enterActive: classes.ShowBooks }}>
					<li className={classes.ListItem} style={{ textAlign: 'left' }}>
						<Book name={book} />
					</li>
				</CSSTrantition>
			));
		}

		return (
			<TranstitionGroup component="ul" className={classes.List} timeout={1000}>
				{books}
			</TranstitionGroup>
		);
	}
}

export default Books;
