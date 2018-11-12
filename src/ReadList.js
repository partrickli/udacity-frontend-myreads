import React from 'react';
import Shelf from './Shelf';
function BookList(props) {
  return (
    <div className="shelves">
      {props.shelves.map((shelf) => {
        return (
          <Shelf
            key={shelf.catagory}
            shelf={shelf.catagory}
            books={shelf.books}
            changeShelf={props.changeShelf}
          />
        );
      })}
    </div>
  );
}

export default BookList;
