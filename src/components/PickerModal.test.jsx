import React from 'react';
import { shallow } from 'enzyme';
import PickerModal from './PickerModal';

it('renders without crashing', () => {
  shallow(<PickerModal segments={ [] } />);
});