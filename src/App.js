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

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books
        })
      })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        BooksAPI.getAll()
          .then((books) => {
            this.setState({
              books
            })
          })
      })
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
        <Route path="/search" component={SearchBooks} />
      </div>
    )
  }
}

export default BooksApp
