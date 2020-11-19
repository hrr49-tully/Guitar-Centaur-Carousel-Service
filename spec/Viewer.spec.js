import React from 'react';

import Viewer from '../client/.src/containers/viewer/Viewer.js';
import Slide from '../client/.src/containers/slide/Slide.js';
import Carousel from '../client/.src/containers/carousel/Carousel.js';
import Controls from '../client/.src/containers/controls/Controls.js';

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

describe('Viewer', () => {
  const wrapper = shallow(<Viewer id={1} photos={sample} show='false'/>);

  it('Should render Viewer Component', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render five slide components.', () => {
    expect(wrapper.find(Slide).length).toEqual(5);
  });

  it('Should render Controls component', () => {
    expect(wrapper.find(Controls).length).toEqual(1);
  });

  it('Should render Carousel component', () => {
    expect(wrapper.find(Carousel).length).toEqual(1);
  });

  it('Should render Carousel component', () => {
    expect(wrapper.find(Carousel).length).toEqual(1);
  });

});