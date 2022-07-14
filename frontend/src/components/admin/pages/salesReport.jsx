import React, { useState } from 'react';
import { Button, Table, Form, Col, Row } from "react-bootstrap";
import axios from 'axios';
const Quartly = () => {
    const [products, setProducts] = useState([]);
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
            console.log("select year zero");
            setyear();
            setisSelected(false);
            setProducts([]);
            
        }else{
            setyear(e);
            setisSelected(true);
            axios
            .get(
                `http://localhost:3001/api/analysis/QuarterlyReport/?year=${e}`
            )
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log("err = ", err);
            });
        }
        
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
                        </select>
                    </Col>
                </Row>
            </Form>

            {isSelected ? <div className='h2'>Quarterly sales report for {year} </div> : <div></div>}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th onClick={() => sorting("Q1")}>Q1 <i className="fas fa-sort"></i> </th>
                        <th onClick={() => sorting("Q2")}>Q2<i className="fas fa-sort"></i></th>
                        <th onClick={() => sorting("Q3")}>Q3<i className="fas fa-sort"></i></th>
                        <th onClick={() => sorting("Q4")}>Q4<i className="fas fa-sort"></i></th>
                        <th onClick={() => sorting("total")}>Total Count<i className="fas fa-sort"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 && products.map((product, inde) =>
                        <tr key={inde}>
                            <td>{product.title}</td>
                            <td>{product.Q1 == null ? 0 : product.Q1}</td>
                            <td>{product.Q2 == null ? 0 : product.Q2}</td>
                            <td>{product.Q3 == null ? 0 : product.Q3}</td>
                            <td>  {product.Q4 == null ? 0 : product.Q4}</td>
                            <td>{product.total == null ? 0 : product.total}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default Quartly;