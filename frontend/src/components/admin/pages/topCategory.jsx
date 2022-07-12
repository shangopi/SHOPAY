import React, { useState ,useEffect} from 'react';
import { Table, Accordion, Card, Button } from 'react-bootstrap';
import axios from 'axios';

const Category = () => {


    const [category, setcategory] = useState([]);
    
    console.log(category);


    useEffect(() => {
        axios
          .get(`http://localhost:3001/api/analysis/getProductCategoryWithMostOrders`)
          .then((res) => {
            setcategory(res.data);
            console.log("all categories= ", res.data);
          })
          .catch((err) => console.log(err));
      }, []);

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
                                        <td>{c.category_id}</td>
                                        <td>{c.category_name}</td>
                                        <td>{c.orders_count}</td>
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