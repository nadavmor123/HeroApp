import React, {FC} from 'react';

interface props {
    src:string;
}

const Image: FC<props> = ({src}) => {
  return (
    <img src={src} style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        overflow: 'hidden'
    }}/>
  );
}

export default Image;