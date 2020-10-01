import React from 'react';

import {
  Container,
  Logo,
  LogoWrapper,
  MenuItemWrapper,
} from './index.module.css';

import LogoImage from '../../static/images/main-logo.png';

import MenuItem from '../menu-item';

export default () => {
  return (
    <div className={Container}>
      <div className={LogoWrapper}>
        <img className={Logo} src={LogoImage} alt={'Main logo'} />
      </div>
      <div className={MenuItemWrapper}>
        <MenuItem active />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};
