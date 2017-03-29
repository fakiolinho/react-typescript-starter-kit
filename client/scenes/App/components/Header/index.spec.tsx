import * as React from 'react';
import { shallow } from 'enzyme';

import Header from './';

describe('test Header component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Header />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should contain header node', () => {
    const enzymeWrapper = shallow(<Header />);

    expect(enzymeWrapper.find('header').length).toBe(1);
  });
});
