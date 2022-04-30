import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import logo from './login.jpg';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';


class LoginScreen extends Component {
    constructor() {
        super();
        this.state = { showPassword: false }
    }

    render() {
        return (
            <Container fluid className=''>
                {/* <LockIcon> </LockIcon> */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}><div className=' my-3 btn btn-primary bold border-white border-5'>Help</div> </div>
                <Row className="justify-content-center">
                    <Col sm="10" md="6" lg="7" className='' >
                        <img src={logo} alt="logo" height="90%" width="80% " />
                    </Col>
                    <Col sm="10" md="5" lg="5" className='' >
                        <div style={{ borderLeft: '5px  solid rgba(0, 0, 0, 256)' }} className=' px-3 pt-5 mt-5'>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}><h1 className='fw-bold pb-5'><u>LOGIN</u></h1></div>
                            <form >
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"></span>
                                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">  </span>
                                    <input type={this.state.showPassword ? "text" : "password"} class="form-control" placeholder="Password" />
                                    <button onClick={() => this.setState({ showPassword: !this.state.showPassword })} class="input-group-text" id="basic-addon1">
                                        {/* {this.state.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />} */}
                                    </button>
                                </div>
                                <div style={{ textAlign: 'end' }}> <a href="" style={{ fontStyle: 'italic', color: 'black', fontWeight: 'bold' }} > forgot password? </a> </div>

                                {/* <Form>
                                <Form.Control className='mb-3' type="text" placeholder=" Username" />
                                <Form.Control className='' type="password" placeholder="Password" />
                                <Form.Text style={{ textAlign: 'end' }} className='  '>forgot password?</Form.Text>
                                </Form> */}
                                <div style={{ fontSize: 20 }} className=' my-3 btn btn-primary bold border-white border-5'>Login</div>
                                <div>
                                    Don't have an account? <a href="" className=" link-primary italic" style={{ fontStyle: 'italic' }} > Signup</a>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LoginScreen;