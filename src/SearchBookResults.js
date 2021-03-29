import React, { Component } from 'react';
import Book from "./Book";


class SearchBookResults extends Component {
  render() {
    const {books, search_term} = this.props;
    return (
      <div className="search-books-results">
        <p hidden={search_term !== ""}>To Search For Books, Please Enter A Search Term</p>
        {
          search_term && books.length === 0
            ? <p>No books found matching your search</p>
            : (<ol className="books-grid">
                {books.map(book => (
                  <li key={book.id}><Book book={book} /></li>
                ))}
              </ol>)
        }
      </div>
    )
  }
}

export default SearchBookResults;
