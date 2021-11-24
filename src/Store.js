import React from "react";
import { AuthProvider } from "./AuthContext";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import Header from "./components/common/Header";
import Account from "./components/customer/Account";
import { Switch, Route, Redirect } from "react-router-dom";
import HeaderMid from "./components/common/MidHeader";
import Login from "./components/common/Login";
import EndHeader from "./components/common/EndHeader";
import Footer from "./components/common/Footer";
import Slide from "./components/common/Slide";
import FeaturedProducts from "./components/common/FeatureProduct";
import RecommendProducts from "./components/common/RecommendProduct";
import Cart from "./components/cart/Cart";
import ProductDetail from "./components/productDetail/ProductDetail";
import OrderDetail from "./components/customer/orderDetail/OrderDetail";

function App() {
  return (
    <div>
      <AuthProvider>
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
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>
          <PrivateRoute path="/orderDetail">
            <OrderDetail />
          </PrivateRoute>
        </Switch>
        <Footer />
      </AuthProvider>
    </div>
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

export default App;
