import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Route } from "react-router-dom";
import CustomerLanding from "./landingCustomer";

const Login = () => {
  return (
    <div className=" mt-3 mx-md-5">
      <Route path="/" component={CustomerLanding} exact />
      <div className="row p-0 mx-5 justify-content-between">
        <NavLink to="/" className="text-decoration-none">
          <h4 className="m-0 pt-2">SHOPAY</h4>
        </NavLink>

        <button className="btn btn-dark rounded">
          <NavLink className="text-white" to="/signup">
            SIGNUP
          </NavLink>
        </button>
      </div>
      <div className="row my-3 justify-content-center align-items-center mx-lg-5">
        <div className="col-lg-7">
          <img
            className="img-fluid"
            width="650px"
            src={`${process.env.PUBLIC_URL}/images/assests/login.jpg`}
            alt="logo"
          />
        </div>
        <div className="col-lg-5 ">
          <div className="d-flex text-center justify-content-center align-items-center">
            <div className="col-xl-9 col-12">
              <div className="card p-4  border-0">
                <FontAwesomeIcon color="black" icon={faCircleUser} size="4x" />
                <h2 className="mb-4 mt-2">Login</h2>
                {/* Form */}

                <form>
                  <div className="form-group mb-4">
                    <input
                      className="form-control"
                      name="userid"
                      type="text"
                      id="userid"
                      // value={userid}
                      // onChange={handleChangeuserid}
                      placeholder="Email"
                    />
                    {/* {errors["userid"] && (
                    <div className="alert alert-danger text-start p-0 px-2 py-1">
                      {errors["userid"]}
                    </div>
                  )} */}
                  </div>

                  <div className="form-group mb-4">
                    <input
                      name="password"
                      type="password"
                      id="password"
                      // value={password}
                      // onChange={handleChangePassword}
                      className="form-control"
                      placeholder="Password"
                    />
                    {/* {errors["password"] && (
                    <div className="alert alert-danger text-start p-0 px-2 py-1">
                      {errors["password"]}
                    </div>
                  )} */}
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
