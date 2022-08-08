import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      navigate(`${location.pathname + location.hash}`, { replace: true })
    }
  }, [location?.pathname]);

  return null;
}
