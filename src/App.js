import React, { useEffect, useState } from 'react';

import { Container, LoaderContainer } from './index.module.css';

import Sidebar from './components/sidebar';
import Content from './components/content';

import useNavigationState from './helpers/use-navigation-state';

import NavigationContext from './context/navigation-context';

import WelcomeCover from './components/welcome-cover';

import Loader from './components/loader';

import toast from 'just-toasty';

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
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const [isNewUser, setIsNewUser] = useState();
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
      try {
        const res = await api.collections.get.all();
        let withCounts = [];
        for (const collection of res.data) {
          let photos = await api.photos.get.byCollection(collection.id);
          const totalEntries = photos.headers['x-total'];
          withCounts.push({
            ...collection,
            total_photos: totalEntries,
          });
        }
        setLoading(false);
        setCollections(withCounts);
      } catch (err) {
        console.log(err);
        toast('Could not fetch collections');
      }
    })();
    const visited = localStorage.getItem('visited');
    setIsNewUser(!visited);
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

  const onWelcomeDismiss = () => {
    localStorage.setItem('visited', true);
    setIsNewUser(false);
  };

  return (
    <div className={Container}>
      {isNewUser && <WelcomeCover onDismiss={onWelcomeDismiss} />}
      {loading ? (
        <div className={LoaderContainer}>
          <Loader />
        </div>
      ) : (
        <NavigationContext.Provider
          value={{ xIndex, yIndex, windowDimensions, setXLimit, setXIndex }}
        >
          <Sidebar collections={collections} />
          <Content activeCollection={activeCollection} />
        </NavigationContext.Provider>
      )}
    </div>
  );
}

export default App;
