import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../AuthContext";
import { useContext } from "react";
import userApi from "../../api/userApi";
import "../../css/common/Login.css";
import { GoogleLogin } from "react-google-login";
import Auth from "../../config/auth";

function Login() {
  const clientId =
    "891104203595-l6kv2m9v9elvinm2ke60cprj5dlul3l1.apps.googleusercontent.com";
  let flag = false;
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    if (username === "" && password === "") alert("Enter!!!");
    else {
      formData.append("Username", username);
      formData.append("Password", password);
      let result = await userApi.login(formData);
      if (result.code === "401") {
        alert("Username or password wrong");
      } else {
        Auth.setAccessToken(result.token);
        authContext.login();
        console.log(Auth.getCurrentUser());
        history.push("/");
      }
    }
  };

  useEffect(() => {
    flag = true;
  }, []);

  const onSuccess = (res) => {
    if (flag) {
      let formData = new FormData();
      formData.append("tokenId", res.tokenId.toString());
      userApi.loginWithGoogle(formData).then((result) => {
        if (result.code === "401") {
          alert("Google đang bị lỗi, vui lòng thử lại sau!");
        } else {
          Auth.setAccessToken(result.token);
          Auth.setGoogleLogin();
          authContext.login();
          document.cookie.split(";").forEach(function (c) {
            document.cookie = c
              .replace(/^ +/, "")
              .replace(
                /=.*/,
                "=;expires=" + new Date().toUTCString() + ";path=/"
              );
          });
          history.push("/");
        }
      });
    }
  };

  const onFailure = (res) => {
    alert("Lỗi!");
    history.push("/login");
  };

  return (
    <div>
      <div className="pageLogin">
        <div className="midLogin">
          <div className="loginForm">
            <div className="form">
              <h2>ĐĂNG NHẬP</h2>
              <div className="external">
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Đăng nhập với Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  className="loginGoogleButton"
                  isSignedIn={false}
                />
              </div>

              <div className="split">
                <p>Hoặc</p>
              </div>

              <div className="internal">
                <div id="loginForm">
                  <div className="row">
                    <div className="label">Tài khoản</div>
                    <div className="inputAccount">
                      <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        required
                        name="username"
                        id="username"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="label">Mật khẩu</div>
                    <div className="inputPassword">
                      <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        required
                        name="password"
                        id="password"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="button-group">
                      <button
                        onClick={(e) => handleLogin(e)}
                        className="btn btn-submit"
                      >
                        ĐĂNG NHẬP
                      </button>
                      <Link
                        to="/register"
                        className="btn btn-link ajax-content"
                      >
                        ĐĂNG KÝ
                      </Link>
                    </div>
                  </div>

                  <div className="row">
                    <p className="forgotpass">
                      <Link to="/forgotPassword" className="ajax-content">
                        Quên mật khẩu?
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
