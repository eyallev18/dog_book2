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
        return (
            <div className="full_page">
                <Button variant="primary" type="button" onClick={() => { this.props.handlebacktobreedpage(); }}>Back to Breed Pictured</Button>

                <img src={this.props.src} >

                </img>
            </div>


        )


    }







}