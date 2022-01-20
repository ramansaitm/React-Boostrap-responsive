import React from 'react';
// import PropTypes from 'prop-types';
import {Spinner,Button,Form,Container,Row,Col} from "react-bootstrap";
const IncNo=()=>
{
    console.log("hi ");
    alert("Login sucessfully")
}

const Login = (props) => {
  return (
      <>
     <Container>
        <h2 className="shadow-sm text-success mt-5 p-3 text-center rounded"> Admin Login</h2>
        <Row className="mt-5">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e)=>this.setState({email:e.target.value})}   placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                        <br></br>
                    </Form.Group>
                      
                    <Button variant="success btn-block" onClick={IncNo} type="submit">
                        Login
                    </Button>
                </Form>
            </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Masud Rana. All Rights Reserved.</h6>
    </Container>
      </>
  );
};

Login.propTypes = {};

export default Login;
