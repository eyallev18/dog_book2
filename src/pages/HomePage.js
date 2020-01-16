import React, { Component } from 'react';
import './HomePage.css';
import { Jumbotron, DropdownButton, Dropdown } from 'react-bootstrap';



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
                        Man's Best Firend
                    </p>
                    <p>
                        <DropdownButton id="dropdown-basic-button" title="Dog Breed">
                            <Dropdown.Item href="#/action-1">Wolf</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default HomePage;