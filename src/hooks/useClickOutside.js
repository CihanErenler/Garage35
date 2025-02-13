import { useEffect } from 'react';

const useClickOutside = (refs, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const refsArray = Array.isArray(refs) ? refs : [refs];
      const isOutside = refsArray.every(ref => ref.current && !ref.current.contains(event.target));
      if (isOutside) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [refs, callback]);
};

export default useClickOutside; 