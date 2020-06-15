import { useState } from 'react';

export default function useVisualMode(title) {
  const [mode, setState] = useState(title);


  function transition(mode) {
    setState(mode)
  }
  
  return { mode, transition };
}