import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonToolbar, Button } from 'react-bootstrap';
import BreedsPage from './pages/BreedsPage';
import Axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogbreeds: [],
      value: '',
      redirectToBreedsPage: false
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
    this.setState({
      dogbreeds: breedNameArray

    });
    //  console.log(this.state.dogbreeds.constructor.name)
    // })

  }
  handleSelection(event) {
    // this.props.onSelectedResult(parseInt(ev.target.getAttribute("data-index")));
    this.setState({
      value: event.target.value

    });

    this.setState({

      redirectToBreedsPage: true


    });


    //<Redirect to="/breeds" />


  }

  render() {
    //alert(this.state.value)
    //alert(this.state.redirectToBreedsPage)

    return (


      <Switch>
        <Route exact path="/">
          <HomePage dogbreeds={this.state.dogbreeds} handleSelection={this.handleSelection} redirectToBreedsPage={this.state.redirectToBreedsPage} />
        </Route>
        <Route exact path="/breeds">
          <BreedsPage selectedDog={this.state.value} handleSelection={this.handleSelection} />
          <Button variant="primary">Light</Button>
        </Route>
        <Route exact path="/specificbreed">
          <Button variant="primary">Light</Button>

        </Route>

      </Switch>

    );
  }
}
export default App;
