import React from 'react';
import renderer from 'react-test-renderer';

import PictureTile from './index';
import NavigationContext from '../../context/navigation-context';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <NavigationContext.Provider value={{ xIndex: 0 }}>
        <PictureTile
          urls={{
            regular:
              'https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg',
          }}
        />
      </NavigationContext.Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
