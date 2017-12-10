import React from 'react';
import { shallow, mount } from 'enzyme';
import Timer from './Timer';

jest.useFakeTimers();

it('renders without crashing', () => {
  shallow(
    <Timer
      intervals={[10]}
      updateInterval={() => ''}
      segment={0}
      play={false}
    />
  );
});

it('is paused when created', () => {
  const wrapper = mount(
    <Timer
      intervals={[10]}
      updateInterval={() => ''}
      segment={0}
      play={false}
    />
  );
  expect(wrapper).toMatchSnapshot();
  jest.runTimersToTime(1000);
  expect(wrapper).toMatchSnapshot();
});

it('can start / pause', () => {
  const wrapper = mount(
    <Timer intervals={[10]} updateInterval={() => ''} segment={0} play={true} />
  );
  expect(wrapper).toMatchSnapshot();
  jest.runTimersToTime(1000);
  wrapper.setProps({ play: false });
  expect(wrapper).toMatchSnapshot();
  jest.runTimersToTime(1000);
  expect(wrapper).toMatchSnapshot();
});

it('switches over to the next segment', () => {
  const wrapper = mount(
    <Timer intervals={[10]} play={true} segment={1} updateInterval={() => ''} />
  );
  jest.runTimersToTime(1000);
  wrapper.setProps({ segment: 2, intervals: [5] });
  expect(wrapper).toMatchSnapshot();
});

describe('next interval', () => {
  it('goes on to the next interval', () => {
    const updateIntervalStub = jest.fn();
    mount(
      <Timer
        intervals={[5, 5]}
        play={true}
        updateInterval={updateIntervalStub}
        segment={0}
      />
    );
    jest.runTimersToTime(6000);
    expect(updateIntervalStub).toHaveBeenCalledWith(1);
  });

  it('stops when it was the last interval', () => {
    const updateIntervalStub = jest.fn();
    mount(
      <Timer
        intervals={[5, 5]}
        play={true}
        updateInterval={updateIntervalStub}
        segment={0}
      />
    );
    jest.runTimersToTime(12000);
    expect(updateIntervalStub).toHaveBeenCalledWith(1);
  });
});
