import React, {FC, ReactNode} from 'react';
import FlexBox from '../Layout/flexBox';
import Grid from '@mui/material/Grid';

interface props {
    container?:boolean;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    children?: ReactNode;
}

const GridBox: FC<props> = ({xs,sm,md,lg, container,children}) => {

    const renderGrid = () => {
        if (container) {
            return (
                <Grid container>
                    {children}
                </Grid>
            )
        }else{
            return (
                <Grid item xs={xs} sm={sm} md={md} lg={lg}>
                    {children}
                </Grid>
            )
        }
    }

  return renderGrid();
       
    
}

export default GridBox;