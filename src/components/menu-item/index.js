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

const ThumbNail = () => {
  return (
    <div className={ThumbImageContainer}>
      <img
        src={
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'
        }
        className={ThumbImage}
        alt='Thumb image'
      />
    </div>
  );
};

export default ({ active }) => {
  return (
    <div className={cn(Container, { [Active]: active })}>
      <span className={Title}>Some category</span>
      <div className={ThumbContainer}>
        <ThumbNail />
        <ThumbNail />
        <ThumbNail />
        <ThumbNail />
        <span className={ThumbText}>+ 5 more</span>
      </div>
    </div>
  );
};
