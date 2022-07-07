import React from "react";
import { Container } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import Analysis from "../components/admin/pages/analysis";
import Customer from "../components/admin/pages/orderReport";
import Quartly from "../components/admin/pages/salesReport";
import HeaderAdmin from "../components/admin/pages/header";
import Login from "./login";
import PageNotFound from "./notfound";

const AdminLanding = () => {
  return (
    <>
      <HeaderAdmin />
      <main className="py-3">
        <Container>
           <Route path="/login" component={Login} />
           <Route path="/Admin/report" component={Quartly} exact/>
           <Route path="/Admin/customer" component={Customer} exact/>
           <Route path="/Admin/analysis" component={Analysis} />
           {/* <Redirect to='/wrong' /> */}
        </Container>
      </main>
    </>
  );
};

export default AdminLanding;
