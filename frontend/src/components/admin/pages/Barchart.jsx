import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Form, Button, Row, Col ,Alert} from "react-bootstrap";
import axios from 'axios';
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
    const [labels, setlabels] = useState([]);
    const [entry, setEntry] = useState([]);
    const [err, seterr] = useState("Select Time Period");
    const [isError, setisError] = useState(true);

    const data = {
        labels,
        datasets: [
            {
                label: 'orders',
                data: entry,
                borderColor: 'rgb(35,165,179)',
                backgroundColor: 'rgb(35,165,179)',
            }
        ],
    };

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
    }
    const handleEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const handleSubmit = (e) => {
        setEndDate();
        setStartDate();
        setlabels([]);
        setEntry([]);
        e.preventDefault();
        axios
            .get(
                `http://localhost:3001/api/analysis/BestProductInGivenTime?start_date=${startDate}&end_date=${endDate}`
            )
            .then((res) => {
                seterr("");
                setisError(false);
                res.data.map(p => { setlabels(prev => [...prev, p.title]) });
                res.data.map(p => { setEntry(prev => [...prev, p.sales_count]) });
            })
            .catch((err) => {
                setisError(true);
                seterr("Your input date is incorrect / No orders available");
                console.log("err = ", err);
            });

    };
    //

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
                            name="startdate"
                            placeholder="Due date"
                            onChange={handleStartDate}
                        />
                    </Form.Group></Col>
                -
                <Col>

                    <Form.Group controlId="duedate">
                        <Form.Control
                            type="date"
                            name="enddate"
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
        {isError  ?   (<Alert variant="danger"> {err}</Alert>) : (<Bar options={options} data={data} />)}
        
        
    </>
}

export default ChartView1;