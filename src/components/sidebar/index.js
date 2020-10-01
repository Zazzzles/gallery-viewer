import React, { useContext } from 'react';

import {
  Container,
  Logo,
  LogoWrapper,
  MenuItemWrapper,
  MenuItemWrapperInner,
} from './index.module.css';

import LogoImage from '../../static/images/main-logo.png';

import MenuItem from '../menu-item';

import NavigationContext from '../../context/navigation-context';

const items = ['item1', 'item2', 'item3', 'item4'];

export default () => {
  const { yIndex } = useContext(NavigationContext);

  return (
    <div className={Container}>
      <div className={LogoWrapper}>
        <img className={Logo} src={LogoImage} alt={'Main logo'} />
      </div>
      <div className={MenuItemWrapper}>
        <div
          className={MenuItemWrapperInner}
          style={{ transform: `translate3d(0, -${100 * yIndex}px, 0)` }}
        >
          {items.map((item, index) => {
            return <MenuItem active={yIndex === index} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
