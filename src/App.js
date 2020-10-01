import React, { useEffect } from 'react';

import { Container } from './index.module.css';

import Sidebar from './components/sidebar';
import Content from './components/content';

import useNavigationState from './helpers/use-navigation-state';

import NavigationContext from './context/navigation-context';

import api from './api';

function App() {
  const { xIndex, yIndex } = useNavigationState(10, 3);

  useEffect(() => {
    (async () => {
      const query = {
        page: 1,
        per_page: 5,
      };
      const res = await api.photos.get.all(query);
      const res2 = await api.photos.get.byCollection('1020971', query);
      const res3 = await api.collections.get.all();
      console.log(res);
      console.log(res2);
      console.log(res3);
    })();
  }, []);

  return (
    <div className={Container}>
      <NavigationContext.Provider value={{ xIndex, yIndex }}>
        <Sidebar />
        <Content />
      </NavigationContext.Provider>
    </div>
  );
}

export default App;
