import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Sample from './sample.jsx';

describe('Sample', () => {
  it('should have the content', () => {
    const sample = shallow(<Sample />);
    expect(sample.text()).to.equal('This is a sample Component');
  });
});
