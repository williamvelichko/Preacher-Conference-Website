import React from 'react';

interface props {
  srcWebp: any;
  //   srcJrx: any;
  //   srcJp2: any;
  fallback?: any;
  alt: any;
  styling?: any;
}

const ImgNextGen: React.FC<props> = ({ srcWebp, fallback, alt, styling, ...props }) => {
  return (
    <picture>
      <source srcSet={srcWebp} type="image/webp" />
      {/* <source srcset={srcJrx} type="image/jxr" />
      <source srcset={srcJp2} type="image/jp2" /> */}
      <source srcSet={fallback} type="image/jpg" />
      <img src={fallback} alt={alt} {...props} className={styling} loading="lazy" />
    </picture>
  );
};

export default ImgNextGen;
