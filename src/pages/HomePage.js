import React, { Component } from 'react';
import './HomePage.css';
import { Jumbotron, Button } from 'react-bootstrap';


class HomePage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>

                <Jumbotron>
                    <h1 className="dogbreed">Dog Book</h1>
                    <p>
                        Mans Best Firend
                    </p>
                    <p>
                        <Button variant="success" href="#/login">Login</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default HomePage;