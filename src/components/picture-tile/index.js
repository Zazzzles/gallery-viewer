import React, { useState, useEffect, useContext } from 'react';

import cn from 'classnames';

import { Container, Maximized, Image, Fade } from './index.module.css';

import NavigationContext from '../../context/navigation-context';

export default ({ urls }) => {
  const { xIndex } = useContext(NavigationContext);
  const [activeImage, setActiveImage] = useState(urls?.regular);
  const [transitioning, setTrasitioning] = useState(false);

  useEffect(() => {
    setTrasitioning(true);
    const timeout = setTimeout(() => {
      setActiveImage(urls?.regular);
    }, 400);
    return () => {
      clearTimeout(timeout);
    };
  }, [urls]);

  const onImageLoad = () => {
    setTrasitioning(false);
  };

  return (
    <div
      className={cn(Container, {
        [Maximized]: xIndex > 0,
        [Fade]: transitioning,
      })}
    >
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
