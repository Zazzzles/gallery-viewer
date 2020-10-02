import React, { useContext } from 'react';

import cn from 'classnames';

import { Container, Maximized } from './index.module.css';

import NavigationContext from '../../context/navigation-context';

// https://css-tricks.com/pre-caching-image-with-react-suspense/

export default () => {
  const { xIndex } = useContext(NavigationContext);

  return <div className={cn(Container, { [Maximized]: xIndex > 0 })}></div>;
};
