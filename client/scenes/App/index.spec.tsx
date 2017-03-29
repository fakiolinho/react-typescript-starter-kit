import * as React from 'react';
import { shallow } from 'enzyme';

import App from './';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

describe('test App component', () => {
  it('should render', () => {
    const enzymeWrapper = shallow(<App />);

    expect(enzymeWrapper.length).toBe(1);
  });

  it('should contain Header, Main, Footer', () => {
    const enzymeWrapper = shallow(<App />);

    expect(enzymeWrapper.containsAllMatchingElements([
      <Header/>,
      <Main/>,
      <Footer/>,
    ])).toBeTruthy();
  });
});
