import React, { useContext } from 'react';

import {
  Container,
  Topbar,
  Title,
  CardContainer,
  CardContainerInner,
  CardWrapper,
  Subtitle,
} from './index.module.css';

import PictureTile from '../picture-tile';

import NavigationContext from '../../context/navigation-context';

const NUMBER_OF_TILE_GROUPS = 3;

export default () => {
  const { xIndex, windowDimensions } = useContext(NavigationContext);

  const contextualCardContentWidth = `${
    windowDimensions.width * (xIndex > 0 ? 0.95 : 0.8)
  }px`;

  return (
    <div className={Container}>
      <div className={Topbar}>
        <h1 className={Title}>Some title</h1>
        <span className={Subtitle}>34 pictures in this album</span>
      </div>
      <div
        className={CardContainer}
        style={{
          width: contextualCardContentWidth,
        }}
      >
        <div
          className={CardContainerInner}
          style={{
            transform: `translate3d(-${
              xIndex * (windowDimensions.width * 0.95)
            }px ,0,0)`,
            minWidth: `${NUMBER_OF_TILE_GROUPS * contextualCardContentWidth}px`,
          }}
        >
          <div
            className={CardWrapper}
            style={{
              width: contextualCardContentWidth,
            }}
          >
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
          </div>
          <div
            className={CardWrapper}
            style={{
              width: contextualCardContentWidth,
            }}
          >
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
          </div>
          <div
            className={CardWrapper}
            style={{
              width: contextualCardContentWidth,
            }}
          >
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
            <PictureTile />
          </div>
        </div>
      </div>
    </div>
  );
};
