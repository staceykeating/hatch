import { useState } from 'react';

export default function useVisualMode() {
  const [mode, setState] = useState('MAIN');


  function transition(mode) {
    setState(mode)
  }
  
  return { mode, transition };
}