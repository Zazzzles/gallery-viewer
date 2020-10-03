import React, { useEffect, useCallback } from 'react';

import {
  Container,
  Inner,
  Title,
  KeysImage,
  Text,
  TextHeading,
  TextContainer,
  ContinueContainer,
  EnterIcon,
  ContinueText,
} from './index.module.css';

import Keys from '../../static/images/keys.png';
import Enter from '../../static/images/enter.png';

export default ({ onDismiss }) => {
  const handleEvent = useCallback((event) => {
    if (event.key === 'Enter') {
      onDismiss();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEvent);
    return () => document.removeEventListener('keydown', handleEvent);
  }, [handleEvent]);

  return (
    <div className={Container}>
      <div className={Inner}>
        <span className={Title}>Welcome!</span>
        <img src={Keys} className={KeysImage} />
        <div className={TextContainer}>
          <span className={TextHeading}>Pro tip!</span>
          <span className={Text}>
            Use your directional arrows to naviate the interface
          </span>
        </div>
        <div className={ContinueContainer}>
          <span className={ContinueText}>Enter to continue</span>
          <img src={Enter} className={EnterIcon} />
        </div>
      </div>
    </div>
  );
};
