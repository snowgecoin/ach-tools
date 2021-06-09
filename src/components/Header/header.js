/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import Box from "@material-ui/core/Box";
import achIcon from "../../images/achIcon.png";
import achTools from "../../images/achtextonlywhite.png";

export default function Header({props}) {
    return (
        <Box mt={'12vh'} mb={20}>
            <Box className={'flex-row y-centre'}>
                <Box mr={'12px'} sx={{position: 'relative', top: '4px'}}>
                    <img src={achIcon} alt={'ach logo'} height={'40px'}/>
                </Box>
                <img src={achTools} alt={'ach tools'} height={'22px'}/>
                <Box className={'flex-spacer'}/>
                <Box mr={'20px'}>About</Box>
                <Box mr={'20px'}>Charts</Box>
                <Box mr={'20px'}>Services</Box>
                <Box mr={'20px'}>Buy</Box>
            </Box>
        </Box>
    )
}
