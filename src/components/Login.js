import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useContext } from "react";
import userApi from "../api/userApi";
import "../css/Login.css";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
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
        auth.login(() => {
          history.push("/");
        });
      }
    }
  };

  return (
    <div>
      <div className="pageLogin">
        <div className="midLogin">
          <div className="loginForm">
            <div className="form">
              <h2>ĐĂNG NHẬP</h2>
              <div className="external">{/* <LoginWithGoogle /> */}</div>

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
                        to="/home/pageregister"
                        className="btn btn-link ajax-content"
                      >
                        ĐĂNG KÝ
                      </Link>
                    </div>
                  </div>

                  <div className="row">
                    <p className="forgotpass">
                      <Link to="/home/forgotpass" className="ajax-content">
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
