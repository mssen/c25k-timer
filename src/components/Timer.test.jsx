import React from 'react';
import { shallow, mount } from 'enzyme';
import Timer from './Timer';

it('renders without crashing', () => {
  shallow(<Timer intervals={ [10] } />);
});

it('is paused when created', () => {
  const wrapper = mount(<Timer intervals={ [10] } />);
});

it('can start');

it('can pause');

it('switches over to the next segment');

describe('next interval', () => {
  it('goes on to the next interval');

  it('stops when it was the last interval');
});