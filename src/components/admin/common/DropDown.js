import React, { useState } from "react";
import "../../../css/admin/dropdown.css";

function DropDown(props) {
  const [openSub, setOpen] = useState(false);
  return (
    <li
      className="nav-item"
      onMouseEnter={() => {
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      <a href="#" className="nav-link active btn-focus">
        <i className={props.icon}></i>
        {/* fas fa-user-circle nav-icon */}
        {props.name}
      </a>
      <div className="sub-nav">
        {props.subNav &&
          openSub &&
          props.subNav.map((sub, idx) => {
            return (
              <a
                className="nav-link active btn-focus"
                key={idx}
                onClick={() => {
                  sub.formChoose && sub.formChoose();
                }}
              >
                <i className={sub.icon}></i>
                {sub.name}
              </a>
            );
          })}
      </div>
    </li>
  );
}

export default DropDown;
