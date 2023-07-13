import { useState, useEffect } from 'react';

const useElementSize = (ref) => {
  const [elementSize, setElementSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getElementSize = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setElementSize({ width, height });
      }
    };

    // Call the function initially and add event listener for resize
    getElementSize();
    window.addEventListener('resize', getElementSize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', getElementSize);
    };
  }, [ref]);

  return elementSize;
};

export default useElementSize;