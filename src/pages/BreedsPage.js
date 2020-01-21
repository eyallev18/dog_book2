import React, { Component } from 'react';
import './BreedsPage.css'
import { Container, Row, Col, Button, Modal, Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Axios from "axios";


class BreedsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
            selectedDog: this.props.selectedDog

        }

        this.setState = ({
            selectedDog: !this.props.selectedDog
        })
    }

    render() {


        if ((!this.state.selectedDog) || (this.state.selectedDog === 'select')) {
            return <Redirect to="/" />
        }
        let { selectedDog } = this.state;

        const listDogImage = this.props.dogsView.map((dogtype, index) => {
            return (
                <div className="col-md-2 m-2" >
                    <img src={dogtype} alt="not_found" ></img>
                </div>
            );
        })

        return (
            <div className="main">
                <Container>
                    <div className="recipes-header">
                        <h1 className="text-center">{this.props.selectedDog}'s Breed</h1>
                        <Button variant="primary" type="button" onClick={() => { this.props.handlebacktohomepage(); this.state.selectedDog = ""; }}>Back to Breed Selection</Button>
                    </div>
                    <div className="row">
                        {listDogImage}
                    </div>
                </Container>
            </div>
        );
    }
}

export default BreedsPage