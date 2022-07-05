import React from 'react';
import Chart1 from "./Linechart";
import Chart2 from './Barchart';
import {Row, Col} from 'react-bootstrap';
import TopCategory from './topCategory';


const Analysis = () => {
    return (<>
        <Row>
            <Col> <Chart1 /></Col>
            <Col><Chart2 /></Col>
        </Row>
        <Row>
            <TopCategory/>
        </Row>
    </>);
}

export default Analysis;