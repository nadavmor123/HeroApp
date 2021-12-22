import React, {FC, ReactNode} from 'react';
import FlexBox from '../../UI/Layout/flexBox';

interface props {
    header?: ReactNode;
    body: ReactNode;
}

const Card: FC<props> = ({body, header}) => {
  return (
      <FlexBox width={'100%'} direction={'column'}>
        <FlexBox height={100} background='#EFEFF4'>
            {header}
        </FlexBox>
        <FlexBox>
            {body}
        </FlexBox>
      </FlexBox> 
  );
}

export default Card;