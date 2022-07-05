import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Analysis from "../components/admin/pages/analysis";
import Customer from "../components/admin/pages/orderReport";
import Quartly from "../components/admin/pages/salesReport";
import HeaderAdmin from "../components/admin/pages/header";
import Login from "./login";

const AdminLanding = () => {
  return (
    <>
      <HeaderAdmin />
      <main className="py-3">
        <Container>
           <Route path="/login" component={Login} />
           <Route path="/Admin/report" component={Quartly} />
           <Route path="/Admin/customer" component={Customer} />
           <Route path="/Admin" component={Analysis} />
        </Container>
      </main>
    </>
  );
};

export default AdminLanding;
