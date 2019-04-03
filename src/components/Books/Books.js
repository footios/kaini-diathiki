import React, { Component } from 'react';
import Book from './Book/Book'

class Books extends Component {
    state = { 
        books: ['ΚΑΤΑ ΜΑΤΘΑΙΟΝ', 'ΚΑΤΑ ΜΑΡΚΟΝ', 'ΚΑΤΑ ΛΟΥΚΑΝ', 'ΚΑΤΑ ΙΩΑΝΝΗΝ' ]
     }
    render() { 
        return ( 
            <div>
               {this.state.books.map((book, index) => (
                <Book key={index} name={book}/>
               ))}     
            </div>
         );
    }
}
 
export default Books;