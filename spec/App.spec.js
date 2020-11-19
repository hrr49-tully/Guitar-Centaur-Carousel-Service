
import React from 'react';

import App from '../client/.src/containers/app/App.js';

import Title from '../client/.src/containers/title/Title.js';
import Viewer from '../client/.src/containers/viewer/Viewer.js';

describe('App ', () => {
  const wrapper = shallow(<App id={1}/>);

  it('Should render App', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render one Title component.', () => {
    expect(wrapper.find(Title).length).toEqual(1);
  });

  it('Should render one Viewer component', () => {
    expect(wrapper.find(Viewer).length).toEqual(1);
  });


});