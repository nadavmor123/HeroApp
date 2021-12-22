import React, {FC} from 'react';
import { formatDateString } from '../../AppLogic/Utils/date';
import {Hero} from '../../Types/data';
import FlexBox from '../../UI/Layout/flexBox';
import Text from '../../UI/Text/text'

interface props {
    hero?: Hero
}

const HeroDetails: FC<props> = ({hero}) => {
  return hero ? (
    <FlexBox direction={'column'} background={'#EFEFF4'}>
      <FlexBox height={20} paddingTop={20} paddingLeft={40}>
         <Text text={'HERO DESCRIPTION'} size={20} bold color={'#4310AE'}/>
      </FlexBox>
         <FlexBox direction={'column'} paddingTop={40} paddingLeft={40} paddingBottom={40} paddingRight={40}>
           <FlexBox direction={'row'}>
              <FlexBox direction={'column'}>
                <Text text={'id'} size={14} bold color={'#000000'}/>
                <Text text={String(hero.id)} size={14} bold color={'#4310AE'}/>
              </FlexBox>    
              <FlexBox direction={'column'}>
                <Text text={'name'} size={14} bold color={'#000000'}/>
                <Text text={String(hero.name)} size={14} bold color={'#4310AE'}/>
              </FlexBox>                
           </FlexBox>
           <FlexBox direction={'row'}>
              <FlexBox direction={'column'}>
                <Text text={'last modified'} size={14} bold color={'#000000'}/>
                <Text text={formatDateString(hero.modified)} size={14} bold color={'#4310AE'}/>
              </FlexBox>    
              <FlexBox direction={'column'}>
                <Text text={'publisher'} size={14} bold color={'#000000'}/>
                <Text text={String(hero.publisher)} size={14} bold color={'#4310AE'}/>
              </FlexBox>                
           </FlexBox>
           <FlexBox direction={'row'}>
              <FlexBox direction={'column'}>
                <Text text={'appeared in'} size={14} bold color={'#000000'}/>
                <Text text={String(hero.appearence)} size={14} bold color={'#4310AE'}/>
              </FlexBox>    
              <FlexBox direction={'column'}>
                <Text text={'other data'} size={14} bold color={'#000000'}/>
                <Text text={'some other data'} size={14} bold color={'#4310AE'}/>
              </FlexBox>                
           </FlexBox>
      </FlexBox>
    </FlexBox>
     
  ) : null;
}

export default HeroDetails;