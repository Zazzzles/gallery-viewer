import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeCover from './index';

it('renders correctly', () => {
  const tree = renderer.create(<WelcomeCover />).toJSON();
  expect(tree).toMatchSnapshot();
});
