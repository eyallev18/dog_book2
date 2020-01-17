import React, { Component } from 'react';
import './HomePage.css';
import { Jumbotron, DropdownButton, Dropdown } from 'react-bootstrap';
import Axios from "axios";




class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogbreeds: [],
            value: 'select'
        }
        this.handleSelection = this.handleSelection.bind(this);
    }
    async   componentDidMount() {
        // const res = await axios.get("https://dog.ceo/api/breeds/list/all");
        // const breedNameArray = Object.keys(res.data.message);
        // return breedNameArray

        const res = await Axios.get('https://dog.ceo/api/breeds/list/all')
        //  .then(response => {
        const breedNameArray = Object.keys(res.data.message)
        console.log(breedNameArray[0])
        this.setState({
            dogbreeds: breedNameArray

        });
        //  console.log(this.state.dogbreeds.constructor.name)
        // })

    }
    handleSelection(event) {
        // this.props.onSelectedResult(parseInt(ev.target.getAttribute("data-index")));
        this.setState({ value: event.target.value });

    }

    render() {
        const { dogbreeds } = this.state;
        const listGroupItems = dogbreeds.map((dogtype, index) => {
            return (<option value={dogtype} key={index} data-index={index} action onChange={this.handleSelection}> {dogtype}</option>);
        })
        return (
            <div>

                <Jumbotron>
                    <h1 className="dogbreed">Dog Book</h1>
                    <p>
                        Man's Best Firend
                    </p>
                    <select onChange={this.handleSelection} value={this.state.value} >
                        {listGroupItems}
                    </select>



                </Jumbotron>
            </div >
        );
    }
}

export default HomePage;