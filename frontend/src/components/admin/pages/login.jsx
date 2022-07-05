import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <>
            <div style={{ height: "100vh" }}>
                <div className='login-wrapper d-flex justify-content-center align-items-center h-100'>
                    <Form className='w-50 p-5 bg-light rounded'>
                        <div className="h1"> LOGIN </div>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Customer Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className='w-100' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className=" text-center">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>

                    </Form>
                </div>
            </div>
        </>
    );
}

export default Login;