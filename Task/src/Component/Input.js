import React, { useState } from "react";
import db from "../Data/mockData.json";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";

function Input(props) {
  const [cols, setCols] = useState("");

  const valuesArray = db.data;

  const [dat, setDat] = useState([]);

  function handleSearch(value) {
    setCols(value);
  }

  let filterword = () => {
    const persons = [];
    valuesArray.map((person) => {
      const found = person.map((x) => (x.includes(cols) ? true : false));

      if (found.includes(true)) {
        persons.push(person);
        setDat(persons);
      } else {
      }
    });
  };

  return (
    <div className="end">
      <label>
        <input
          onChange={(e) => {
            handleSearch(e.target.value);
            filterword();
          }}
          className={props.className}
          value={cols}
          type="text"
          name="name"
        />
        <div>
          <label className="area">
            {dat.slice(0, 3).map((x) => (
              <p className="font">
                {x[0]}---{x[4]}
              </p>
            ))}
          </label>
          <p className="show2">
            <Link to="/showmore" state={dat}>
              Show More
            </Link>
          </p>
        </div>
      </label>
    </div>
  );
}

export default Input;
