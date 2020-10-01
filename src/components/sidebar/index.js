import React, { useState, useEffect, useContext } from 'react';

import cn from 'classnames';

import {
  Container,
  Minimized,
  Logo,
  LogoWrapper,
  MenuItemWrapper,
  MenuItemWrapperInner,
} from './index.module.css';

import LogoImage from '../../static/images/main-logo.png';
import LogoImageSmall from '../../static/images/logo-small.png';
import MenuItem from '../menu-item';
import MicroMenuItem from '../micro-menu-item';
import NavigationContext from '../../context/navigation-context';

export default ({ collections }) => {
  const { xIndex, yIndex } = useContext(NavigationContext);

  return (
    <div className={cn(Container, { [Minimized]: xIndex > 0 })}>
      <div className={LogoWrapper}>
        <img
          className={Logo}
          src={xIndex > 0 ? LogoImageSmall : LogoImage}
          alt={'Main logo'}
        />
      </div>
      <div className={MenuItemWrapper}>
        <div
          className={MenuItemWrapperInner}
          style={
            xIndex === 0
              ? {
                  transform: `translate3d(0, -${100 * yIndex}px, 0)`,
                }
              : {}
          }
        >
          {collections.map((collection, index) => {
            return xIndex > 0 ? (
              <MicroMenuItem
                {...collection}
                active={yIndex === index}
                key={index}
              />
            ) : (
              <MenuItem {...collection} active={yIndex === index} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
