import React, { useEffect } from 'react';

const ScrollingContent = ({ images }) => {
  useEffect(() => {
    const content = document.getElementById('scrolling-content');
    const contentWidth = content.scrollWidth;
    const containerWidth = content.clientWidth;
    const scrollDuration = (contentWidth / images.length) * 1000; // Vitesse de défilement (ajustez selon les besoins)

    if (contentWidth > containerWidth) {
      const animation = content.animate(
        [
          { transform: `translateX(${containerWidth}px)` },
          { transform: `translateX(-${contentWidth}px)` },
        ],
        {
          duration: scrollDuration,
          iterations: Infinity,
          fill: 'both',
        }
      );

      return () => {
        animation.cancel();
      };
    }
  }, [images]);

  return (
    <div
      id="scrolling-content"
      className="overflow-hidden whitespace-nowrap"
      style={{
        display: 'flex',
        animationTimingFunction: 'linear',
        animationPlayState: 'running',
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`inline-block mx-2`}
          style={{
            width: '100px',
            height: '100px',
            animation: 'scroll 5s linear infinite',
          }}
        />
      ))}
    </div>
  );
};

export default ScrollingContent;
