import React from 'react';
import { shallow, mount } from 'enzyme';
import Timer from './Timer';

jest.useFakeTimers();

it('renders without crashing', () => {
  shallow(<Timer intervals={ [10] } />);
});

it('is paused when created', () => {
  const wrapper = mount(<Timer intervals={ [10] } />);
  expect(wrapper).toMatchSnapshot();
  jest.runTimersToTime(1000);
  expect(wrapper).toMatchSnapshot();
});

it('can start', () => {
  const wrapper = mount(<Timer intervals={ [10] } play={ true } />);
  expect(wrapper).toMatchSnapshot();
  jest.runTimersToTime(1000);
  expect(wrapper).toMatchSnapshot();
});

it('can pause', () => {
  const wrapper = mount(<Timer intervals={ [10] } play={ true } />);
  expect(wrapper).toMatchSnapshot();
  jest.runTimersToTime(1000);
  expect(wrapper).toMatchSnapshot();
  wrapper.setProps({ play: false });
  jest.runTimersToTime(1000);
  expect(wrapper).toMatchSnapshot();
});

it('switches over to the next segment', () => {
  const wrapper = mount(<Timer intervals={ [10] } play={ true } segment={ 1 } />);
  jest.runTimersToTime(1000);
  expect(wrapper).toMatchSnapshot();
  wrapper.setProps({ segment: 2, intervals: [5] });
  expect(wrapper).toMatchSnapshot();
});

describe('next interval', () => {
  it('goes on to the next interval', () => {
    const updateIntervalStub = jest.fn();
    const wrapper = mount(<Timer intervals={ [5, 5] } play={ true } updateInterval={ updateIntervalStub } />);
    expect(wrapper).toMatchSnapshot();
    jest.runTimersToTime(2000);
    expect(wrapper).toMatchSnapshot();
    jest.runTimersToTime(4000);
    expect(wrapper).toMatchSnapshot();
    expect(updateIntervalStub).toHaveBeenCalledWith(1);
  });

  it('stops when it was the last interval', () => {
    const updateIntervalStub = jest.fn();
    const wrapper = mount(<Timer intervals={ [5, 5] } play={ true } updateInterval={ updateIntervalStub } />);
    jest.runTimersToTime(12000);
    expect(wrapper).toMatchSnapshot();
    expect(updateIntervalStub).toHaveBeenCalledWith(1);
  });
});