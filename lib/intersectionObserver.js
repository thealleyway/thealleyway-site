export const registerObserver = (ref, setVisible) => {
  const observer = new IntersectionObserver((enteries, observer) => {
    for (const entry of enteries) {
      if (!entry.isIntersecting) {
        continue;
      }
      setVisible(true);
      observer.disconnect();
    }
  });
  observer.observe(ref);
};
