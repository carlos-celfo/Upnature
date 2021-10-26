
import Landing from '../components/Sections/Landing';
import Knowledge from '../components/Sections/Knowledge';
import Animals from '../components/Sections/Animals';
import Humans from '../components/Sections/Humans';
import Contactsection from '../components/Sections/Contactsection';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Contact from '../components/Contact/Contactform';
import {BrowserRouter as Router, Route } from 'react-router-dom';






function Home() {
    return (
        <div>
            <Landing />
            <Knowledge />
            <Animals />
            <Humans />
            <Contactsection />      

        </div>
    )
}

export default Home;
