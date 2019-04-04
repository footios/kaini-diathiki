import React, { Component } from 'react';
import CSSTrantition from 'react-transition-group/CSSTransition';

import Book from './Book/Book';

import classes from './Books.module.css'

class Books extends Component {
	state = {
		books: [ 'ΚΑΤΑ ΜΑΤΘΑΙΟΝ', 'ΚΑΤΑ ΜΑΡΚΟΝ', 'ΚΑΤΑ ΛΟΥΚΑΝ', 'ΚΑΤΑ ΙΩΑΝΝΗΝ' ]
	};
	render() {
		return (
			<ul style={{ listStyleType: 'none', textAlign: 'left' }}>
				{this.state.books.map((book, index) => (
                    <CSSTrantition key={index} timeout={2000}
                    classNames='fade' >
						<li className={classes.ListItem} style={{textAlign: 'left' }} >
							<Book name={book} />
						</li>
					</CSSTrantition>
				))}
			</ul>
		);
	}
}

export default Books;
