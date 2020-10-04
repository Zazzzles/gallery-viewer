import React, { useState, useEffect, useContext } from 'react';

import cn from 'classnames';

import {
  Container,
  Maximized,
  Image,
  LoaderContainer,
} from './index.module.css';

import NavigationContext from '../../context/navigation-context';
import Loader from '../image-loader';

export default ({ urls }) => {
  const { xIndex } = useContext(NavigationContext);
  const [activeImage, setActiveImage] = useState(urls?.regular);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setActiveImage(urls?.regular);
  }, [urls]);

  const onImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={cn(Container, {
        [Maximized]: xIndex > 0,
      })}
    >
      {!loaded && (
        <div className={LoaderContainer}>
          <Loader />
        </div>
      )}
      <img
        src={activeImage}
        onLoad={onImageLoad}
        loading='eager'
        className={Image}
        alt={'Content'}
      />
    </div>
  );
};
