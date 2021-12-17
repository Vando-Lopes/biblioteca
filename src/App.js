import React, { Component } from "react";
import api from "./services/api";
import Book from "./components/Book/Book";
import SearchBar from "./components/SearchBar/SearchBar";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { books: [], search: "" };
  }
  getBooks = async () => {
    try {
      const data = await api.get(this.state.search).then(({ data }) => data);
      this.setState({ books: data.hits });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const books = this.state.books;
    return (
      <>
        <div className="App">
          <Title />
          <div className="navBar">
            <SearchBar
              onChange={(e) => this.setState({ search: e.target.value })}
              query={this.state.query}
            />
            <Button onClick={this.getBooks}></Button>
          </div>
          <div className="books">
            {books.map((book) => (
              <Book
                key={book.objectID}
                title={book.title ? book.title : "Titulo não informado"}
                author={book.author ? book.author : "Autor não informado"}
                url={book.url}
              ></Book>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
