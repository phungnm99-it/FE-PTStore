import React, { useContext } from "react";
import Admin from "./components/admin/Admin";
import { Switch, Route, Redirect } from "react-router-dom";
import { AdminContext, AdminProvider } from "./AdminContext";
import AdminLogin from "./components/admin/AdminLogin";

function Manager() {
  return (
    <div>
      <AdminProvider>
        <Switch>
          <Route exact path="/admin/login">
            <AdminLogin />
          </Route>
          <PrivateRoute pathname="/admin">
            <Admin />
          </PrivateRoute>
        </Switch>
      </AdminProvider>
    </div>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useContext(AdminContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "admin/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default Manager;
