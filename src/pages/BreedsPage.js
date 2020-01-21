import React, { Component } from 'react';
import './BreedsPage.css'
import { Container, Row, Col, Button, Modal, Card } from 'react-bootstrap';
//import RecipeNavbar from '../components/RecipeNavbar';
import { Redirect } from 'react-router-dom';
//import RecipeCard from '../components/RecipeCard';

import Axios from "axios";


class BreedsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [],
            selectedDog: this.props.selectedDog

        }
        //     this.addDog = this.addDog.bind(this);
        this.setState = ({
            selectedDog: !this.props.selectedDog
        })

        //  this.backToDogSelect = this.backToDogSelect.bind(this);
    }
    // backToDogSelect() {

    //     this.props.handlebacktohomepage();
    //     this.state.selectedDog = "";
    //       return <Redirect to="/" />

    // async componentDidMount() {
    //     const breedUrl = ('https://dog.ceo/api/breed/' + this.props.selectedDog + '/images')
    //     const res2 = await Axios.get(breedUrl)
    //     this.state.dogs = Object.values(res2.data.message)

    // this.setState({
    //     dogs: dogSelectedBreed

    // });




    // }



    // }

    render() {


        if ((!this.state.selectedDog) || (this.state.selectedDog === 'select')) {
            return <Redirect to="/" />
        }

        //  .then(response => {
        //const breedNamesIndex = Object.keys(resBreed.data.message)


        let { selectedDog } = this.state;

        // <div>

        //     <Card>
        //         <Card.Img variant="top" src={dogtype} />
        //         <Card.Body>
        //             <Card.Title></Card.Title>
        //             <Card.Text>

        //             </Card.Text>
        //         </Card.Body>
        //     </Card>

        // </div>


        // const recipesView = recipes.map(recipe =>
        //     <Col lg={3} md={6} key={recipe.id}>
        //         <RecipeCard recipe={recipe} />
        //     </Col>)
        const listDogImage = this.props.dogsView.map((dogtype, index) => {
            return (
                <div className="col-md-2 m-2" >
                    <img src={dogtype} alt="not_found" ></img>
                </div>
            );
        })
        //  key={index} data-index={index}
        return (
            <div className="main">

                <Container>
                    <div className="recipes-header">
                        <h1 className="text-center">{this.props.selectedDog}'s Breed</h1>
                        {/* <Button variant="primary" type="button" onClick={() => { this.backToDogSelect() }}>Back to Breed Selection</Button> */}
                        <Button variant="primary" type="button" onClick={() => { this.props.handlebacktohomepage(); this.state.selectedDog = ""; }}>Back to Breed Selection</Button>
                        {/* <img src={this.props.dogsView[0]} alt="state" /> */}
                        {/* <Button variant="primary" type="button" onClick={() => { this.setState({ selectedDog: "" }) }}>Back to Breed Selection</Button> */}
                    </div>
                    <div className="row">

                        {/*   <Row> */}
                        {/*key={index}>*/}

                        {listDogImage}



                        {/*    </Row>*/}

                    </div>
                    {/*  <Row>
                        {recipesView}
        </Row> */}

                </Container>



            </div>
        );
    }
}

export default BreedsPage