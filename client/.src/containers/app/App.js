import React from 'react';
import reactDOM from 'react-dom';
import AppStyles from './AppStyles';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {},
      photos: []
    }
    this.getItem = this.getItem.bind(this);
  }

  getItem () {
    let options = {
      method: 'get',
      url: 'http://localhost:3000/items'
    }

    axios(options)
      .then((response) => {
        let item = response.data[Math.floor(Math.random() * response.data.length)];
        this.setState({
          item
        });
        this.getPhotosByItemID();
      })

  }

  getPhotosByItemID () {
    let itemID = this.state.item.id;

    let options = {
      method: 'post',
      url: 'http://localhost:3000/photos',
      data: {itemID}
    }
    axios(options)
      .then((response) => {
        this.setState({
          photos: response.data
        });
      })
  }

  componentDidMount () {
    this.getItem();
    console.log(this.state);
  }


  render () {
    console.log(this.state);

    return (
      <AppStyles.app>Welcome to Guitar Centaur</AppStyles.app>

    );
  }
}

export default App;