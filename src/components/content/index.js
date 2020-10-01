import React from 'react';

import {
  Container,
  Topbar,
  Title,
  CardContainer,
  Subtitle,
} from './index.module.css';

import PictureTile from '../picture-tile';
import PictureTileContainer from '../picture-tile-container';

export default () => {
  return (
    <div className={Container}>
      <div className={Topbar}>
        <h1 className={Title}>Some title</h1>
        <span className={Subtitle}>34 pictures in this album</span>
      </div>
      <div className={CardContainer}>
        <PictureTileContainer>
          <PictureTile />
          <PictureTile />
          <PictureTile />
          <PictureTile />
          <PictureTile />
          <PictureTile />
        </PictureTileContainer>
      </div>
    </div>
  );
};
