import { useEffect, useRef } from 'react';
import './fadeSection.css'; // файл стилей

const FadeSection = ({ children }) => {
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Если элемент попадает в область видимости, добавляем класс для плавного появления,
          // иначе удаляем его для эффекта растворения.
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      {
        threshold: 0.1, // настройка порога, когда элемент считается видимым
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fade-section" ref={domRef}>
      {children}
    </div>
  );
};

export default FadeSection;
