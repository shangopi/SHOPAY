import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Form, Button, Row, Col } from "react-bootstrap";
import dummydata from './linechart1.json';
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
    const products1 = [{ "pid": 1, "productName": "Phone" }, { "pid": 2, "productName": "Laptop" }, { "pid": 3, "productName": "Light" }];
    const [productCount, setProductCount] = useState(dummydata);

    const [products, setProducts] = useState(products1);
    const [product, setproduct] = useState('oranges')

    const [labels, setLabels] = useState([]);
    const [data1, setdata1] = useState([]);


    const changeProduct = (product) => {
        setproduct(product);
        if (product != 0) { const productArray = productCount.filter((c) => c.pid == product); 


        let temp = [];
        productArray[0].graphdata.map(p => { temp.push((Object.keys(p)[0])) });
        console.log(temp);

        let temp1 = [];
        productArray[0].graphdata.map(p => { temp1.push((Object.values(p)[0])) });
        console.log("temp1", temp1);

        setLabels(temp);
        setdata1(temp1);
    }else{
        setLabels([]);
        setdata1([]);
    }
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
                        {products.map(product => (<option value={product.pid}>  {product.productName} </option>))}
                    </select>
                </Col>
            </Row>
        </Form>
        <Line options={options} data={data} />
    </>
}

export default ChartView;