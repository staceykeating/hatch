import { useState } from 'react';

export default function useAppData() {
  const [state, setState] = useState({
    packingList: [],
    destinations: [],
    collaborators: [],
    startDate: "",
    endDate: "",
    title: "",
    description: "",
  });

  return { state, setState }
}