import React, { Component } from 'react';
import './HomePage.css';
import { Jumbotron, DropdownButton, Dropdown } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Axios from "axios";




class HomePage extends Component {
    constructor(props) {
        super(props);



    }

    render() {
        const { dogbreeds, handleSelection } = this.props;
        const listGroupItems = dogbreeds.map((dogtype, index) => {
            return (<option value={dogtype} key={index} data-index={index} > {dogtype}</option>);
        })
        if (this.props.redirectToBreedsPage) {
            return <Redirect to="/breeds" />
        }
        return (
            <div>

                <Jumbotron>
                    <h1 className="dogbreed">Dog Book</h1>
                    <p>
                        Man's Best Firend
                    </p>
                    <select onChangeCapture={handleSelection} value="" >
                        <option value="" selected disabled hidden > Choose here</option>
                        {listGroupItems}
                    </select>



                </Jumbotron>
            </div >
        );
    }
}

export default HomePage;