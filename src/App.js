import React from "react";
import { AuthProvider } from "./AuthContext";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HeaderMid from "./components/MidHeader";
import Login from "./components/Login";
import EndHeader from "./components/EndHeader";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import FeaturedProducts from "./components/FeatureProduct";
import RecommendProducts from "./components/RecommendProduct";
import Cart from "./components/cart/Cart";
import ProductDetail from "./components/productDetail/ProductDetail";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header />
          <HeaderMid />
          <EndHeader />
          <Switch>
            <Route exact path="/">
              <Slide />
              <FeaturedProducts />
              <RecommendProducts />
            </Route>
            <Route exact path="/home">
              <Slide />
              <FeaturedProducts />
              <RecommendProducts />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route path="/home/phone/detail/:id">
              <ProductDetail />
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

export default App;
