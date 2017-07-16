import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

it('renders without crashing', () => {
  shallow(<Timer intervals={ [10] } />);
});