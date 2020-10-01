import React, { useContext } from 'react';

import {
  Container,
  Topbar,
  Title,
  CardContainer,
  CardContainerInner,
  Subtitle,
} from './index.module.css';

import PictureTile from '../picture-tile';
import PictureTileContainer from '../picture-tile-container';

import NavigationContext from '../../context/navigation-context';

const NUMBER_OF_TILE_GROUPS = 3;

export default () => {
  const { xIndex, yIndex, windowDimensions } = useContext(NavigationContext);
  return (
    <div className={Container}>
      <div className={Topbar}>
        <h1 className={Title}>Some title</h1>
        <span className={Subtitle}>34 pictures in this album</span>
      </div>
      <div className={CardContainer}>
        <div
          className={CardContainerInner}
          style={{
            transform: `translate3d(-${
              xIndex * (windowDimensions.width * 0.8)
            }px ,0,0)`,
            minWidth: `${
              NUMBER_OF_TILE_GROUPS * (windowDimensions.width * 0.8)
            }px`,
          }}
        >
          <PictureTileContainer>
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
          </PictureTileContainer>
          <PictureTileContainer>
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
          </PictureTileContainer>
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
    </div>
  );
};
