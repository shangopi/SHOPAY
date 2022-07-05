import React, { useState } from 'react';
import { Form, Button, Row, Col, Table, Modal, Alert } from "react-bootstrap";
import dummydata from './customer.json';

const Customer = () => {

    const [data, setData] = useState(dummydata);
    const [customerid, setcustomerid] = useState("");
    const [customerArr, setCustomerArr] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [IsExist, setIsExist] = useState(false);

    const handleCustomerId = (e) => {
        console.log(e.target.value);
        setcustomerid(e.target.value);
        const customerArray = data.filter((c) => c.customerid === e.target.value);
        if (customerArray.length === 0) {
            console.log("Not found");
            setCustomerArr([]);
            setIsExist(false);
        } else {
            console.log("customerArray = ", customerArray);
            setCustomerArr(customerArray);
            setIsExist(true);
        }
    }

    return (
        <>

            <div className='text-center'>
                {customerid.length > 0 ?
                    (<Alert key="danger" variant={IsExist == false ? "danger" : "success"}>
                        {IsExist == false ? "Customer ID not found" : "Customer ID Exist"}
                    </Alert>) : (<Alert key="danger" variant="primary" >
                        Enter the customer ID Below
                    </Alert>)}
            </div>
            <Form >
                <Row className='align-items-center mt-2'>
                    <Col className='text-right  '>
                        <Form.Label>Customer ID</Form.Label>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Enter customer id" onChange={handleCustomerId} />
                    </Col>
                </Row>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>customer id</th>
                        <th>order id</th>
                        <th>products</th>
                        <th>state</th>
                        <th>view</th>
                    </tr>
                </thead>

                <tbody>
                    {/* return {customerArr.customerid} */}
                    {customerArr.length > 0 && customerArr[0].orders.map((order, inde) =>
                        <tr key={inde}>
                            <td>{customerid}</td>
                            <td>{order.orderid}</td>
                            <td>{order.productid.map(product => product + "\n")}<br></br></td>
                            <td>{order.state}</td>

                            <td><Button variant="primary" type="submit" onClick={handleShow}>
                                View
                            </Button></td>
                        </tr>
                    )}

                </tbody>
            </Table>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal></>
        </>
    );
}

export default Customer;