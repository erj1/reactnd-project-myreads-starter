import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { search } from './BooksAPI'
import SearchBookResults from "./SearchBookResults";


class SearchBooks extends Component {

  state = {
    search_term: "",
    books: []
  }

  handleSearchInput = (event) => {
    const search_term = event.target.value;
    this.setState({search_term}, () => {
      this.performSearch();
    })
  }

  performSearch = () => {
    if (this.state.search_term) {
      search(this.state.search_term)
        .then((books) => {
          'error' in books
            ? this.setState({books: []})
            : this.setState({books})
        })
    } else {
      this.setState({books: []})
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.search_term}
              onChange={this.handleSearchInput}/>
          </div>
        </div>
        <SearchBookResults books={this.state.books} search_term={this.state.search_term}/>
      </div>
    );
  }
}

export default SearchBooks;
