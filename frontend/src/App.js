import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CustomerLanding from "./screens/landingCustomer";
import Login from "./screens/login";
import AdminLanding from "./screens/landingAdmin";
import SignUp from "./screens/signup";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [url, setURL] = useState("");

  useEffect(() => {
    setURL(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div>
      <Router>
        {window.location.pathname === "/login" && (
          <Route path="/login" component={Login} exact />
        )}

        {window.location.pathname === "/signup" && (
          <Route path="/signup" component={SignUp} exact />
        )}

        {window.location.pathname !== "/login" &&
          window.location.pathname !== "/signup" && (
            <Switch>
              <Route path="/Admin/*" component={AdminLanding} exact />
              <Redirect path="/Admin" to="/Admin/analysis" />
              <Route path="/*" component={CustomerLanding} exact />
            </Switch>
          )}
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        theme="colored"
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
      />
    </div>
  );
};

export default App;
