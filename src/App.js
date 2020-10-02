import React, { useCallback, useEffect, useState } from 'react';

import { Container } from './index.module.css';

import Sidebar from './components/sidebar';
import Content from './components/content';

import useNavigationState from './helpers/use-navigation-state';

import NavigationContext from './context/navigation-context';

import api from './api';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function App() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [collections, setCollections] = useState([]);
  const [activeCollection, setActiveCollection] = useState({
    id: '',
    name: '',
    pictureCount: 0,
  });

  const { xIndex, yIndex, setXLimit, setXIndex } = useNavigationState(
    2,
    collections.length - 1
  );

  //  On mount fetch all collections

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    (async () => {
      const res = await api.collections.get.all();
      console.log(res.data);
      setCollections(res.data);
    })();
  }, []);

  //  Get active menu item

  useEffect(() => {
    const activeCollection = collections[yIndex];
    if (activeCollection) {
      setActiveCollection({
        id: activeCollection.id,
        name: activeCollection.title,
        pictureCount: activeCollection.total_photos,
      });
    }
  }, [collections, yIndex]);

  return (
    <div className={Container}>
      <NavigationContext.Provider
        value={{ xIndex, yIndex, windowDimensions, setXLimit, setXIndex }}
      >
        <Sidebar collections={collections} />
        <Content activeCollection={activeCollection} />
      </NavigationContext.Provider>
    </div>
  );
}

export default App;
