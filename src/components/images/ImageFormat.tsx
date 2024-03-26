import React from 'react';

interface props {
  srcWebp: any;
  srcJp2?: any;
  fallback?: any;
  alt: any;
  styling?: any;
}

const ImgNextGen: React.FC<props> = ({ srcWebp, srcJp2, fallback, alt, styling, ...props }) => {
  return (
    <picture>
      <source srcSet={srcWebp} type="image/webp" />
      <source srcSet={srcJp2} type="image/jp2" />
      <source srcSet={fallback} type="image/jpg" />
      <img src={fallback} alt={alt} {...props} className={styling} loading="lazy" />
    </picture>
  );
};

export default ImgNextGen;
