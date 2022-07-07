import React from "react";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";

const SignUp = () => {
  const districtList = [
    "Batticaloa",
    "Mannar",
    "Jaffna",
    "Kilinochchi",
    "Kandy",
    "Matale",
    "Nuwara Eliya",
    "Ampara",
    "Polonnaruwa",
    "Trincomalee",
    "Anuradhapura",
    "Vavuniya",
    "Mullaitivu",
    "Kurunegala",
    "Puttalam",
    "Ratnapura",
    "Galle",
    "Hambantota",
    "Matara",
    "Badulla",
    "Monaragala",
    "Kegalle",
    "Colombo",
    "Gampaha",
    "Kalutara",
  ];

  return (
    <div className=" my-3 mx-md-5">
      <div className="row p-0 mx-5 justify-content-between">
        <NavLink to="/" className="text-decoration-none">
          <h4 className="m-0 pt-2">SHOPAY</h4>
        </NavLink>

        <button className="btn btn-dark rounded">LOGIN</button>
      </div>
      <div className="row my-3 justify-content-center align-items-center mx-lg-5">
        <div className="col-lg-7 ">
          <div className="d-flex text-center justify-content-center align-items-center">
            <div className="col-xl-10 col-12">
              <div className="card  border-0">
                <FontAwesomeIcon color="black" icon={faCircleUser} size="4x" />
                <h2 className="mb-4 mt-2">SignUp</h2>
                {/* Form */}

                <form>
                  <div className="row">
                    <div className="form-group col-md-6 ">
                      <input
                        className="form-control shadow"
                        name="firstName"
                        type="text"
                        id="firstName"
                        // value={firstName}
                        // onChange={handleChangeFirstName}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-group col-md-6 ">
                      <input
                        className="form-control shadow"
                        name="lastName"
                        type="text"
                        id="lastName"
                        // value={lastName}
                        // onChange={handleChangeLastName}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        className="form-control shadow"
                        name="phone"
                        type="number"
                        id="phone"
                        // value={phone}
                        // onChange={handleChangePhone}
                        placeholder="Mobile No"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control shadow"
                        name="email"
                        type="email"
                        id="email"
                        // value={email}
                        // onChange={handleChangeEmail}
                        placeholder="Email"
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
                        // value={password}
                        // onChange={handleChangePassword}
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        className="form-control shadow"
                        name="password2"
                        type="password"
                        id="password2"
                        // value={password2}
                        // onChange={handleChangePassword2}
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>

                  <div className="form-group ">
                    <input
                      className="form-control shadow"
                      name="address1"
                      type="text"
                      id="address1"
                      // value={address1}
                      // onChange={handleChangeAddress1}
                      placeholder="Address Line 1"
                    />
                  </div>

                  <div className="form-group ">
                    <input
                      className="form-control shadow"
                      name="address2"
                      type="text"
                      id="address2"
                      // value={address2}
                      // onChange={handleChangeAddress2}
                      placeholder="Address Line 2"
                    />
                  </div>

                  <div className="row">
                    <div className="form-group col-md-4">
                      <input
                        className="form-control shadow"
                        name="city"
                        type="text"
                        id="city"
                        // value={city}
                        // onChange={handleChangeCity}
                        placeholder="City"
                      />
                    </div>
                    <Form.Group
                      className="mb-3 col-md-4"
                      controlId="formBasicDistrict"
                    >
                      <Form.Control
                        required
                        className="shadow"
                        as="select"
                        // onChange={handleDistrict}
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
                        name="zipCode"
                        type="number"
                        id="zipCode"
                        // value={zipCode}
                        // onChange={handleChangeZipCode}
                        placeholder="Zip Code"
                      />
                    </div>
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
