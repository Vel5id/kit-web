import React, { useRef, useState, useEffect } from 'react';

const FadeSection = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Обновляем состояние в зависимости от того, пересекается ли элемент с областью видимости
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 } // Порог можно настроить под себя
    );
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={domRef} className={`fade ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeSection;
