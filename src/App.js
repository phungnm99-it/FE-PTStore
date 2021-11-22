import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Manager from "./Manager";
import Store from "./Store"

function App() {
  return (
    <Switch>
      <Route path="/admin">
        <Manager />
      </Route>
      <Route path="/">
        <Store />
      </Route>
    </Switch>
  );
}
export default App;
