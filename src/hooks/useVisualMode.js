import { useState } from 'react';

export default function useVisualMode() {
  const [mode, setState] = useState('HOME');


  function transition(mode) {
    setState(mode)
  }

  return (mode, transition);
}