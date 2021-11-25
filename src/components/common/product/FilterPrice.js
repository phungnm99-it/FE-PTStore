import React, { Component } from "react";
class FilterPrice extends Component {
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
        <div className="left">
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
              Giá <i className="fa fa-caret-down"></i>
            </label>
            <div
              className="sub"
              style={this.state.isDrop ? dropDownStyle : { display: "none" }}
            >
              <ul>
                <li>
                  <a href="#">
                    <span></span> Từ 2 - 4 triệu
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span></span> Từ 4 - 7 triệu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterPrice;
