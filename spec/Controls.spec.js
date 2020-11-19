import React from 'react';

import Controls from '../client/.src/containers/controls/Controls.js';

describe('Controls', () => {
  const wrapper = shallow(<Controls />);


  it('Should render Controls Component', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render four buttons', () => {
    expect(wrapper.find('img').length).toEqual(4);
  });

});