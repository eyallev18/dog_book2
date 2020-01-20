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
      value: 'select',
      redirectToBreedsPage: false,
      dogs: []
    }
    this.handleSelection = this.handleSelection.bind(this);
    this.handlebacktohomepage = this.handlebacktohomepage.bind(this);
    // this.getBreedArray = this.getBreedArray.bind(this);

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

    // const dogSelectedbreed = this.getBreedArray(event.target.value);
    //<Redirect to="/breeds" />
    this.setState({

      dogs: dogsToShow

    });

  }


  handlebacktohomepage() {
    // this.props.onSelectedResult(parseInt(ev.target.getAttribute("data-index")));
    this.setState({
      value: "select",
      redirectToBreedsPage: false,




    })




    //<Redirect to="/breeds" />


  }

  render() {
    //alert(this.state.value)
    //alert(this.state.redirectToBreedsPage)


    // const breedNamesArray = resBreed.data.message

    //.data.message)




    //  console.log(this.state.dogbreeds.constructor.name)
    // })



    return (


      <Switch>
        <Route exact path="/">
          <HomePage dogbreeds={this.state.dogbreeds} handleSelection={this.handleSelection} redirectToBreedsPage={this.state.redirectToBreedsPage} />
        </Route>
        <Route exact path="/breeds">
          <BreedsPage selectedDog={this.state.value} handlebacktohomepage={this.handlebacktohomepage} dogsView={this.state.dogs} />

        </Route>
        <Route exact path="/specificbreed">
          <Button variant="primary" >Light</Button>

        </Route>

      </Switch>

    );
  }
}
export default App;
