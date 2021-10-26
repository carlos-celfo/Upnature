import Landing from '../components/Sections/Landing';
import Contactsection from '../components/Sections/Contactsection';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Contact from '../components/Contact/Contactform';
import {BrowserRouter as Router, Route } from 'react-router-dom';





function Home() {
    return (
        <div>
            <Landing />
            <Contactsection />
        </div>
    )
}

export default Home;
