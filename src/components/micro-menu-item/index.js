import React from 'react';

import cn from 'classnames';

import { Container, Active } from './index.module.css';

export default ({ active }) => {
  return <div className={cn(Container, { [Active]: active })} />;
};
