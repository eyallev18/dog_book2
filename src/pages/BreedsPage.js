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
    selectedDogId(id) {
        this.setState({
            redirectTo: "id"
        })
    }
    render() {


        if ((!this.state.selectedDog) || (this.state.selectedDog === 'select')) {
            return <Redirect to="/" />
        }
        if (this.props.selected) {
            return <Redirect to="/specificbreed" />
        }
        let { selectedDog } = this.state;

        const listDogImage = this.props.dogsView.map((dogtype, index) => {
            return (
                <div key={index} className="col-md-2 m-2" onClick={(e) => { this.props.showSpecificDog(e) }} >
                    <img src={dogtype} alt="not_found" ></img>
                </div>
            );

        })

        return (
            <div className="main">
                <Container>
                    <div className="dog-header">
                        <h1 className="text-center">{this.props.Capitalize(this.props.selectedDog)}'s Breed</h1>
                        <h2 className="text-center">click on any image to see it in big size</h2>
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