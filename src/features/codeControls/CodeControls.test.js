import React from 'react';
import CodeControlsConnected, {CodeControls} from './CodeControls';
import configureMockStore from 'redux-mock-store'

import {shallow,mount} from 'enzyme';


/*
it('renders code controls without crashing', () => {
  const div = document.createElement('div');
  shallow(<CodeControls />, div);
});
*/



/*it('InnerConnect, no connect', () => {
  const wrapper = mount(<InnerConnect />);
  expect(wrapper.find('h2').length).toBe(1);
  expect(wrapper.find('h2').text())
    .toBe('Inner.dispatch undefined');
});*/
it('InnerConnectConnected, with connect', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  const wrapper = mount(<Provider store={store}>
    <InnerConnectConnected />
  </Provider>);
  expect(wrapper.find('h2').length).toBe(1);
  expect(wrapper.find('h2').text())
    .toBe('Inner.dispatch defined');
});
