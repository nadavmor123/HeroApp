import React, {FC} from 'react';
import { backgroundTheme } from '../../Types/themes';

interface props {
    children: React.ReactNode;
    marginTop?: number;
    marginBottom?: number;
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
    shadow?:string;
    radius?:number;
    clickable?: boolean;
}

const FlexBox: FC<props> = ({
    children, 
    marginTop,
    marginBottom,
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
    shadow,
    radius,
    background,
    clickable}) => {
  return (
    <div style={{
        display:'flex',
        width: width || '100%',
        flexDirection: direction,
        paddingRight: `${paddingRight || 0}px`,
        paddingLeft: `${paddingLeft || 0}px`,
        paddingTop: `${paddingTop || 0}px`,
        paddingBottom: `${paddingBottom || 0}px`,
        height: height || '100%',
        alignItems: alignItems || 'center',
        justifyContent: justifyContent || 'center',
        flexGrow: stratch ? 1 : 0,
        backgroundColor: background,
        marginTop: `${marginTop}px` || 0,
        marginBottom: `${marginBottom}px` || 0,
        boxShadow: shadow,
        borderRadius: `${radius}px`,
        cursor: `${clickable ? 'pointer' : 'default'}`
    }}>
        {children}
    </div>
  );
}

export default FlexBox;