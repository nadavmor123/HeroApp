import React, {FC} from 'react';
import { headerTheme } from '../../Types/themes';

interface props {
    text: string;
    size: number;
    color: headerTheme;
    bold?: boolean;
}

const Text: FC<props> = ({text,color,size, bold}) => {
  return (
     <p style={{
         fontSize: size ,
         color: color || 'black',
         fontWeight: bold ? '700' : '400',
         margin: 0 
     }}>{text}</p>
  );
}

export default Text;