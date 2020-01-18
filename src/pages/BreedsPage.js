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

    }


    render() {


        if (!this.props.selectedDog) {
            return <Redirect to="/" />
        }

        // const recipesView = recipes.map(recipe =>
        //     <Col lg={3} md={6} key={recipe.id}>
        //         <RecipeCard recipe={recipe} />
        //     </Col>)

        return (
            <div>

                <Container>
                    <div className="recipes-header">
                        <h1>{this.props.selectedDog}'s Breed</h1>
                        {/*<Button onClick={() => { this.setState({ showNewRecipeModal: true }) }}>New Recipe</Button> */}
                    </div>
                    {/*}  <Row>
                        {recipesView}
        </Row> */}

                </Container>



            </div>
        );
    }
}

export default BreedsPage