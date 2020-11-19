import React from 'react';

import Carousel from '../client/.src/containers/carousel/Carousel.js';

const sample = [
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


describe('Carousel', () => {
  const wrapper = shallow(<Carousel photos={sample}/>);
  console.log('carousel wrapper ', wrapper)


  it('Should render Carousel Component', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render child components within a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});