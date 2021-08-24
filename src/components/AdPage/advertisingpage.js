/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import bsc from '../../images/bnb.png';
import eth from '../../images/ethereum.png';
import matic from '../../images/matic.png';
import './advertisingpage.scss'
import 'aos/dist/aos.css';
import {Box} from "@theme-ui/components";
import { PieChart } from 'react-minimal-pie-chart';

const chartData = [
  { title: 'Burned Supply', value: 65.64, color: 'rgb(47,114,199)' },
  { title: 'Publicly Traded', value: 30.1, color: 'rgb(107,179,170)' },
  { title: 'Team Tokens', value: 4.26, color: 'rgb(241,161,62)' },
];

export default function AdPage({props}) {

    const [hovered, setHovered] = React.useState(undefined);

    let AOS;
    React.useEffect(() => {
      const AOS = require("aos");
      AOS.init({
        once: true,
      });
    }, []);

    React.useEffect(() => {
      if (AOS) {
        AOS.refresh();
      }
    });

    const animatedChartData = chartData.map((entry, i) => {
      if (hovered === i) {
        return {
          ...entry,
          color: 'darkgrey',
        };
      }
      return entry;
    });

    return (
        <Box sx={{marginTop: '12vh', marginBottom: 20}}>
            <Box className={'flex-row x-centre wrap-mobile'}>
                <Box className={'flex-column'} mx={'5vw'} mb={'5vh'}>
                  <div className="header-text" data-aos="zoom-out">Text Advertisements</div>
                  <div className="body-text" data-aos="fade-up">• Advertisements available for Ethereum, BSC, and Polygon</div>
                  <div className="body-text" data-aos="fade-up">• 800k+ users between all available telegram rooms</div>
                  <div className="body-text" data-aos="fade-up">• 300+ PriceBots present with ads</div>
                  <div className="body-text" data-aos="fade-up">• These advertisements are also featured on the ach.tools website(s)!</div>
                  <div className="body-text" data-aos="fade-up"><b>Instructions:</b>{` Provide us with a short (<160 character) message -
                    it will be featured at the bottom of active pricebots, and will include metrics of time shown/hour.`}
                  </div>
                  <div className="body-text" data-aos="fade-up"><b style={{color: '#5DED6B'}}>Pricing:</b> 1 BNB → 1 Week or 0.5 BNB → 3 Days</div>
                </Box>
                <Box className={'flex-column'} mx={'5vw'} mb={'5vh'}>
                  <div className="header-text" data-aos="zoom-out">Token Posts</div>
                  <div className="body-text" data-aos="fade-up">• 4800+ Subscribers</div>
                  <div className="body-text" data-aos="fade-up">• Avid investors</div>
                  <div className="body-text" data-aos="fade-up">• Growing Quickly</div>
                  <div className="body-text" data-aos="fade-up">• Post pinned for the entire promotional period</div>
                  <div className="body-text" data-aos="fade-up">• First Come, First Serve</div>
                  <div className="body-text" data-aos="fade-up"><b>Instructions:</b>{` Requires Reservations. Post a large block of text on my
                    channel, including an image. Must fit in one post! See `}
                    <a style={{textDecoration: 'none', color: 'white'}} target="_blank" href="https://t.me/custompricebots">@CustomPriceBots</a>
                    {` for details.`}
                  </div>
                  <div className="body-text" data-aos="fade-up"><b style={{color: '#5DED6B'}}>Pricing:</b> 0.5 BNB → 24 Hours || 1 BNB → 48 Hours</div>
                </Box>
            </Box>
            <Box className={'flex-row x-centre'} data-aos="fade-up">
              <Box className={"body-text flex-column y-centre flex-one"} mx={20}>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://bsc.ach.tools/#/tabs/pricebots">
                  <img src={bsc} className="ad-chain-img"/>
                </a>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://bsc.ach.tools/#/tabs/pricebots">
                  500+ Binance Smart Chain Bots
                </a>
              </Box>
              <Box className={"body-text flex-column y-centre flex-one"} mx={20}>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://matic.ach.tools/#/tabs/pricebots">
                  <img src={matic} className="ad-chain-img"/>
                </a>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://matic.ach.tools/#/tabs/pricebots">
                  25+ Polygon/MATIC Bots
                </a>
              </Box>
              <Box className={"body-text flex-column y-centre flex-one"}>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://eth.ach.tools/#/tabs/pricebots">
                  <img src={eth} className="ad-chain-img"/>
                </a>
                <a style={{textDecoration: 'none', color: 'white'}} href="https://eth.ach.tools/#/tabs/pricebots">
                  30+ Ethereum Bots
                </a>
              </Box>
            </Box>
            <Box className={'flex-row x-centre'} mt={'5vh'} data-aos="fade-up">
              <div className="body-text">Please visit our existing PriceBots page for example advertisement messages.</div>
              <div className="body-text">Use <a href="https://www.charactercountonline.com/" style={{color: 'white'}}>this tool</a> in order to keep your character count below 160 (not counting links).</div>
              <div className="body-text">Feel free to provide bit.ly links in order to track impression statistics!</div>
            </Box>
            <Box className={'flex-row x-centre contact'} mt={'5vh'}>
              <Box className={'flex-column'}>
                <div className="header-text">Contact us on Telegram to get started!</div>
                <a target="_blank" href="https://t.me/dasilva333"><button className="buy-ads-button" data-aos="fade-up">Purchase Advertising</button></a>
              </Box>
            </Box>
        </Box>
    )
}
