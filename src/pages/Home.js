import React from 'react'
import Landing from '../components/Sections/Landing';
import Knowledge from '../components/Sections/Knowledge';
import Animals from '../components/Sections/Animals';
import Humans from '../components/Sections/Humans';

function Home() {
    return (
        <div>
            <Landing />
            <Knowledge />
            <Animals />
            <Humans />
        </div>
    )
}

export default Home
