import React, {FC} from 'react';
import { backgroundTheme } from '../../Data/themes';

interface props {
    children: React.ReactNode;
    width?: number | string;
    direction?: 'row' | 'column'; 
    height?: number;
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    justifyContent?: 'center' | 'flex-start' | 'flex-end';
    stratch?: boolean; 
    background?: backgroundTheme;
}

const FlexBox: FC<props> = ({children, width, height, direction, alignItems, justifyContent, stratch, background}) => {
  return (
    <div style={{
        display:'flex',
        width: width || '100%',
        flexDirection: direction,
        height: height || '100%',
        alignItems: alignItems,
        justifyContent: justifyContent,
        flexGrow: stratch ? 1 : 0,
        backgroundColor: background
    }}>
        {children}
    </div>
  );
}

export default FlexBox;