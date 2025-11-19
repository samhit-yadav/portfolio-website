import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, threshold = 0.3) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -40% 0px',
         // Adjusts the "top" of the viewport for intersection
        threshold: threshold,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (sectionIds.includes(section.id)) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sectionIds, threshold]);

  return activeSection;
}
