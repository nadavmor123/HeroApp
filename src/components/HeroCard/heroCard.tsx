import React, {FC} from 'react';
import {Hero} from '../../data/data';
import FlexBox from '../../UI/Layout/flexBox';
import Image from '../../UI/Image/image';

interface props {
    hero: Hero
}

const HeroCard: FC<props> = ({hero}) => {
  return (
    <FlexBox direction={'row'}>
        <FlexBox direction={'column'} stratch width={300} height={200} alignItems={'center'}>
            <Image src={hero.thumbnail}/>
        </FlexBox>
        <FlexBox direction={'row'} stratch height={60} alignItems={'center'}>
          <div>C</div>
          <div>D</div>
        </FlexBox>
    </FlexBox>
  );
}

export default HeroCard;