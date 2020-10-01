import { useEffect, useState } from 'react';

const KEY_CODES = {
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
};

export default (xLimit = 10, yLimit = 10) => {
  const [xIndex, setXIndex] = useState(0);
  const [yIndex, setYIndex] = useState(0);

  useEffect(() => {
    document.addEventListener('keydown', function (event) {
      if (event.key === KEY_CODES.down) {
        console.log('Up');
        setYIndex((yIndex) => {
          if (yIndex < yLimit) {
            return yIndex + 1;
          }
          return yIndex;
        });
      }
      if (event.key === KEY_CODES.up) {
        console.log('down');
        setYIndex((yIndex) => {
          if (yIndex > 0) {
            return yIndex - 1;
          }
          return yIndex;
        });
      }
      if (event.key === KEY_CODES.left) {
        console.log('left');
        setXIndex((xIndex) => {
          if (xIndex > 0) {
            return xIndex - 1;
          }
          return xIndex;
        });
      }
      if (event.key === KEY_CODES.right) {
        console.log('right');
        setXIndex((xIndex) => {
          if (xIndex < xLimit) {
            return xIndex + 1;
          }
          return xIndex;
        });
      }
    });
  }, []);

  return { xIndex, yIndex };
};
