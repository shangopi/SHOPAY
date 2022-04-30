import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Navbar from './navbar';

class AddCatecory extends Component {
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
            <Navbar />
            
            <Container fluid className='mx-5 mt-3'>
                
                 <Row><Button className='m-3' style={btnColor}> View/Edit/Delete </Button> <Button className='m-3' style={btnColor}> Add </Button> </Row>

                <Row>
                    <h1 className='m-3'> <u>Add Catecory</u></h1>
                </Row>
                <form >
                    <Row>
                        <Col sm="10" md="5">
                            <label for="" style={flexStart} className="form-label mb-0 ">Catecory ID</label>
                            <input type="text" className="form-control mb-2" />
                        </Col>
                        <Col sm="10" md="5" >
                            <label for="" style={flexStart} className="form-label mb-0">Catecory Name</label>
                            <input type="text" className="form-control mb-2" />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="10" md="5" >
                            <label for="" style={flexStart} className="form-label mb-0">Description</label>
                            <input type="text" className="form-control mb-2" />
                        </Col>
                        <Col sm="10" md="5" >
                            <label for="" style={flexStart} className="form-label mb-0">Catecory Image</label>
                            <input type="file" className="form-control mb-2" onChange={(e) => { uploadImage(e.target.files); }} />

                        </Col>
                    </Row>

                    <Row className='m-2'><Button style={btnColor}> Add Catecory </Button></Row>
                    
                </form>
            </Container>
            </React.Fragment>
        );
    }
}

export default AddCatecory;