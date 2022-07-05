import dummy from './topCategory1.json';
import React, { useState } from 'react';
import { Table, Accordion, Card, Button } from 'react-bootstrap';


const Category = () => {


    const [category, setcategory] = useState(dummy);

    console.log(category);

    return (<>
        <div >
            <Accordion defaultActiveKey="0" >
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Show product category with most orders
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Category ID</th>
                                    <th>Category Name</th>
                                    <th>Orders Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category.length > 0 && category.map((c, inde) =>
                                    <tr key={inde}>
                                        <td>{c.cid}</td>
                                        <td>{c.categoryName}</td>
                                        <td>{c.order}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>



    </>);
}

export default Category;