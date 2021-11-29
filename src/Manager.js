import React, { useContext } from "react";
import Admin from "./components/admin/Admin";
import { Switch, Route, Redirect } from "react-router-dom";
import { AdminContext, AdminProvider } from "./AdminContext";
import AdminLogin from "./components/admin/AdminLogin";
import DeleteAccount from "./components/admin/account/DeleteAccount"
function Manager() {
  return (
      <AdminProvider>
        <Switch>
          <Route exact path="/admin/login">
            <AdminLogin />
          </Route>
          <PrivateRoute pathname="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute exact pathname="/admin/deleteAccount">
            <DeleteAccount/>
          </PrivateRoute>
        </Switch>
      </AdminProvider>
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
              pathname: "/admin/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default Manager;
