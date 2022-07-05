import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Form, Button, Row, Col } from "react-bootstrap";
import dummydata from './barchart1.json';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {

    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {

        title: {
            display: true,
            text: 'Products with most number of sales in a given period',
        },
    },
};


const ChartView1 = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const temp = [];
    dummydata.map(data => temp.push(data.pname));

    const temp1 = [];
    dummydata.map(dataa => temp1.push(dataa.count));

    const [labels, setlabels] = useState(temp);
    const [data1, setdata1] = useState(temp1);

    const [dummy, setdummy] = useState(dummydata);
    console.log(temp);
    console.log(temp1);

    const data = {
        labels,
        datasets: [
            {
                label: 'orders',
                data: temp1,
                borderColor: 'rgb(35,165,179)',
                backgroundColor: 'rgb(35,165,179)',
            }
        ],
    };
    const handleStartDate = (e) => {
        setStartDate(e.target.value);
        console.log(e.target.value);
    }
    const handleEndDate = (e) => {
        setEndDate(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
    }

    return <>

        <Form className='' onSubmit={handleSubmit}>
            <Row className='align-items-center mt-2'>
                <Col className='text-right  '>
                    <Form.Label>Select period</Form.Label>
                </Col>
                <Col>
                    <Form.Group controlId="duedate">
                        <Form.Control
                            type="date"
                            name="duedate"
                            placeholder="Due date"
                            onChange={handleStartDate}
                        />
                    </Form.Group></Col>
                -
                <Col>

                    <Form.Group controlId="duedate">
                        <Form.Control
                            type="date"
                            name="duedate"
                            placeholder="Due date"
                            onChange={handleEndDate}
                        />
                    </Form.Group>
                </Col>
                <Row className='pb-3 ml-2'>
                    <Button className='btn-sm' variant="primary" type="submit" >
                        Show
                    </Button>
                </Row>


            </Row>

        </Form>
        <Bar options={options} data={data} />
    </>
}

export default ChartView1;