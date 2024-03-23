import React from 'react';
import styles from '../styles/HorizontalScroll.module.css';

export default function ImgScroll() {
  const imageUrls = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/6.png', '/7.png', ];
  const repeatCount = 1000;
  return (
    <div className="w-full overflow-x-hidden mt-20">
      <div className={`${styles.scrollContainer} flex w-56 space-x-4`}>
        {[...Array(repeatCount)].map((_, index) => (
          <React.Fragment key={index}>
            <img
              src={imageUrls[index % imageUrls.length]}
              alt={`Imagem ${index + 1}`}
              className="rounded-2xl"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
