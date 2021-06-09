/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import Box from "@material-ui/core/Box";
import achIcon from "../../images/achIcon.png";
import achTools from "../../images/achtextonlywhite.png";
import './header.scss';
import GatsbyLink from "gatsby-link";

export default function Header({props}) {
    return (
        <Box mt={'12vh'} mb={20}>
            <Box className={'flex-row y-centre'}>
                <Box mr={'12px'} sx={{position: 'relative', top: '4px'}}>
                    <img src={achIcon} alt={'ach logo'} height={'40px'}/>
                </Box>
                <img src={achTools} alt={'ach tools'} height={'22px'}/>
                <Box className={'flex-spacer'}/>
                <GatsbyLink mr={'20px'} to={'/about'} p={'12px'} className={'nav-button'}>
                    <Box className={'hover'}>About</Box>
                </GatsbyLink>
                <Box mr={'20px'} p={'12px'} className={'nav-button'}>
                    <Box className={'hover'}>Charts</Box>
                </Box>
                <Box mr={'20px'} p={'12px'} className={'nav-button'}>
                    <Box className={'hover'}>Services</Box>
                </Box>
                <Box p={'12px'} className={'nav-button'}>
                    <Box className={'hover'}>Buy</Box>
                </Box>
            </Box>
        </Box>
    )
}
