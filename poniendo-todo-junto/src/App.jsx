import React, { Component } from 'react';
import PersonCard from './components/PersonCard';

class App extends Component {
  render() {
    return (
      <>
        <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
        <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"} />
      </>
    );
  }
}

export default App;

