/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import Box from "@material-ui/core/Box";
import achIcon from "../../images/achIcon.png";
import achTools from "../../images/achtextonlywhite.png";

export default function Footer({props}) {
    return (
        <Box sx={{marginTop: '12vh', marginBottom: 20}}>
            <Box className={'flex-row y-centre'}>
                <img src={achIcon} height={'40px'} sx={{marginRight: 12, position: 'relative', top: '4px'}}/>
                <img src={achTools} height={'22px'}/>
                <span className={'flex-spacer'}></span>
                <Box mr={6}>About</Box>
                <Box mr={6}>Charts</Box>
                <Box mr={6}>Services</Box>
                <Box>Buy</Box>
            </Box>
        </Box>
    )
}
