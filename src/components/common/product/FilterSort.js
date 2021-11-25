import React, { Component } from "react";

class FilterSort extends Component {
  dropRef = React.createRef();
  buttonRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = { isDrop: false, top: 0, left: 0 };
  }

  componentDidMount() {
    // document.body.appendChild(this.drop);
    // console.log(this.props);
    // let root = document.getElementById("root");
    this.setState({
      left: this.buttonRef.current.getBoundingClientRect().left - 140,
    });
  }

  render() {
    const dropDownStyle = {
      display: "block",
      left: this.state.left + "px",
    };
    return (
      <div>
        <div className="right">
          <div
            className="facet"
            ref={this.buttonRef}
            onClick={() => {
              this.setState({ isDrop: true });
            }}
            onMouseOver={() => {
              this.setState({ isDrop: true });
            }}
            onMouseLeave={() => {
              this.setState({ isDrop: false });
            }}
          >
            <label>
              Sắp xếp <i className="fa fa-caret-down"></i>
            </label>
            <div
              className="sub"
              style={this.state.isDrop ? dropDownStyle : { display: "none" }}
            >
              <ul>
                <li>
                  <p>
                    <span></span> Giá thấp đến cao
                  </p>
                </li>
                <li>
                  <p>
                    <span></span> Giá cao đến thấp
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterSort;
