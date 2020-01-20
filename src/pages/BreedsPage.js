import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
//import RecipeNavbar from '../components/RecipeNavbar';
import { Redirect } from 'react-router-dom';
//import RecipeCard from '../components/RecipeCard';
import './BreedsPage.css'


class BreedsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDog: this.props.selectedDog
        }
        this.setState = ({
            selectedDog: !this.props.selectedDog
        })
        //  this.backToDogSelect = this.backToDogSelect.bind(this);
    }
    // backToDogSelect() {

    //     this.props.handlebacktohomepage();
    //     this.state.selectedDog = "";
    //       return <Redirect to="/" />





    // }

    render() {


        if (!this.state.selectedDog) {
            return <Redirect to="/" />
        }
        let { selectedDog } = this.state;

        // const recipesView = recipes.map(recipe =>
        //     <Col lg={3} md={6} key={recipe.id}>
        //         <RecipeCard recipe={recipe} />
        //     </Col>)

        return (
            <div>

                <Container>
                    <div className="recipes-header">
                        <h1 className="text-center">{this.props.selectedDog}'s Breed</h1>
                        {/* <Button variant="primary" type="button" onClick={() => { this.backToDogSelect() }}>Back to Breed Selection</Button> */}
                        <Button variant="primary" type="button" onClick={() => { this.props.handlebacktohomepage(); this.state.selectedDog = ""; }}>Back to Breed Selection</Button>
                        {/* <Button variant="primary" type="button" onClick={() => { this.setState({ selectedDog: "" }) }}>Back to Breed Selection</Button> */}

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