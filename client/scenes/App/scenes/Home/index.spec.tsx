import * as React from 'react';
import { shallow } from 'enzyme';

import Home from './';

describe('test Home component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Home />);

    expect(enzymeWrapper.length).toBe(1);
  });
});
