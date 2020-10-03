import React from 'react';
import renderer from 'react-test-renderer';

import Sidebar from './index';
import NavigationContext from '../../context/navigation-context';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <NavigationContext.Provider value={{ xIndex: 0, yIndex: 0 }}>
        <Sidebar collections={[]} />
      </NavigationContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
