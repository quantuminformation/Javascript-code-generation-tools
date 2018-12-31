import { render, shallow } from 'enzyme';
import * as React from 'react';
import { RenderedCode } from './RenderedCode';

it('renders', () => {
  const wrapper = shallow(<RenderedCode />);

  expect(wrapper.dive().find('RenderedCode')).toHaveLength(1);
});
