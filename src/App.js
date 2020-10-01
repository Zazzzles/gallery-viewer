import React, { useEffect } from 'react';

import { Container } from './index.module.css';

import Sidebar from './components/sidebar';
import Content from './components/content';

import api from './api';

function App() {
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
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
