import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ShipperLogin from "./components/shipper/ShipperLogin";
import MenuShipper from "./components/shipper/MenuShipper";
import { ShipperProvider, ShipperContext } from "./ShipperContext";

function Shipper() {
  return (
    <ShipperProvider>
      <Switch>
        <Route exact path="/shipper/login">
          <ShipperLogin />;
        </Route>
        <PrivateRoute exact path="/shipper">
          <MenuShipper />
        </PrivateRoute>
      </Switch>
    </ShipperProvider>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useContext(ShipperContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/shipper/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default Shipper;
