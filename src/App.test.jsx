import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

jest.useFakeTimers();

it('renders without crashing', () => {
  shallow(<App />);
});

it('can start/pause', () => {
  const wrapper = mount(<App />);
  const playPauseButton = wrapper.find('button').first();
  expect(wrapper.find('Timer')).toMatchSnapshot();

  // Play
  playPauseButton.simulate('click');
  jest.runTimersToTime(1000);
  expect(wrapper.find('Timer')).toMatchSnapshot();

  // Pause
  playPauseButton.simulate('click');
  jest.runTimersToTime(1000);
  expect(wrapper.find('Timer')).toMatchSnapshot();
});

it('hide/shows the modal', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('PickerModal').exists()).toBe(false);

  // Show
  wrapper.setState({ showModal: true });
  expect(wrapper.find('PickerModal').exists()).toBe(true);

  // Hide
  wrapper.setState({ showModal: false });
  expect(wrapper.find('PickerModal').exists()).toBe(false);
});

describe('gets correct interval type', () => {
  it('gets warmup', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ interval: 0 });
    expect(wrapper.find('div > div').first()).toMatchSnapshot();
  });

  it('gets cooldown', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ interval: 3 });
    expect(wrapper.find('div > div').first()).toMatchSnapshot();
  });

  it('gets run', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ interval: 1 });
    expect(wrapper.find('div > div').first()).toMatchSnapshot();
  });

  it('gets walk', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ interval: 2 });
    expect(wrapper.find('div > div').first()).toMatchSnapshot();
  });
});