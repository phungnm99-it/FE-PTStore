import React, { Component } from "react";
import "../../../css/product/filter.css";
import FilterPrice from "./FilterPrice";
import FilterSort from "./FilterSort";
class Filter extends Component {
  dropRef = React.createRef();
  buttonRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = { isDrop: false, top: 0, left: 0 };
  }

  componentDidMount() {
    // document.body.appendChild(this.drop);
    console.log(this.props);
    let root = document.getElementById("root");
  }

  render() {
    const dropDownStyle = {
      display: "block",
      left: this.state.left + "px",
    };
    return (
      <div>
        <section className="filter">
          <div className="container">
            <div className="filter-total">
              <FilterPrice />
              <FilterSort />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Filter;
