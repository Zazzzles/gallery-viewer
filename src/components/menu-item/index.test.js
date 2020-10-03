import React from 'react';
import renderer from 'react-test-renderer';

import MenuItem from './index';

const collectionProps = {
  title: '',
  user: {
    first_name: '',
    last_name: '',
  },
  preview_photos: [
    {
      urls: {
        thumb: '',
      },
    },
  ],
  total_photos: 0,
};

it('renders correctly', () => {
  const tree = renderer
    .create(<MenuItem active={true} {...collectionProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
