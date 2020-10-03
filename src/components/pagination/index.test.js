import React from 'react';
import renderer from 'react-test-renderer';

import Pagination from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(<Pagination pageCount={1} activePage={1} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
