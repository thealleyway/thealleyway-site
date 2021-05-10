export const registerObserver = (ref, setVisible) => {
    const observer = new IntersectionObserver((enteries, observer) => {
      enteries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setVisible(true);
        observer.disconnect();
      });
    });
    observer.observe(ref);
  };
