import React, { Component } from 'react';


class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/*<BookShelves />*/}
        </div>
        <div className="open-search">
          <button>Add a book</button>
        </div>
      </div>
    )
  }
}

export default ListBooks
