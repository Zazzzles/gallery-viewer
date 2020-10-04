import React, { useState, useEffect, useContext } from 'react';

import cn from 'classnames';

import {
  Container,
  Maximized,
  Image,
  LoaderContainer,
  Transition,
} from './index.module.css';

import NavigationContext from '../../context/navigation-context';
import Loader from '../image-loader';

export default ({ urls }) => {
  const { xIndex } = useContext(NavigationContext);
  const [activeImage, setActiveImage] = useState(urls?.regular);
  const [loaded, setLoaded] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setTransitioning(true);
    setActiveImage(urls?.regular);
  }, [urls]);

  const onImageLoad = () => {
    setLoaded(true);
    setTransitioning(false);
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
        className={cn(Image, { [Transition]: transitioning })}
        alt={'Content'}
      />
    </div>
  );
};
