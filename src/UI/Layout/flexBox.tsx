import React, {FC} from 'react';

interface props {
    children: React.ReactNode;
    width?: number;
    direction?: 'row' | 'column'; 
    height?: number;
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    justifyContent?: 'center' | 'flex-start' | 'flex-end';
    stratch?: boolean; 
}

const FlexBox: FC<props> = ({children, width, height, direction, alignItems, justifyContent, stratch}) => {
  return (
    <div style={{
        display:'flex',
        width: width || 'auto',
        flexDirection: direction,
        height: height || '100%',
        alignItems: alignItems,
        justifyContent: justifyContent,
        flexGrow: stratch ? 1 : 0
    }}>
        {children}
    </div>
  );
}

export default FlexBox;