import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

function Logout() {
  let history = useHistory();
  let context = useContext(AuthContext);

  return context.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          context.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

export default Logout;
