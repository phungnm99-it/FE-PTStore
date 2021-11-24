import React, { Component } from "react";
import "../../css/common/EndHeader.css";
import { Link } from "react-router-dom";
function EndHeader() {
  return (
    <div className="nav-row">
      <div className="container">
        <div className="row">
          {/* <div class="col-sm-6"> */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="mainmenu pull-left">
            <div className="navbarmenu">
              <DropDownItem
                key="dropdown"
                title="Điện thoại"
                link={[
                  { name: "link 1", url: "" },
                  { name: "link 2", url: "" },
                ]}
              />
              {/* <DropDownItem title="Tìm theo hãng" link={[{name: 'link 1', url: ''},{name: 'link 3', url: ''}]}/> */}
              <Link to="/home/phone" className="buttontinh">
                Sản phẩm HOT
              </Link>
              <Link to="/home/phone" className="buttontinh">
                CT Khuyến mãi
              </Link>
              <Link to="/home/feedback" className="buttontinh">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndHeader;

class DropDownItem extends Component {
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
        className="dropdown"
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
        <button ref={this.buttonRef} className="nut_dropdown">
          {this.props.title}
          <i className="fa fa-caret-down"></i>
        </button>
        <div
          style={dropDownStyle}
          className={
            "noidung_dropdown dropdown " + (this.state.isDrop ? "isDrop" : "")
          }
          ref={this.dropRef}
        >
          {this.props.link.map((item, index) => {
            return (
              <li style={{ listStyle: "none" }} key={index}>
                <Link to="/home/phone">{item.name}</Link>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
