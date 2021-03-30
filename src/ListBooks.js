import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";


class ListBooks extends Component {
  render() {
    const {shelves, books, onShelfChange} = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelf => (
            <BookShelf
              key={shelf.id}
              title={shelf.title}
              books={books.filter(book => (book.shelf === shelf.id))}
              onShelfChange={onShelfChange}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
