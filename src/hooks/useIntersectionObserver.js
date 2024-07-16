import { useEffect } from "react";

const useIntersectionObserver = (setActiveSection, elementSelectors) => {
  useEffect(() => {
    const elements = document.querySelectorAll(elementSelectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [setActiveSection, elementSelectors]);
};

export default useIntersectionObserver;
