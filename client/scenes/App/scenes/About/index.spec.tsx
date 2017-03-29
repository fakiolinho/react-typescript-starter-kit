import * as React from 'react';
import { shallow } from 'enzyme';

import About from './';

describe('test About component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<About />);

    expect(enzymeWrapper.length).toBe(1);
  });
});
