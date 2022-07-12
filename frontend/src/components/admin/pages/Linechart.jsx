import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col,Alert } from "react-bootstrap";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {

        title: {
            display: true,
            text: 'For a product, time period with most interest to it',
        },
    },
};

const ChartView = () => {
    const [products, setProducts] = useState([]);
    const [product, setproduct] = useState('oranges')
    const [error, seterror] = useState("Select a product")
    const [isError, setisError] = useState(true)
    const [labels, setLabels] = useState([]);
    const [data1, setdata1] = useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:3001/api/product_page/getAllProducts`)
          .then((res) => {
            setProducts(res.data);
            console.log("all products= ", res.data);
          })
          .catch((err) => console.log(err));
      }, []);

    const changeProduct = (product) => {
        // setproduct(product);
        // if (product != 0) { const productArray = productCount.filter((c) => c.pid == product); 
            setLabels([]);
            setdata1([]);
            axios
            .get(
                `http://localhost:3001/api/analysis/BestTimeForProduct?id=${product}`
            )
            .then((res) => {
                console.log(res.data);
                seterror("");
                setisError(false);
                res.data.map(p => { setLabels(prev => [...prev, p.month]) });
                res.data.map(p => { setdata1(prev => [...prev, p.count]) });

            })
            .catch((err) => {
                seterror("No orders available on selected product");
                setisError(true);
                console.log("err = ", err);
            });
    }


    const data = {
        labels,
        datasets: [
            {
                label: 'Orders',
                data: data1,
                borderColor: 'rgb(35,165,179)',
                backgroundColor: 'rgb(35,165,179)',
            }

        ],
    };

    return <>
    
        <Form className=' my-3'>
            
            
            <Row className='align-items-center mt-2  '>
                <Col className='text-right  ' >
                    <Form.Label>Product ID</Form.Label>
                </Col>
                <Col>
                    <select size="lg" className='form-select' onChange={(event) => changeProduct(event.target.value)} value={product}>
                        <option value="0"> Select Product</option>
                        {products.map(product => (<option key={product.product_id} value={product.product_id}>  {product.title} </option>))}
                    </select>
                </Col>
            </Row>
        </Form>
        {isError  ?   (<Alert variant="danger"> {error}</Alert>) : (<Line options={options} data={data} />)}
        {/* {isError ? (<Row>{error}</Row>) : (<Line options={options} data={data} />)} */}

        
    </>
}

export default ChartView;