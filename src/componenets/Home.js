import React from 'react'
import information from '../../src/assets/information.svg'
import './Home.css'
import { Row, Col, Container, Form, FloatingLabel, DropdownButton, Dropdown, Button } from 'react-bootstrap'
function Home() {
    return (
        <div>
            <Row >
                <Col md={2} sm={4}>
                    <div>
                        <p>Home {'>'} My Account </p>
                    </div>

                </Col>
            </Row>
            <div>
                <h2>
                    My Account
                </h2>
            </div>
            <Row>
                <Col md={3} sm={10} xs={10} className="list1" >



                    <ul class="list-group ">
                        <li class="list-group-item ">My Account</li>
                        <li class="list-group-item borderless">My orders</li>
                        <li class="list-group-item borderless">My Wishlist</li>
                        <li class="list-group-item borderless">Account Information</li>
                        <li class="list-group-item borderless">Address Book</li>
                        <li class="list-group-item borderless">Company Profile</li>
                        <li class="list-group-item borderless">Company Structure</li>
                        <li class="list-group-item borderless">Roles and Permissions</li>
                        <li class="list-group-item borderless">Product Questions</li>
                        <li class="list-group-item borderless">My Subscriptions</li>
                    </ul>

                </Col>
                <Col md={9} sm={10} xs={10} >
                    <h4>Add Store</h4>
                    <div className='mt-4'>
                        <h6>Bussiness Information</h6>
                        <hr ></hr>
                    </div>
                    <Row>
                        <Col md={6}>
                            <Form >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label1'>Nickname*<img src={information} className="information"></img></Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label1'>Federal Tax ID</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="" />
                                </Form.Group>

                            </Form>
                            <h7>Shipping Address </h7>
                            <hr></hr>
                            <Form >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label1'>Address Line 1</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label1'>Address Line 2</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="" />
                                </Form.Group>

                            </Form>
                            <Row>
                                <Col md={6}>
                                    <Form >
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='label1'>Zip Code*</Form.Label>
                                            <Form.Control size="sm" type="integer" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='label1'>State*</Form.Label>
                                            <Form.Control size="sm" type="text" placeholder="" />
                                        </Form.Group>

                                    </Form>
                                </Col>
                                <Col md={6}>
                                    <Form >
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='label1'>City*</Form.Label>
                                            <Form.Control size="sm" type="integer" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className='label1'>Country*</Form.Label>
                                            <Form.Control size="sm" type="text" placeholder="" />
                                        </Form.Group>

                                    </Form>
                                </Col>
                            </Row>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label1'>Phone Number*</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label1'>Legal Name*</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label className='label1'>Buisness Email</Form.Label>
                                    <Form.Control size="sm" type="email" placeholder="" />
                                </Form.Group>
                            </Form>
                            <h7>Assign Address </h7>
                            <hr></hr>
                            <Form.Label className='label1'>Select User</Form.Label>
                            <FloatingLabel controlId="floatingSelect" label="" >
                                <Form.Select aria-label="Floating label select example" className="dropdown">
                                    <option>Select users</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>


                        </Col>


                    </Row>


                </Col>

            </Row>
            <Row>
                <Col md={3}></Col>
                <Col md={9}> <hr></hr></Col>
            </Row>
            <Row>
                <Col md={12}>
                    <>
                        
                        <div className='btn1'>
                            <Button variant="outline-primary" size="sm" className='btn2'>
                                Save
                            </Button>{' '}
                            <Button variant="outline-primary" size="sm" className='btn2'>
                                
                                Cancel
                            </Button>{' '}
                        </div>
                    </>
                </Col>
            </Row>



        </div>
    )
}

export default Home