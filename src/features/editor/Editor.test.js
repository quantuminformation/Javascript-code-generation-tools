import React from 'react';
import EditorConnected, {Editor} from './Editor';
import configureMockStore from 'redux-mock-store'

import {shallow,mount} from 'enzyme';



 it('renders code controls without crashing', () => {
 const div = document.createElement('div');
 shallow(<Editor />, div);
 });


