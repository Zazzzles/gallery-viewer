import React from 'react';

import { Container } from './index.module.css';

export default ({ children }) => {
  return <div className={Container}>{children}</div>;
};
