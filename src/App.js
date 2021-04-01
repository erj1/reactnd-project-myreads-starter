import React from 'react'
import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

const shelves = [
  {id: "currentlyReading", title: "Currently Reading"},
  {id: "wantToRead", title: "Want To Read"},
  {id: "read", title: "Read"},
];

class BooksApp extends React.Component {

  state = {
    books: []
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({books});
  }

  changeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const books = await BooksAPI.getAll();
    this.setState({books});
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <ListBooks
            shelves={shelves}
            books={this.state.books}
            onShelfChange={this.changeShelf}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks
            booksOnShelf={this.state.books}
            onShelfChange={this.changeShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
