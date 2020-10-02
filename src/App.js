import React, { useCallback, useEffect, useState } from 'react';

import { Container } from './index.module.css';

import Sidebar from './components/sidebar';
import Content from './components/content';

import useNavigationState from './helpers/use-navigation-state';

import NavigationContext from './context/navigation-context';

import api from './api';

//  Implementing chunking of requests to avoid hitting free tier request limit
//  TODO: Externalize image fetching hooks
const COLLECTION_FETCH_CHUNK_SIZE = 3;

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
  const [fetchedCollections, setFetchedCollections] = useState({});
  const [collectionOffset, setCollectionOffset] = useState(
    COLLECTION_FETCH_CHUNK_SIZE
  );
  const [activeCollection, setActiveCollection] = useState({
    title: '',
    totalPhotos: 0,
    entries: [],
  });

  const { xIndex, yIndex } = useNavigationState(2, collections.length - 1);

  const fetchMoreCollectons = (collections) => {
    //  Get next chunk of collections to fetch

    let collectionsToFetch = collections.filter((_, index) => {
      return (
        index < collectionOffset + COLLECTION_FETCH_CHUNK_SIZE &&
        index >= COLLECTION_FETCH_CHUNK_SIZE - collectionOffset
      );
    });

    //  Create requests for each collection

    let nextChunk = collectionsToFetch.map(({ id }) => {
      return api.photos.get.byCollection(id).then((res) => ({
        id,
        data: res.data,
      }));
    });

    //  Fire requests and persist

    Promise.all(nextChunk).then((results) => {
      results.forEach((res) => {
        setFetchedCollections((prevCollections) => {
          return { ...prevCollections, [res.id]: res.data };
        });
      });
      setCollectionOffset((prevOffset) => {
        return prevOffset + COLLECTION_FETCH_CHUNK_SIZE;
      });
    });
  };

  //  On mount fetch all collections

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    (async () => {
      const res = await api.collections.get.all();
      setCollections(res.data);
      res.data.forEach(async ({ id }, index) => {
        if (index < COLLECTION_FETCH_CHUNK_SIZE) {
          let res = await api.photos.get.byCollection(id);
          setFetchedCollections((prevCollections) => {
            return { ...prevCollections, [id]: res.data };
          });
        }
      });
    })();
  }, []);

  //  Eveytime yIndex or collections change, try to fetch more collections

  useEffect(() => {
    if (yIndex === collectionOffset - 1) {
      fetchMoreCollectons(collections);
    }
  }, [collections, yIndex]);

  //  Get active menu item

  useEffect(() => {
    const activeCollection = collections[yIndex];
    if (activeCollection) {
      setActiveCollection({
        title: activeCollection.title,
        totalPhotos: activeCollection.total_photos,
        entries: fetchedCollections[activeCollection.id],
      });
    }
  }, [fetchedCollections, collections, yIndex]);

  return (
    <div className={Container}>
      <NavigationContext.Provider value={{ xIndex, yIndex, windowDimensions }}>
        <Sidebar collections={collections} />
        <Content activeCollection={activeCollection} />
      </NavigationContext.Provider>
    </div>
  );
}

export default App;
