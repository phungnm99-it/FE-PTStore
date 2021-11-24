import React, { Component } from "react";

class DropDown extends Component {
  dropRef = React.createRef();
  buttonRef = React.createRef();
  //property = tai san
  constructor(props) {
    super(props);
    this.state = { isDrop: false, top: 0, left: 0 };
  }
  componentDidMount() {
    let root = document.getElementById("root");
    root.appendChild(this.dropRef.current);
    this.setState({
      top:
        this.buttonRef.current.getBoundingClientRect().top +
        this.buttonRef.current.getBoundingClientRect().height,
      left: this.buttonRef.current.getBoundingClientRect().left,
    });
  }

  render() {
    const dropDownStyle = {
      top: this.state.top + "px",
      left: this.state.left + "px",
    };
    return (
      <div
        class="dropdown"
        onClick={() => {
          this.setState({ isDrop: !this.state.isDrop });
        }}
        onMouseOver={() => {
          this.setState({ isDrop: true });
        }}
        onMouseLeave={() => {
          this.setState({ isDrop: false });
        }}
      >
        <button ref={this.buttonRef} className="btn-drop">
          {this.props.title}
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          style={dropDownStyle}
          className={
            "dropdownMenu dropdown " + (this.state.isDrop ? "isDrop" : "")
          }
          ref={this.dropRef}
        >
          {this.props.link.map((item) => {
            return (
              <a className="dropdownItem" href="#">
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DropDown;
