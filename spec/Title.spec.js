import React from 'react';

import Title from '../client/.src/containers/title/Title.js';

const sample = {
  POSNum: 37854,
  avgScore: 5,
  id: 23,
  itemNum: 65771,
  reviewCount: 37,
  title: "Cloned ubiquitous Refined Granite Keyboard"
}

describe('Title', () => {
  const wrapper = shallow(<Title id={1} item={sample}/>);

  it('Should render Title Component', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should render correct Title', () => {
    expect(wrapper.text()).toContain(sample.title);
  });

  it('Should render correct Item Number', () => {
    expect(wrapper.text()).toContain(sample.itemNum);
  });

  it('Should render correct POS Number', () => {
    expect(wrapper.text()).toContain(sample.POSNum);
  });

  it('Should render correct Review Count', () => {
    expect(wrapper.text()).toContain(sample.reviewCount);
  });

});