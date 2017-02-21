import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';


it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<App />, div);
});
