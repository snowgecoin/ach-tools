/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import Box from "@material-ui/core/Box";
import achIcon from "../../images/achIcon.png";
import achTools from "../../images/achtextonlywhite.png";

export default function Header({props}) {
    return (
        <Box sx={{marginTop: '12vh', marginBottom: 20}}>
            <Box className={'flex-row y-centre'}>
                <img src={achIcon} alt={'ach logo'} height={'40px'}
                     sx={{marginRight: 12, position: 'relative', top: '4px'}}/>
                <img src={achTools} alt={'ach tools'} height={'22px'}/>
                <Box className={'flex-spacer'}></Box>
                <Box sx={{marginRight: '20px'}}>About</Box>
                <Box sx={{marginRight: '20px'}}>Charts</Box>
                <Box sx={{marginRight: '20px'}}>Services</Box>
                <Box sx={{marginRight: '20px'}}>Buy</Box>
            </Box>
        </Box>
    )
}
