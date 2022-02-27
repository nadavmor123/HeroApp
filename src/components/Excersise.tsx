import React, {FC} from 'react';
import FlexBox from '../UI/Layout/flexBox';
import { Excercise } from '../Types/data';
import Image from '..//UI/Image/image';
import Text from '../UI/Text/text';
interface props {
    excercise: Excercise;
}

const ExcerciseBox: FC<props> = ({excercise}) => {

  return (
    <FlexBox
        width={'auto'}
        height={340}
        paddingLeft={10}
        paddingRight={10}
        paddingTop={10}
        paddingBottom={10}
        shadow={'0px 2px 12px rgba(0, 0, 0, 0.15)'}
        radius={10}
        marginBottom={10}
    >     
        <FlexBox width={'auto'} 
            direction={'column'}
       >
            <FlexBox width={230} clickable>
                <Image src={'https://res.cloudinary.com/dujaj7bp2/video/upload/v1626623808/base_task_video/020_FLIP_all_four_opposition_reach_knoer2.jpg'}/>
            </FlexBox>
            <FlexBox height={50}>
                <FlexBox width={200} clickable>
                    <Text text={excercise.title} size={18} bold></Text>
                </FlexBox>
               </FlexBox>
        </FlexBox>
      
    </FlexBox>
  )
       
    
}

export default ExcerciseBox;