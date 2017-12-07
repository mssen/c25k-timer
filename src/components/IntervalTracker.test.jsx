import React from 'react';
import { shallow } from 'enzyme';
import IntervalTracker from './IntervalTracker';

it('renders without crashing', () => {
  shallow(<IntervalTracker current={0} total={0} />);
});

it('shows Warmup when current interval is 0', () => {
  const wrapper = shallow(<IntervalTracker current={0} total={4} />);
  expect(wrapper).toMatchSnapshot();
});

it('shows Cooldown when current interval is more than total', () => {
  const wrapper = shallow(<IntervalTracker current={5} total={4} />);
  expect(wrapper).toMatchSnapshot();
});

it('shows current interval', () => {
  const wrapper = shallow(<IntervalTracker current={1} total={4} />);
  expect(wrapper).toMatchSnapshot();
});
