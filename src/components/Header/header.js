/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import achIcon from "../../images/achIcon.png";
import achTools from "../../images/achtextonlywhite.png";
import './header.scss';
import GatsbyLink from "gatsby-link";
import discordIcon from "../../images/socials/discord.svg";
import twitterIcon from "../../images/socials/twitter.svg";
import telegramIcon from "../../images/socials/telegram.svg";
import redditIcon from "../../images/socials/reddit.svg";
import githubIcon from "../../images/socials/github.svg";
import bsc from '../../images/bnb.png';
import eth from '../../images/ethereum.png';
import matic from '../../images/matic.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginRight: '5vw',
  fontSize: '1.5em',
  fontFamily: 'WhiteRabbit',
  textTransform: 'none',
}

const dropdownLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginRight: '5vw',
  fontSize: '1.5em',
  fontFamily: 'WhiteRabbit',
  textTransform: 'none',
  padding: '0px'
}

const menuStyle = {
  backgroundColor: '#14181D'
}

const menuLinkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginRight: '5vw',
  fontSize: '1.5em',
  fontFamily: 'WhiteRabbit',
  textTransform: 'none',
  backgroundColor: '#14181D'
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

    const [chartsAnchorEl, setChartsAnchorEl] = React.useState(null);
    const [servicesAnchorEl, setServicesAnchorEl] = React.useState(null);

    const handleChartsClick = (event) => {
      setChartsAnchorEl(event.currentTarget);
    };

    const handleChartsClose = () => {
      setChartsAnchorEl(null);
    };

    const handleServicesClick = (event) => {
      setServicesAnchorEl(event.currentTarget);
    };

    const handleServicesClose = () => {
      setServicesAnchorEl(null);
    };


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
                    <Box className={'hover'}>About<span style={{opacity: 0}}> ̬</span></Box>
                </GatsbyLink>
                <Button style={dropdownLinkStyle} component={'a'} className={'nav-button-dd'} aria-controls="simple-menu" aria-haspopup="true" onClick={handleChartsClick}>
                    <Box className={'hover'}>Charts ̬</Box>
                </Button>
                <Menu
                  id="simple-menu"
                  className="simple-menu"
                  anchorEl={chartsAnchorEl}
                  keepMounted
                  open={Boolean(chartsAnchorEl)}
                  onClose={handleChartsClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleChartsClose} style={menuStyle}>
                    <Link style={menuLinkStyle} underline="none" component="a" color="white" href={'https://bsc.ach.tools'} target="_blank">
                      <img src={bsc} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>BSC
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleChartsClose} style={menuStyle}>
                    <Link style={menuLinkStyle} underline="none" component="a" color="white" href={'https://eth.ach.tools'} target="_blank">
                      <img src={eth} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>Ethereum
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleChartsClose} style={menuStyle}>
                    <Link style={menuLinkStyle} underline="none" component="a" color="white" href={'https://matic.ach.tools'} target="_blank">
                      <img src={matic} width="20vw" style={{marginRight: "5px", verticalAlign: "middle"}}/>Polygon
                    </Link>
                  </MenuItem>
                </Menu>
                <Button style={dropdownLinkStyle} component={'a'} className={'nav-button-dd'} aria-controls="simple-menu" aria-haspopup="true" onClick={handleServicesClick}>
                    <Box className={'hover'}>Services ̬</Box>
                </Button>
                <Menu
                  id="simple-menu"
                  className="simple-menu"
                  anchorEl={servicesAnchorEl}
                  keepMounted
                  open={Boolean(servicesAnchorEl)}
                  onClose={handleServicesClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleServicesClose} style={menuStyle}>
                    <Link style={menuLinkStyle} underline="none" component="a" color="white" href={'https://www.google.com'} target="_blank">
                      Advertising
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleServicesClose} style={menuStyle}>
                    <Link style={menuLinkStyle} underline="none" component="a" color="white" href={'https://ach.tools/#/tabs/pricebots'} target="_blank">
                      Pricebots
                    </Link>
                  </MenuItem>
                </Menu>
                <GatsbyLink to={'https://snowgecoin.com/swap/#/swap?outputCurrency=0xc13a1b47377a8382bd3f6f9105137c1e838758b9'} target="_blank" style={rightMostLinkStyle} className={'nav-button'}>
                    <Box className={'hover'}>Buy<span style={{opacity: 0}}> ̬</span></Box>
                </GatsbyLink>
            </Box>
        </Box>
    )
}
