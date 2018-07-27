import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <h1>Trivia Game</h1>
        <Link to="/page">start game</Link>
    </div>
);

export default HomePage;
