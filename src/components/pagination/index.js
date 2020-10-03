import React from 'react';

import cn from 'classnames';

import { Container, Wrapper, MenuDot, MenuDotActive } from './index.module.css';

export default ({ pageCount = 10, activePage = 5 }) => {
  return (
    <div className={Container}>
      <div
        className={Wrapper}
        style={{ width: `${(pageCount > 30 ? 30 : pageCount) * 40}px` }}
      >
        {(() => {
          const toRend = [];
          for (let i = 0; i < pageCount; i++) {
            if (i < 30) {
              toRend.push(
                <div
                  key={i}
                  className={cn(MenuDot, { [MenuDotActive]: i === activePage })}
                ></div>
              );
            }
          }
          return toRend;
        })()}
      </div>
    </div>
  );
};
