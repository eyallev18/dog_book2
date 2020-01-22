import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonToolbar, Button } from 'react-bootstrap';
import BreedsPage from './pages/BreedsPage';
import SpecificDogPage from './pages/SpecificDogPage';
import Axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogbreeds: [],
      srcOfRandomDogList: [],
      value: 'select',
      redirectToBreedsPage: false,
      dogs: [],
      isSelected: false
    }
    this.handleSelection = this.handleSelection.bind(this);
    this.handlebacktohomepage = this.handlebacktohomepage.bind(this);
    this.showSpecificDog = this.showSpecificDog.bind(this);
    this.handlebacktobreedpage = this.handlebacktobreedpage.bind(this);
    this.refreshPage = this.refreshPage.bind(this);


  }


  async   componentDidMount() {

    var srcOfRandomDog = []
    const res = await Axios.get('https://dog.ceo/api/breeds/list/all')
    const breedNameArray = Object.keys(res.data.message)

    for (let i = 0; i < breedNameArray.length; i++) {

      const newRandom = await Axios.get('https://dog.ceo/api/breed/' + breedNameArray[i] + '/images/random')

      srcOfRandomDog.push(newRandom);
    }


    this.setState({
      dogbreeds: breedNameArray,
      srcOfRandomDogList: srcOfRandomDog

    });
    console.log(srcOfRandomDog)

  }
  async handleSelection(event) {


    // this.props.onSelectedResult(parseInt(ev.target.getAttribute("data-index")));
    this.setState({
      value: event.target.value


    });

    this.setState({

      redirectToBreedsPage: true


    });
    const breedUrl = ('https://dog.ceo/api/breed/' + event.target.value + '/images')
    const res2 = await Axios.get(breedUrl)
    const dogsToShow = Object.values(res2.data.message)


    this.setState({

      dogs: dogsToShow

    });

  }

  handlebacktohomepage() {

    this.setState({
      value: "select",
      redirectToBreedsPage: false,

    })


  }
  handlebacktobreedpage() {

    this.setState({
      isSelected: false


    })


  }

  showSpecificDog(event) {
    this.setState({
      dogToBig: event.target.src,
      isSelected: true
    })


  }
  refreshPage() {
    window.location.reload();
  }
  render() {



    return (

      <Switch>
        <Route exact path="/">
          <HomePage dogbreeds={this.state.dogbreeds} handleSelection={this.handleSelection} redirectToBreedsPage={this.state.redirectToBreedsPage} srcOfRandomDogList1={this.state.srcOfRandomDogList} refreshPage={this.refreshPage} />
        </Route>
        <Route exact path="/breeds">
          <BreedsPage selectedDog={this.state.value} handlebacktohomepage={this.handlebacktohomepage} dogsView={this.state.dogs}
            showSpecificDog={this.showSpecificDog} selected={this.state.isSelected} />

        </Route>
        <Route exact path="/specificbreed">
          <SpecificDogPage src={this.state.dogToBig} handlebacktobreedpage={this.handlebacktobreedpage} isSelected={this.state.isSelected} />

        </Route>

      </Switch>

    );
  }
}
export default App;
