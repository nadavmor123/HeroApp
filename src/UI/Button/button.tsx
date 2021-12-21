import React, {FC, ReactNode} from 'react';
import { buttonTheme } from '../../Data/themes';

interface props {
    onClick: () => void;
    label: string;
    background: buttonTheme;
}

const Button: FC<props> = ({onClick, label, background}) => {
  return (
      <button onClick={onClick} style={{width:'100%',color:'white',backgroundColor:background}}>{label}</button>
  );
}

export default Button;