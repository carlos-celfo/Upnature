import React, { Component } from 'react';
import { Container, Row, Col , Form, } from 'react-bootstrap'; 
import { useForm } from 'react-hook-form';


const ContactForm =() =>{
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm ();

    const onSubmit = async (data) =>{
        const { name, email, subject, message } = data;

        console.log ('Name: ', name);
        console.log ('Email: ', email);
        console.log ('Subject: ', subject);
        console.log ('Message: ', message);
    };

    return (
        <div className='ContactForm'>
           <Container fluid>   
                <Row className="justify-content-md-center py-5">
                <Col xs={12} md={8} lg={8}> 
                        
                            <Form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <Form.Row>
                                    <Form.Group controlId="formGridName" className="col-sm-12 col-md-6">  
                                    <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    {...register('name', {
                                            required: { value: true, message: 'Please enter your name'},
                                            maxLength: {
                                                value: 30,
                                                message: 'Please use 30 characters or less'
                                            }
                                        })}
                                    /> {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail" className="col-sm-12 col-md-6"> 
                                    <Form.Control
                                        type="email"
                                        placeholder="email@gmail.com"
                                        name="email" 
                                        {...register('email', {
                                            required: true,
                                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                        })}
                                        />{errors.email && (
                                    <span className='errorMessage'>Please enter a valid email address</span>)}
                                </Form.Group>
                                </Form.Row>
                                <Form.Group controlId="formGridSubject"> 
                                <Form.Control
                                    type="text"
                                    placeholder="What is the subject?"
                                    name="subject"
                                    {...register('subject', {
                                            required: {
                                            value: true,
                                            message: 'Please enter a subject'
                                            },
                                            maxLength: {
                                            value: 75,
                                            message: 'Subject cannot exceed 75 characters'
                                            }
                                        })}
                                    />{errors.subject && (
                                    <span className='errorMessage'>{errors.subject.message}</span>)}
                                </Form.Group>   
                                <Form.Group controlId="exampleForm.message"> 
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    placeholder="Message"
                                    name="message"
                                    {...register('message', {
                                                required: true
                                    })}          
                                />{errors.message && <span className='errorMessage'>Please enter a message</span>}
                            </Form.Group> 
                            <button className="bt-submit" type="submit" >
                                Send Message
                            </button>        
                                
                            </Form>
                        </Col>
                    </Row>    
                
            </Container>
        </div>
    
    );
};

export default ContactForm;

