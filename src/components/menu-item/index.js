import React from 'react';

import cn from 'classnames';

import {
  Container,
  Title,
  ThumbContainer,
  ThumbImageContainer,
  ThumbImage,
  ThumbText,
  Active,
} from './index.module.css';

const ThumbNail = ({ src }) => {
  return (
    <div className={ThumbImageContainer}>
      <img src={src} className={ThumbImage} alt='Thumb image' />
    </div>
  );
};

export default ({ active, ...collectionProps }) => {
  return (
    <div className={cn(Container, { [Active]: active })}>
      <span className={Title}>{collectionProps.title}</span>
      <div className={ThumbContainer}>
        {collectionProps.preview_photos.map((photo) => {
          return <ThumbNail src={photo.urls.thumb} />;
        })}
        <span className={ThumbText}>
          +{' '}
          {collectionProps.total_photos - collectionProps.preview_photos.length}{' '}
          more
        </span>
      </div>
    </div>
  );
};
