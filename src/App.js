import React, { useEffect } from 'react';

import { Container } from './index.module.css';

import Sidebar from './components/sidebar';

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
      console.log(res);
      console.log(res2);
    })();
  }, []);

  return (
    <div className={Container}>
      <Sidebar />
      <h1>Hi</h1>
    </div>
  );
}

export default App;
