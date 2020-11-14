import React from 'react';
import AppStyles from './AppStyles';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }




  render () {
    return (
      <AppStyles.app>Welcome to Guitar Centaur</AppStyles.app>

    );
  }
}

export default App;