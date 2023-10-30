import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container, Row, Col } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selected: false,
    asin: undefined,
  };

  setStateOfApp = (newSelected) => {
    this.setState({
      selected: newSelected,
    });
  };

  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <Row>
            <Col xs={6}>
              {" "}
              <BookList
                books={fantasy}
                selected={this.state.selected}
                setStateOfApp={this.setStateOfApp}
              />
            </Col>
            <Col xs={6}>
              <CommentArea
                selected={this.state.selected}
                setStateOfApp={this.setStateOfApp}
                asin={"tt0241527"}
              />
            </Col>
          </Row>
          {/* <AllTheBooks /> */}
        </Container>
        <MyFooter />
      </>
    );
  }
}
export default App;
