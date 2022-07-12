import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Table, Modal, Alert } from "react-bootstrap";
import axios from "axios";
const Customer = () => {
    const [data, setData] = useState([]);
    const [customerid, setcustomerid] = useState("");
    const [customerArr, setCustomerArr] = useState([]);
    const [show, setShow] = useState(false);
    const [orderDetail, setOrderDetail] = useState({})


    const handleClose = () => setShow(false);


    const handleShow = (orderid) => {
        axios
            .get(`http://localhost:3001/api/order/getOrderByID?id=${orderid}`)
            .then((res) => {
                setOrderDetail(res.data[0]);
            })
            .catch((err) => console.log(err));
        setShow(true);
    };

    console.log("order details ", orderDetail);

    const [IsExist, setIsExist] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/analysis/getAllCustomerDetails`)
            .then((res) => {
                setData(res.data);
                setCustomerArr(res.data);
                console.log("all customers= ", res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleCustomerId = (e) => {
        console.log(e.target.value);
        setcustomerid(e.target.value);
        console.log("all customers = ", data);
        console.log("id = ", e.target.value);
        const customerArray = data.filter((c) => c.customer_id == e.target.value);
        if (customerArray.length === 0) {
            setCustomerArr([]);
            setIsExist(false);
        } else {
            console.log("customerArray = ", customerArray);
            setCustomerArr(customerArray);
            setIsExist(true);

            axios
                .get(
                    `http://localhost:3001/api/analysis/getCustomerDetails?id=${e.target.value}`
                )
                .then((res) => {
                    console.log("res data = ", res.data);
                })
                .catch((err) => {
                    console.log("err = ", err);
                });
        }
    };

    const handleStatus = (e, order_id) => {
        console.log(e);
        let status = e;
        if (status == "Ordered") {
            status = "shipped";
            console.log("1");
        } else if (status == "shipped") {
            status = "delivered";
            console.log("2");
        } else {
            status = "not match";
        }

        console.log(status);
        console.log(order_id);
    };

    return (
        <>
            <div className="text-center">
                {customerid.length > 0 ? (
                    <Alert key="danger" variant={IsExist == false ? "danger" : "success"}>
                        {IsExist == false ? "Customer ID not found" : "Customer ID Exist"}
                    </Alert>
                ) : (
                    <Alert key="danger" variant="primary">
                        Enter the customer ID Below
                    </Alert>
                )}
            </div>
            <Form>
                <Row className="align-items-center mt-2">
                    <Col className="text-right  ">
                        <Form.Label>Customer ID</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            placeholder="Enter customer id"
                            onChange={handleCustomerId}
                        />
                    </Col>
                </Row>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>customer id</th>
                        <th>order id</th>
                        <th>State</th>
                        <th>Ordered Date</th>
                        <th>view</th>
                    </tr>
                </thead>

                <tbody>
                    {customerArr.length > 0 &&
                        customerArr.map((order, inde) => (
                            <tr key={inde}>
                                <td>{order.customer_id}</td>
                                <td>{order.order_id}</td>
                                {/* <td>{order.product_id.map(product => product + "\n")}<br></br></td> */}
                                <td>
                                    {" "}
                                    <Button
                                        className="btn-sm"
                                        onClick={() => handleStatus(order.status, order.order_id)}
                                    >
                                        {order.status}
                                    </Button>
                                </td>
                                <td>{order.order_date}</td>

                                <td>
                                    <Button
                                        className="btn-sm"
                                        variant="primary"
                                        type="submit"
                                        onClick={() => handleShow(order.order_id)}
                                    >
                                        View
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>ORDER DETAILS HERE</Modal.Title>
                    </Modal.Header>
                    <Form>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>Order ID</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.order_id}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>Delivery method</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.delivery_method}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>Payment method</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.payment_method}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>Order date</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.order_date}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>status</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.status}
                                    readOnly
                                />
                            </Col>
                        </Row>

                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>City</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.city}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>Zip Code</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.zip_code}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>Address Line 1</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.address_line1}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>Address Line 2</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.address_line2}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>Total amount</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.total_amount}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>Is user</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    value={orderDetail.is_user}
                                    readOnly
                                />
                            </Col>
                        </Row>
                        <Row className="align-items-center mt-2">
                            <Col className="text-right">
                                <Form.Label>Products</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder=" "
                                    // value={orderDetail.products.map(p=> p.title)}
                                    readOnly
                                />
                            </Col>
                        </Row>
                       


                    </Form>

                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    );
};

export default Customer;
