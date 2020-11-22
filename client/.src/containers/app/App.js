import React from 'react';
import reactDOM from 'react-dom';
import AppStyles from './AppStyles';
import axios from 'axios';
import Title from '../title/Title.js';
import Viewer from '../viewer/Viewer.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {},
      photos: []
    }
    this.getItem = this.getItem.bind(this)
    this.getPhotosByItemID = this.getPhotosByItemID.bind(this);
  }

  getItem () {
    let options = {
      method: 'get',
      url: '/api/items'
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
      url: '/api/photos',
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
  }


  render () {
    // console.log('toplevel state: ',this.state);
    return (
      <div>
      <div>
      <AppStyles.app>Welcome to Guitar Centaur</AppStyles.app>
      </div>
      <div>
      <Title item={this.state.item} />
      </div>
      <div>
        <Viewer photos={this.state.photos} />
      </div>
      </div>
    );
  }
}

export default App;