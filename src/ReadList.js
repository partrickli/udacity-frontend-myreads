import React, { Component } from 'react';
import './ReadList.css';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';
class BookList extends Component {
  shouldComponentUpdate() {
    console.log('ReadList shouldComponentUpdate called');
    return true;
  }

  render() {
    return (
      <div className="shelves">
        {this.props.shelves.map((shelf) => {
          return (
            <Shelf
              key={shelf.catagory}
              shelf={shelf.catagory}
              books={shelf.books}
              changeShelf={this.props.changeShelf}
            />
          );
        })}
        <button className="add-book">
          <Link to="/search">Add Book</Link>
        </button>
      </div>
    );
  }
}

export default BookList;
