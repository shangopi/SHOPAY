import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class AddProduct extends Component {
    state = {}
    render() {
        const flexStart = {
            display: 'flex',
            justifyContent: 'flex-start'
        }
        const flexCenter = {
            display: 'flex',
            justifyContent: 'flex-center'
        }
        const btnColor={
            backgroundColor:'#142F61'
        }

        const uploadImage = (files) => {
            console.log(files[0]);
        }

        return (
            <React.Fragment>
            <Container fluid className='mx-5 mt-3'>
                
                 <Row><Button className='m-3' style={btnColor}> View/Edit/Delete </Button> <Button className='m-3' style={btnColor}> Add </Button> </Row>

                <Row>
                    <h1 className='m-3'> <u>Add Product</u></h1>
                </Row>
                <form >
                    <Row>
                        <Col sm="10" md="5">
                            <label for="" style={flexStart} className="form-label mb-0 ">Product ID</label>
                            <input type="text" className="form-control mb-2" />
                        </Col>
                        <Col sm="10" md="5" >
                            <label for="" style={flexStart} className="form-label mb-0">Product Name</label>
                            <input type="text" className="form-control mb-2" />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="10" md="5">
                            <label for="" style={flexStart} className="form-label mb-0 ">Price</label>
                            <input type="text" className="form-control mb-2" />
                        </Col>
                        <Col sm="10" md="5" >
                            <label for="" style={flexStart} className="form-label mb-0">Stock</label>
                            <input type="text" className="form-control mb-2" />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="10" md="5">
                            <label for="" style={flexStart} className="form-label mb-0 ">Category</label>
                            <select style={flexStart} className="custom-select mb-2" aria-label="Default select example">
                                <option selected>Open this Catecory Menu</option>
                                <option value="1">Phone</option>
                                <option value="2">Electronic Device</option>
                                <option value="3">Dress</option>
                            </select>
                        </Col>
                        <Col sm="10" md="5" >
                            <label for="" style={flexStart} className="form-label mb-0">Images</label>
                            <input type="file" className="form-control mb-2" onChange={(e) => { uploadImage(e.target.files); }} />

                        </Col>
                    </Row>

                    <Row>
                        <Col sm="10" md="5">
                            <label for="" style={flexStart} className="form-label mb-0 ">Bank Name</label>
                            <input type="text" className="form-control mb-2" />
                        </Col>
                        <Col sm="10" md="5" >
                            <label for="" style={flexStart} className="form-label mb-0">Description</label>
                            <input type="text" className="form-control mb-2" />
                        </Col>
                    </Row>

                    {/* <div className=' bg-danger mx-e-4' style={{ textAlign: 'center' }}>
                        <Button >
                            Add product
                        </Button>
                    </div> */}
                    <Row className='m-2'><Button style={btnColor}> Add Product </Button></Row>
                    
                </form>
            </Container>
            </React.Fragment>
        );
    }
}

export default AddProduct;