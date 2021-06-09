/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import Box from "@material-ui/core/Box";
import achIcon from "../../images/achIcon.png";
import achTools from "../../images/achtextonlywhite.png";
import './header.scss';
import GatsbyLink from "gatsby-link";

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginRight: '5vw',
  fontSize: '1.5em'
}

const rightMostLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.5em'
}

const activePageStyle = {
  color: "#5DED6B"
}

export default function Header({props}) {

    const [price, setPrice] = React.useState('$0.00');

    return (
        <Box mt={'12vh'} mb={20}>
            <Box className={'flex-row y-centre'}>
                <GatsbyLink to={'/'}>
                  <Box mr={'12px'} sx={{position: 'relative', top: '4px'}}>
                      <img src={achIcon} alt={'ach logo'} height={'40px'} style={{marginRight: '10px'}} className="vert-align"/>
                      <img src={achTools} alt={'ach tools'} height={'22px'} className="vert-align"/>
                  </Box>
                </GatsbyLink>
                <Box mr={'12px'} sx={{position: 'relative', top: '4px'}}>{price}</Box>
                <Box className={'flex-spacer'}/>
                <GatsbyLink to={'/about'} style={linkStyle} activeStyle={activePageStyle} className={'nav-button'}>
                    <Box className={'hover'}>About</Box>
                </GatsbyLink>
                <GatsbyLink to={'/about'} style={linkStyle} className={'nav-button'}>
                    <Box className={'hover'}>Charts ˬ</Box>
                </GatsbyLink>
                <GatsbyLink to={'/about'} style={linkStyle} className={'nav-button'}>
                    <Box className={'hover'}>Services ˬ</Box>
                </GatsbyLink>
                <GatsbyLink to={'/about'} style={rightMostLinkStyle} className={'nav-button'}>
                    <Box className={'hover'}>Buy</Box>
                </GatsbyLink>
            </Box>
        </Box>
    )
}
