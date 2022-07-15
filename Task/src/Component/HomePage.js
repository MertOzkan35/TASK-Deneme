import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "@fontsource/roboto";
import Logo from "./Logo";
import ReactDOM from "react-dom";
import Search from "./Search";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "./Input";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col>
          <Logo />
        </Col>
      </Row>
      <Row>
        <Col xl={9} className="flex">
          <Input className="input" />
        </Col>
        <Col className="flex">
          <Search className="search" />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
