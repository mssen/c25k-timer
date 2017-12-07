import React from 'react';
import { shallow } from 'enzyme';
import PickerModal from './PickerModal';

const segments = [
  { week: 1, day: 1 },
  { week: 1, day: 2 },
  { week: 1, day: 3 },
  { week: 2, day: 1 },
  { week: 2, day: 2 },
  { week: 2, day: 3 }
];

it('renders without crashing', () => {
  shallow(
    <PickerModal
      segments={[]}
      currentSegment={0}
      hideModal={() => ''}
      updateSegment={() => ''}
    />
  );
});

it('renders weeks and days', () => {
  const wrapper = shallow(
    <PickerModal
      segments={segments}
      currentSegment={0}
      hideModal={() => ''}
      updateSegment={() => ''}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it('handles hiding the modal', () => {
  const hideModalStub = jest.fn();
  const wrapper = shallow(
    <PickerModal
      segments={[]}
      currentSegment={0}
      hideModal={hideModalStub}
      updateSegment={() => ''}
    />
  );
  wrapper
    .find('button')
    .first()
    .simulate('click');
  expect(hideModalStub).toBeCalled();
});

it('handles updating the segment', () => {
  const updateSegmentStub = jest.fn();
  const wrapper = shallow(
    <PickerModal
      segments={segments}
      currentSegment={3}
      hideModal={() => ''}
      updateSegment={updateSegmentStub}
    />
  );
  wrapper
    .find('div > button')
    .first()
    .simulate('click');
  expect(updateSegmentStub).toBeCalledWith(-3);
});
