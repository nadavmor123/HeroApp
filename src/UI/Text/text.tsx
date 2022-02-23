import React, {FC} from 'react';
import { headerTheme } from '../../Types/themes';

interface props {
    text: string;
    size?: number;
    color?: headerTheme;
    bold?: boolean;
    lineHeight?: number;
}

const Text: FC<props> = ({text,color,size, bold, lineHeight}) => {
  return (
     <p style={{
         fontSize: size || 12 ,
         color: color || 'black',
         fontWeight: bold ? '700' : '400',
         margin: 0,
         lineHeight: `${lineHeight}px`,
         fontFamily: 'Noir No1'
     }}>{text}</p>
  );
}

export default Text;