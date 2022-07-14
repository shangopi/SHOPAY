import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Joi from "joi-browser";
import React, { useEffect, useState } from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import { RotateSpinner } from "react-spinners-kit";
import { toast } from "react-toastify";
import config from "../config/config.json";
import jwtDecode from "jwt-decode";
import CustomerLanding from "./landingCustomer";
import { useDispatch } from "react-redux";
import { addAuthDetails } from "../actions/userActions";

const Login = () => {
  const [showElement, setShowElement] = React.useState(true);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const schema = {
    email: Joi.string().required().email({ minDomainAtoms: 2 }),
    password: Joi.string().required().min(8).label("Password"),
  };

  useEffect(() => {
    localStorage.removeItem("cartItems");
    setTimeout(function () {
      setShowElement(false);
    }, 500);
  }, []);

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(
      { email: user.email, password: user.password },
      schema,
      options
    );
    const errors = {};

    if (error === null) return;
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    const errors = validate();
    if (errors) {
      toast.error(errors[Object.keys(errors)[0]], {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
      });
      setErrors(errors);
    } else {
      setErrors({});
    }

    if (errors) {
      return;
    }

    axios
      .post(`${config.REACT_APP_API}user/login`, user, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        try {
          toast.success("Login Successfully", {
            toastId: "id2",
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: 0,
          });
          const cusDetails = jwtDecode(res.data.accessToken);
          console.log(cusDetails);
          const cust_id = cusDetails.cust_id;
          if (cusDetails.usertype === "customer") {
            dispatch(addAuthDetails(cust_id));
            history.push({
              pathname: "/",
              state: { cust_id },
            });
          } else {
            localStorage.setItem("admin" , cust_id)
            history.push({
              pathname: "/Admin",
            });
          }
        } catch (error) {}
      })
      .catch((err) => {
        toast.error("Invalid Login", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: 0,
        });
      });
  };

  return (
    <>
      {/* <Route path="/" component={CustomerLanding} exact /> */}
      {showElement ? (
        <div
          className="h-100 d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <RotateSpinner size={50} color="#5A2675" loading={true} />
        </div>
      ) : (
        <div className=" mt-3 mx-md-5">
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
                    <FontAwesomeIcon
                      color="black"
                      icon={faCircleUser}
                      size="4x"
                    />
                    <h2 className="mb-4 mt-2">Login</h2>
                    {/* Form */}

                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-4">
                        <input
                          className="form-control"
                          name="email"
                          type="text"
                          id="email"
                          defaultValue={user.last_name}
                          onChange={handleChange}
                          placeholder="Email"
                        />
                        {/* {errors["email"] && (
                        <div className="alert alert-danger text-start p-0 px-2 py-1">
                          {errors["email"]}
                        </div>
                      )} */}
                      </div>

                      <div className="form-group mb-4">
                        <input
                          name="password"
                          type="password"
                          id="password"
                          defaultValue={user.last_name}
                          onChange={handleChange}
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
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
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
      )}
    </>
  );
};

export default Login;
