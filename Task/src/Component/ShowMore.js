import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import db from "../Data/mockData.json";
import { Button } from "bootstrap";
import { useLocation } from "react-router-dom";

function ShowMore(props) {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  const valuesArray = db.data;
  const filteredValue = data.concat(valuesArray);
  const [dat, setDat] = useState([]);
  const [slice, setSlice] = useState(5);

  function Pre() {
    setSlice(slice - 5);
  }

  function next() {
    setSlice(slice + 5);
  }

  const persons = [];

  return (
    <Container>
      <Row>
        <Link to="/" className="smallogo margin ">
          <img className="smallogo  " src={require("../Data/jpg1.png")} />
        </Link>
        <input className="showinput margin " />
        <input className="search margin" type="submit" value="Search" />
      </Row>

      <Row>
        {filteredValue.slice(slice - 5, slice).map((person) => {
          return (
            <label className="row">
              {person.slice(0, 1).map((x) => {
                return <th className="ShowMore center"> {x} </th>;
              })}
              {person.slice(4, 5).map((x) => {
                return <th className="ShowMore center"> {x} </th>;
              })}
            </label>
          );
        })}
      </Row>

      <Row>
        <button
          onClick={Pre}
          className=" margin2 center "
          type="submit"
          value="Pre.."
        >
          Pre..
        </button>

        <button
          onClick={next}
          className=" margin2 center "
          type="submit"
          value="Next.."
        >
          Next..
        </button>
      </Row>
    </Container>
  );
}

export default ShowMore;
