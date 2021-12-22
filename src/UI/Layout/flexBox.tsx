import React, {FC} from 'react';
import { backgroundTheme } from '../../Types/themes';

interface props {
    children: React.ReactNode;
    width?: number | string;
    direction?: 'row' | 'column'; 
    height?: number;
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    justifyContent?: 'center' | 'flex-start' | 'flex-end';
    stratch?: boolean; 
    background?: backgroundTheme;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
}

const FlexBox: FC<props> = ({
    children, 
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingTop,
    width, 
    height, 
    direction, 
    alignItems, 
    justifyContent, 
    stratch, 
    background}) => {
  return (
    <div style={{
        display:'flex',
        width: width || '100%',
        flexDirection: direction,
        padding: `${paddingTop || 0}px ${paddingRight || 0}px ${paddingBottom || 0}px ${paddingLeft || 0}px`,
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