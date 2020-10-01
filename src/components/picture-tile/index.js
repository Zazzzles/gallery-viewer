import React, { useContext } from 'react';

import cn from 'classnames';

import { Container, Maximized } from './index.module.css';

import NavigationContext from '../../context/navigation-context';

export default () => {
  const { xIndex } = useContext(NavigationContext);

  return <div className={cn(Container, { [Maximized]: xIndex > 0 })}></div>;
};
