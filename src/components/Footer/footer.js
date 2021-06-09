/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import Box from "@material-ui/core/Box";
import achIcon from "../../images/achIcon.png";
import achTools from "../../images/achtextonlywhite.png";
import "./footer.scss";

export default function Footer({props}) {
    return (
        <Box sx={{marginTop: '12vh', marginBottom: 20}} className="break-line-top">
            <Box className={'flex-row'} style={{marginBottom: "2vh", marginTop: "2vh"}}>
                <Box className={'flex-column footer-logo-box'}>
                  <img src={achTools} height={'22px'}/>
                  <div className="footer-subtitle">Accelerate your finances</div>
                </Box>
                <span className={'flex-spacer'}></span>
                <Box className={'flex-column'}>
                  <div className="footer-section-header">About</div>
                  <a href=""><div className="footer-section-text">Contact</div></a>
                  <a href="https://bscscan.com/token/0xc13a1b47377a8382bd3f6f9105137c1e838758b9"><div className="footer-section-text">Contract</div></a>
                  <a href=""><div className="footer-section-text">Branding</div></a>
                  <a href=""><div className="footer-section-text">Docs</div></a>
                </Box>
                <span className={'flex-spacer'}></span>
                <Box className={'flex-column'}>
                  <div className="footer-section-header">Community</div>
                  <a href="https://twitter.com/achtools"><div className="footer-section-text">Twitter</div></a>
                  <a href="https://t.me/achtools"><div className="footer-section-text">Telegram</div></a>
                  <a href="https://discord.gg/kVXnpMbs"><div className="footer-section-text">Discord</div></a>
                  <a href="https://www.reddit.com/r/ACHTools/"><div className="footer-section-text">Reddit</div></a>
                </Box>
                <span className={'flex-spacer'}></span>
                <Box className={'flex-column'}>
                  <div className="footer-section-header">Charts</div>
                  <a href=""><div className="footer-section-text">BSC</div></a>
                  <a href=""><div className="footer-section-text">Etherem</div></a>
                  <a href=""><div className="footer-section-text">Matic/Polygon</div></a>
                </Box>
                <span className={'flex-spacer'}></span>
                <span className={'flex-spacer'}></span>
                <Box className={'flex-column'}>
                  <div className="disclaimer">The information provided by this website does not constitute
                  investment advice, financial advice, trading advice, or any other sort of advice. Conduct
                  your own due diligence before making any investment decisions.
                  </div>
                </Box>
            </Box>
        </Box>
    )
}
