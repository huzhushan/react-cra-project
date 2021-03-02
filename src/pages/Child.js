import React, { useContext } from 'react';
import {ThemeContext} from './TestHooks';

const Child = () => {
  const theme = useContext(ThemeContext)

  return (
    <div style={{color: theme.color, background: theme.background}}>Child</div>
  );
}

export default Child