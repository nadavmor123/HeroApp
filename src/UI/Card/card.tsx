import React, {FC, ReactNode} from 'react';
import FlexBox from '../../UI/Layout/flexBox';

interface props {
    header?: ReactNode;
    children: ReactNode;
}

const Card: FC<props> = ({children, header}) => {
  return (
      <FlexBox width={'100%'} direction={'column'}>
        <FlexBox height={100} background='#EFEFF4'>
            {header}
        </FlexBox>
        <FlexBox>
            {children}
        </FlexBox>
      </FlexBox> 
  );
}

export default Card;