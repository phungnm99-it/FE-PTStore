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
import Register from "./components/common/Register";
import ForgotPassword from "./components/common/ForgotPassword";
import ResetPassword from "./components/common/ResetPassword";
import Contact from "./components/common/Contact";
import BrandPage from "./components/common/product/BrandPage";
import CustomProductPage from "./components/common/product/CustomProductPage";

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
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/feedback">
            <Contact />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/forgotPassword">
            <ForgotPassword />
          </Route>
          {/* <Route exact path="/product">
            <ProductPage />
          </Route> */}
          <Route exact path="/product">
            <CustomProductPage />
          </Route>
          <Route path="/phone/:id">
            <ProductDetail />
          </Route>
          <Route path="/brand/:brandName">
            <BrandPage />
          </Route>
          <PrivateRoute path="/account/:id">
            <Account />
          </PrivateRoute>
          {/* <Route path="/account/:id">
            <Account />
          </Route> */}
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>

          <Route path="/resetPassword/:id">
            <ResetPassword />
          </Route>

          <Route path="/dienthoai/:filter">
            <CustomProductPage />
          </Route>

          <Route path="/dienthoai">
            <CustomProductPage />
          </Route>
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
