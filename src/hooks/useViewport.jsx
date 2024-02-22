import React, { useEffect, useState } from 'react';

export default function useViewport() {
  const [viewportmode, setViewport] = useState(true);
  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;

  useEffect(() => {
    if (viewportH > viewportW) {
      setViewport(true);
      document.documentElement.classList.add("mobile");
    } else {
      setViewport(false);
      document.documentElement.classList.remove("mobile");
    }
  }, [viewportW, viewportH, viewportmode]);
  return {viewportmode};
}

