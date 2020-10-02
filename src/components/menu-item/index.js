import React from 'react';

import cn from 'classnames';

import {
  Container,
  TitleContainer,
  Title,
  Subtitle,
  ThumbContainer,
  ThumbImageContainer,
  ThumbImage,
  ThumbText,
  Active,
} from './index.module.css';

const ThumbNail = ({ src }) => {
  return (
    <div className={ThumbImageContainer}>
      <img src={src} className={ThumbImage} alt='Thumb' />
    </div>
  );
};

export default ({ active, ...collectionProps }) => {
  return (
    <div className={cn(Container, { [Active]: active })}>
      <div className={TitleContainer}>
        <span className={Title}>{collectionProps.title}</span>
        <span className={Subtitle}>
          {collectionProps.user.first_name} {collectionProps.user.last_name}
        </span>
      </div>
      <div className={ThumbContainer}>
        {collectionProps.preview_photos.map((photo) => {
          return <ThumbNail src={photo.urls.thumb} key={photo.urls.thumb} />;
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
