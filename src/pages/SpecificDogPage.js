import React, { Component } from 'react'
import { Jumbotron, DropdownButton, Dropdown } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './SpecificDogPage.css'



export default class SpecificDogPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        if (!this.props.isSelected) {
            return <Redirect to="/breeds" />
        }

        return (
            <div className="full_page">
                <Button variant="primary" type="button" onClick={() => { this.props.handlebacktobreedpage(); }}>Back to Breed Pictures</Button>
                <h1 className="text-center m-5">Big picture of  {this.props.Capitalize(this.props.selectedDog)} dog</h1>
                <img src={this.props.src} >

                </img>
            </div>


        )


    }







}