import React from 'react';

import Slide from '../client/.src/containers/slide/Slide.js';

const photo = {
  id: 111,
  itemID: 23,
  srcURL: "https://gc-photocarousel.s3-us-west-2.amazonaws.com/gitty12.jpg"
}

const photos = [
  {
    id: 111,
    itemID: 23,
    srcURL: "https://gc-photocarousel.s3-us-west-2.amazonaws.com/gitty12.jpg"
  },
  {
    id: 112,
    itemID: 23,
    srcURL: "https://gc-photocarousel.s3-us-west-2.amazonaws.com/gitty8.jpg"
  },
  {
    id: 113,
    itemID: 23,
    srcURL: "https://gc-photocarousel.s3-us-west-2.amazonaws.com/gitty17.jpg"
  },
  {
    id: 114,
    itemID: 23,
    srcURL: "https://gc-photocarousel.s3-us-west-2.amazonaws.com/gitty21.jpg"
  },
  {
    id: 115,
    itemID: 23,
    srcURL: "https://gc-photocarousel.s3-us-west-2.amazonaws.com/gitty5.jpg"
  }
]




describe('Slide', () => {
  const wrapper = shallow(<Slide photo={photo} photos={photos} src="https://gc-photocarousel.s3-us-west-2.amazonaws.com/gitty12.jpg" currentIndex='0'/>);


  it('Should render Slide Component', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render the first photo first', () => {
    expect(photo.srcURL === photos[0].srcURL)
  });

});