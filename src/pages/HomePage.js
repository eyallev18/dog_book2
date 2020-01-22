import React, { Component } from 'react';
import './HomePage.css';
import { Jumbotron, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Axios from "axios";




class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            element: "show text-center m-10 flash"

        }

        // https://dog.ceo/api/breed/{this.state.dogbreeds}/images/random

    }

    render() {


        const { dogbreeds, handleSelection } = this.props;
        const listGroupItems = dogbreeds.map((dogtype, index) => {
            return (<option value={dogtype} key={index} data-index={index} > {dogtype}</option>);
        })

        const listofdogsImage = this.props.srcOfRandomDogList1.map((dogtype, index) => {
            return (<div key={index} className="col-md-2 m-2 textalign">
                <h4 className="text-center">{this.props.Capitalize(dogbreeds[index])}</h4>
                <img src={dogtype.data.message} value={index} />
            </div>
            );
        })

        if (listofdogsImage.length > 0) {
            this.state.element += " hidden";
        }
        //alert(this.state.element);
        if (this.props.redirectToBreedsPage) {
            return <Redirect to="/breeds" />
        }
        return (
            <div>

                <Jumbotron className="tobefix">
                    <h1 className="dogbreed">Dog Book</h1>
                    <p>
                        Man's Best Firend
                    </p>
                    <select onChange={handleSelection} value="" >
                        <option value=""  > Choose here Dog Breed to view </option>
                        {listGroupItems}
                    </select>
                    <Button variant="primary" type="button" onClick={() => { this.props.refreshPage(); }}>Please click to refresh images</Button>

                    <h1 id="hidden" className={this.state.element} >Please wait while random dog Pictures are loaded </h1>
                </Jumbotron>
                <div className="randomimage row ">

                    {listofdogsImage}
                </div>
            </div >
        );
    }
}

export default HomePage;