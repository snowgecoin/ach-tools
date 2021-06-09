/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import Box from "@material-ui/core/Box";
import achIcon from "../../images/achIcon.png";
import achTools from "../../images/achtextonlywhite.png";
import './header.scss';
import GatsbyLink from "gatsby-link";
import discordIcon from "../../images/socials/discord.svg";
import twitterIcon from "../../images/socials/twitter.svg";
import telegramIcon from "../../images/socials/telegram.svg";
import redditIcon from "../../images/socials/reddit.svg";
import githubIcon from "../../images/socials/github.svg";

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

    function connectWallet() {
      console.log('placeholder');
    }

    const [price, setPrice] = React.useState('$0.00');

    return (
        <Box mt={'12vh'} mb={20} className="break-line-bottom">
            <Box className={'flex-row flex-end y-centre social-bar-wrapper'}>
                <a href="https://t.me/achtools"><img src={telegramIcon} className='social-icon'/></a>
                <a href="https://discord.gg/kVXnpMbs"><img src={discordIcon} className='social-icon'/></a>
                <a href="https://www.reddit.com/r/ACHTools/"><img src={redditIcon} className='social-icon'/></a>
                <a href="https://twitter.com/achtools"><img src={twitterIcon} className='social-icon'/></a>
                <a href="https://github.com"><img src={githubIcon} className='social-icon'/></a>
                <button className="connect-wallet-button" onClick={() => connectWallet()}>Connect</button>
            </Box>
            <Box className={'flex-row y-centre'}>
                <GatsbyLink to={'/'}>
                  <Box mr={'20px'} sx={{position: 'relative', top: '4px'}}>
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
                <GatsbyLink to={'https://snowgecoin.com/swap/#/swap?outputCurrency=0xc13a1b47377a8382bd3f6f9105137c1e838758b9'} target="_blank" style={rightMostLinkStyle} className={'nav-button'}>
                    <Box className={'hover'}>Buy</Box>
                </GatsbyLink>
            </Box>
        </Box>
    )
}
