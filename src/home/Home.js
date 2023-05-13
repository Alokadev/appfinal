import React, { Component } from 'react';
import './Home.css';
import store from '../img/store.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                    <h1 className="home-title">Know Your Neighbour</h1>
                    <div className="container">
                        
                        <img src={store} alt="Know Your Neighbour"></img>
                    </div>
            </div>
        )
    }
}

export default Home;