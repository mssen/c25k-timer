import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

it('renders without crashing', () => {
  shallow(<Navigation week={ 1 } day={ 1 } triggerNavigation={ () => '' } showModal={ () => '' } />);
});

describe('renders the correct previous and next week/day', () => {
  it('on last day of week', () => {
    const wrapper = shallow(<Navigation week={ 1 } day={ 3 } triggerNavigation={ () => '' } showModal={ () => '' } />);
    expect(wrapper).toMatchSnapshot();
  });

  it('on first day of week', () => {
    const wrapper = shallow(<Navigation week={ 3 } day={ 1 } triggerNavigation={ () => '' } showModal={ () => '' } />);
    expect(wrapper).toMatchSnapshot();
  });

  it('in middle of week', () => {
    const wrapper = shallow(<Navigation week={ 1 } day={ 2 } triggerNavigation={ () => '' } showModal={ () => '' } />);
    expect(wrapper).toMatchSnapshot();
  });
});

it('handles navigation to the previous day', () => {
  const triggerNavigationStub = jest.fn();
  const wrapper = shallow(<Navigation week={ 1 } day={ 2 } triggerNavigation={ triggerNavigationStub } showModal={ () => '' } />);
  wrapper.find('button').at(0).simulate('click');
  expect(triggerNavigationStub).toBeCalledWith(-1);
});

it('handles navigation to the next day', () => {
  const triggerNavigationStub = jest.fn();
  const wrapper = shallow(<Navigation week={ 1 } day={ 2 } triggerNavigation={ triggerNavigationStub } showModal={ () => '' } />);
  wrapper.find('button').at(2).simulate('click');
  expect(triggerNavigationStub).toBeCalledWith(1);
});

it('handles show modal', () => {
  const showModalStub = jest.fn();
  const wrapper = shallow(<Navigation week={ 1 } day={ 2 } triggerNavigation={ () => '' } showModal={ showModalStub } />);
  wrapper.find('button').at(1).simulate('click');
  expect(showModalStub).toBeCalled();
});