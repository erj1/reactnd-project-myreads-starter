import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { mount, configure } from 'enzyme';
import Book from "./Book";

configure({adapter: new Adapter()});

describe("<Book />", () => {

  const book = {
    title: "Behind The Wand",
    authors: ["Tom Riddle"]
  }

  const book_with_shelf = {
    title: "Snogging With The Best",
    authors: ["Ron Weasly", "Hermione Granger"],
    shelf: "read"
  }

  it("allows us to set props", () => {
    const wrapper = mount(<Book book={book} />);
    expect(wrapper.props().book).to.equal(book);
  });

  it("has bookshelf default to none", () => {
    const wrapper = mount(<Book book={book} />);
    expect(wrapper.state().shelf).to.equal("none");
  });

  it("allows bookshelf to be set props", () => {
    const wrapper = mount(<Book book={book_with_shelf} />);
    expect(wrapper.state().shelf).to.equal("read");
  });

  it("has bookshelf changer value set", () => {
    const wrapper = mount(<Book book={book_with_shelf} />);
    expect(wrapper.find(".book-shelf-changer > select").props().value).to.equal(book_with_shelf.shelf);
  });

  it("shows book title", () => {
    const wrapper = mount(<Book book={book} />);
    expect(wrapper.find(".book-title").text()).to.equal(book.title);
  });

  it("shows multiple authors", () => {
    const wrapper = mount(<Book book={book_with_shelf} />);
    expect(wrapper.find(".book-authors > span")).to.have.lengthOf(2);
  });

});
