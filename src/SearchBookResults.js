import React, { Component } from 'react';
import Book from "./Book";


class SearchBookResults extends Component {
  render() {
    const {booksOnShelf, books, onShelfChange, search_term} = this.props;
    return (
      <div className="search-books-results">
        {
          search_term && books.length === 0
            ? <p>No books found matching your search</p>
            : (<ol className="books-grid">
                {books.map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      booksOnShelf={booksOnShelf}
                      onShelfChange={onShelfChange}/>
                  </li>
                ))}
              </ol>)
        }
      </div>
    )
  }
}

export default SearchBookResults;
