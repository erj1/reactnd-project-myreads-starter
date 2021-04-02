import React, { Component } from 'react';


class Book extends Component {

  state = {
    shelf: "none"
  }

  handleShelfChange = (event) => {
    const {value} = event.target;
    this.setState({
      shelf: value
    }, () => {
      const {book, onShelfChange} = this.props;
      onShelfChange(book, this.state.shelf);
    });
  }

  componentDidMount() {
    const {book, booksOnShelf} = this.props;
    if (book.shelf) {
      this.setState({shelf: book.shelf})
    } else if (booksOnShelf) {
      booksOnShelf.map(bookOnShelf => (
        bookOnShelf.id === book.id && this.setState({shelf: bookOnShelf.shelf})
      ))
    }
  }

  render() {
    const {book} = this.props;

    const style = {
      width: 128,
      height: 193,
      backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={style} />
          <div className="book-shelf-changer">
            <select onChange={this.handleShelfChange} value={this.state.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.map(author => (
            <span key={author} className="author">{author}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default Book;
