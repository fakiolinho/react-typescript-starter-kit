import * as React from 'react';
import { shallow } from 'enzyme';

import Main from './';

describe('test Main component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<Main />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should contain main node', () => {
    const enzymeWrapper = shallow(<Main />);

    expect(enzymeWrapper.find('main').length).toBe(1);
  });

  it('should render children', () => {
    const props = {
      children: <p>Some internal content here</p>,
    };
    const enzymeWrapper = shallow(<Main {...props} />);

    expect(enzymeWrapper.contains(<p>Some internal content here</p>)).toBeTruthy();
  });
});
