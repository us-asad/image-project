import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const link = document.querySelector("#scroller");
        link.href = `${location.pathname + location.hash}`;
        link.click();
      }, 10);
    }
  }, [location?.pathname]);

  return null;
}
