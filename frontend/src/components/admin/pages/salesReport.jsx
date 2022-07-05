import React, { useState } from 'react';
import dummydata from './salesReport1.json';
import { Button, Table, Form, Col, Row } from "react-bootstrap";

const Quartly = () => {
    const [products, setProducts] = useState(dummydata);
    const [order, setOrder] = useState("ASC");
    const [year, setyear] = useState("");
    const [isSelected, setisSelected] = useState(false);

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...products].sort((a, b) => a[col] - b[col]);
            setProducts(sorted);
            setOrder("DSC");
        } else {
            const sorted = [...products].sort((a, b) => b[col] - a[col]);
            setProducts(sorted);
            setOrder("ASC");
        }

    }

    const changeYear = (e) => {
        if (e == "0") {
            setyear();
            setisSelected(false);
        }
        setyear(e);
        setisSelected(true);
    }


    return (
        <>
            <Form className=' my-3'>
                <Row className='align-items-center mt-2  '>
                    <Col className='text-right  ' >
                        <Form.Label>Year</Form.Label>
                    </Col>
                    <Col>
                        <select size="lg" className='form-select' onChange={(e) => changeYear(e.target.value)}>
                            <option value="0"> Select Year</option>
                            <option value="2022"> 2022</option>
                            <option value="2021"> 2021</option>
                            <option value="2020"> 2020</option>
                        </select>
                    </Col>
                </Row>
            </Form>

            {isSelected ? <div className='h2'>Quarterly sales report for {year} </div> : <div></div>}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th >Product Name</th>
                        <th onClick={() => sorting("q1")}>Q1 <i class="fas fa-sort"></i> </th>
                        <th onClick={() => sorting("q2")}>Q2<i class="fas fa-sort"></i></th>
                        <th onClick={() => sorting("q3")}>Q3<i class="fas fa-sort"></i></th>
                        <th onClick={() => sorting("q4")}>Q4<i class="fas fa-sort"></i></th>
                        <th onClick={() => sorting("qt")}>Total Count<i class="fas fa-sort"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 && products.map((product, inde) =>
                        <tr key={inde}>
                            <td>{product.pname}</td>
                            <td>{product.q1}</td>
                            <td>{product.q2}</td>
                            <td>{product.q3}</td>
                            <td>{product.q4}</td>
                            <td>{product.qt}</td>
                            {/* <td><Button variant="primary" type="submit">View</Button></td> */}
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default Quartly;