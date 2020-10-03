import React from 'react';
import renderer from 'react-test-renderer';

import MicroMenuItem from './index';

it('renders correctly', () => {
  const tree = renderer.create(<MicroMenuItem active={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
