import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAV_OFFSET_PX = 96; // ~ scroll-mt-24 (fixed navbar + breathing room)

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return false;

  const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
  window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
  return true;
};

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash || hash.length < 2) return;

    const id = decodeURIComponent(hash.slice(1));

    // Try immediately, then retry once after paint (for route transitions)
    if (scrollToId(id)) return;

    const raf = window.requestAnimationFrame(() => {
      scrollToId(id);
    });

    const t = window.setTimeout(() => {
      scrollToId(id);
    }, 80);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToHash;
