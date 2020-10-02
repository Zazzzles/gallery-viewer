import React, { useContext } from 'react';

import cn from 'classnames';

import { Container, Maximized, Image } from './index.module.css';

import NavigationContext from '../../context/navigation-context';

// https://css-tricks.com/pre-caching-image-with-react-suspense/

export default ({ urls }) => {
  const { xIndex } = useContext(NavigationContext);
  return (
    <div className={cn(Container, { [Maximized]: xIndex > 0 })}>
      <img src={urls.regular} className={Image} />
    </div>
  );
};
