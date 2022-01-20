import React from 'react';
import {Spinner,Button,Form,Container,Row,Col} from "react-bootstrap";
const IncNo =()=>
{
    alert("signUp successfully")
}
function Signup(props) {
  return (
      <>
      <Container>
        <h3 className="shadow-sm text-success mt-5 p-3 text-center rounded dark">New-user registration form</h3>
        <Row className="mt-5">
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                <Form>
                <Form.Group controlId="formBasictext">
                        <Form.Label>Enter Full Name</Form.Label>
                        <Form.Control type="Name" onChange={(e)=>this.setState({email:e.target.value})}   placeholder="Enter your Name" required />
                    </Form.Group>

                    <br></br>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e)=>this.setState({email:e.target.value})}   placeholder="Enter email" required />
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Create a Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                        <br></br>
                    </Form.Group>
    
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Reenter Password</Form.Label>
                        <Form.Control type="password" placeholder=" Renter Password" required />
                        <br></br>
                        </Form.Group>
                    <Button variant="success btn-block" onClick={IncNo} type="submit" required >
                        Verify
                    </Button>
                </Form>
            </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Masud Rana. All Rights Reserved.</h6>
    </Container>
    </>
  );
}

Signup.propTypes = {};

export default Signup;
