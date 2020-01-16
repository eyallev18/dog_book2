import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonToolbar, Button } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      // <div className="App">
      //   <ButtonToolbar>
      //     <Button variant="primary">Primary</Button>
      //     <Button variant="secondary">Secondary</Button>
      //     <Button variant="success">Success</Button>
      //     <Button variant="warning">Warning</Button>
      //     <Button variant="danger">Danger</Button>
      //     <Button variant="info">Info</Button>
      //     <Button variant="light">Light</Button>
      //     <Button variant="dark">Dark</Button>
      //     <Button variant="link">Link</Button>
      //   </ButtonToolbar>
      // </div>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/breeds">
          <Button variant="primary">secondary</Button>
        </Route>
        <Route exact path="/specificbreed">
          <Button variant="primary">Light</Button>

        </Route>

      </Switch>

    );
  }
}
export default App;
