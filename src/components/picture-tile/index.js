import React, { useContext } from 'react';

import cn from 'classnames';

import { Container, Maximized, Image } from './index.module.css';

import NavigationContext from '../../context/navigation-context';

export default ({ urls }) => {
  const { xIndex } = useContext(NavigationContext);
  return (
    <div className={cn(Container, { [Maximized]: xIndex > 0 })}>
      <img src={urls?.regular} loading='eager' className={Image} />
    </div>
  );
};
