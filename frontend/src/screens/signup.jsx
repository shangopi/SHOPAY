import React, { useState } from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { addAuthDetails } from "../actions/userActions";
import { districtList } from "../constants/districts";
import axios from "axios";
import Joi from "joi-browser";
import config from "../config/config.json";

const SignUp = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    telephone: "",
    email: "",
    address_line1: "",
    address_line2: "",
    address_line3: "",
    city: "",
    zip_code: "",
    district: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  const schema = {
    email: Joi.string().required().email({ minDomainAtoms: 2 }),
    telephone: Joi.string().required().length(10).label("Telephone"),
    password: Joi.string().required().min(8).label("Password"),
    password2: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .options({ language: { any: { allowOnly: "must match password" } } }),
    zip_code: Joi.string().length(5).label("Zip Code"),
  };

  const validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(
      {
        email: user.email,
        password: user.password,
        password2: user.password2,
        telephone: user.telephone,
        zip_code: user.zip_code,
      },
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
      .post(`${config.REACT_APP_API}user/create`, user, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("success");
        console.log(res.data.cust_id);
        toast.success("Successfully Registered", {
          toastId: "id1",
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: 0,
        });
        const cust_id = res.data.cust_id;
        dispatch(addAuthDetails(cust_id));
        history.push({
          pathname: "/",
          state: cust_id ,
        });

      })
      .catch((err) => {
        toast.error("Invalid Signup", {
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
    <div className=" my-3 mx-md-5">
      {/* <Route path="/" component={CustomerLanding} exact /> */}
      <div className="row p-0 mx-5 justify-content-between">
        <NavLink to="/" className="text-decoration-none">
          <h4 className="m-0 pt-2">SHOPAY</h4>
        </NavLink>

        <button className="btn btn-dark rounded">
          <NavLink className="text-white" to="/login">
            LOGIN
          </NavLink>
        </button>
      </div>
      <div className="row my-3 justify-content-center align-items-center mx-lg-5">
        <div className="col-lg-7 ">
          <div className="d-flex text-center justify-content-center align-items-center">
            <div className="col-xl-10 col-12">
              <div className="card  border-0">
                <FontAwesomeIcon color="black" icon={faCircleUser} size="4x" />
                <h2 className="mb-4 mt-2">SignUp</h2>
                {/* Form */}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-md-6 ">
                      <input
                        className="form-control shadow"
                        name="first_name"
                        type="text"
                        id="firstName"
                        defaultValue={user.first_name}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 ">
                      <input
                        className="form-control shadow"
                        name="last_name"
                        type="text"
                        id="lastName"
                        defaultValue={user.last_name}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        className="form-control shadow"
                        name="telephone"
                        type="number"
                        id="phone"
                        defaultValue={user.telephone}
                        onChange={handleChange}
                        placeholder="Mobile No"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control shadow"
                        name="email"
                        type="text"
                        id="email"
                        defaultValue={user.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        className="form-control shadow"
                        name="password"
                        type="password"
                        id="password"
                        defaultValue={user.password2}
                        onChange={handleChange}
                        placeholder="Password"
                        autoComplete="on"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control shadow"
                        name="password2"
                        type="password"
                        id="password2"
                        autoComplete="on"
                        defaultValue={user.password2}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group ">
                    <input
                      className="form-control shadow"
                      name="address_line1"
                      type="text"
                      id="address1"
                      defaultValue={user.address_line1}
                      onChange={handleChange}
                      placeholder="Address Line 1"
                      required
                    />
                  </div>

                  <div className="form-group ">
                    <input
                      className="form-control shadow"
                      name="address_line2"
                      type="text"
                      id="address2"
                      defaultValue={user.address_line2}
                      onChange={handleChange}
                      placeholder="Address Line 2"
                    />
                  </div>

                  <div className="form-group ">
                    <input
                      className="form-control shadow"
                      name="address_line3"
                      type="text"
                      id="address3"
                      defaultValue={user.address_line3}
                      onChange={handleChange}
                      placeholder="Address Line 3"
                    />
                  </div>

                  <div className="row">
                    <div className="form-group col-md-4">
                      <input
                        className="form-control shadow"
                        name="city"
                        type="text"
                        id="city"
                        defaultValue={user.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                      />
                    </div>
                    <Form.Group
                      className="mb-3 col-md-4"
                      controlId="formBasicDistrict"
                    >
                      <Form.Control
                        required
                        className="shadow"
                        name="district"
                        as="select"
                        onChange={handleChange}
                      >
                        <option value="">Select District</option>
                        {districtList.map((district) => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>

                    <div className="form-group col-md-4">
                      <input
                        className="form-control shadow"
                        name="zip_code"
                        type="number"
                        id="zipCode"
                        defaultValue={user.zip_code}
                        onChange={handleChange}
                        placeholder="Zip Code"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                      Signup
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <img
            className="img-fluid"
            width="650px"
            src={`${process.env.PUBLIC_URL}/images/assests/login.jpg`}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
