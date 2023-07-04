import React from 'react';
import '../App.css';
import NavBar from '../Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from '../Components/Banner';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
        </div>
    );
};

export default Home;