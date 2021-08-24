/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import bsc from '../../images/bnb.png';
import eth from '../../images/ethereum.png';
import matic from '../../images/matic.png';
import './aboutpage.scss'
import 'aos/dist/aos.css';
import {Box} from "@theme-ui/components";
import { PieChart } from 'react-minimal-pie-chart';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const chartData = [
  { title: 'Burned Supply', value: 65.64, color: 'rgb(47,114,199)' },
  { title: 'Publicly Traded', value: 30.1, color: 'rgb(107,179,170)' },
  { title: 'Team Tokens', value: 4.26, color: 'rgb(241,161,62)' },
];

export default function AboutPage({props}) {

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

    const isMobile = useMediaQuery('(max-width:768px)');
    const headerMargin = isMobile ? '2vh' : '12vh';

    return (
        <Box sx={{marginTop: headerMargin, marginBottom: 20}}>
            <Box className={'flex-row y-centre'}>
                <div className="header-text" data-aos="zoom-out">Overview</div>
            </Box>
            <Box data-aos="fade-up">
                <div className="body-text">The most advanced Decentralized Finance (DeFi) price bots - aiming to
                supercharge your trading experience on the Binance Smart Chain (BSC), Polygon (Matic), and Ethereum (ETH) and KuCoin (KCC).
                </div>
                <div className="body-text">Our main goal is to provide traders and investors with the ability to monitor
                their favorite pairs and create advanced trading strategies without having to search for information in a
                 wide range of non-standardized platforms and websites. Achtools provides traders with on-chain and live
                 trading data from DeFi exchanges based on the BSC, Matic, and Ethereum networks. With our tools, users
                 can get access to deep historical trading data, detailed candle charts, all recorded transactions on
                 each supported platform, and more.
                 </div>
            </Box>
            <Box className={'flex-row y-centre wrap-mobile'}>
              <Box>
                <Box className={'flex-row y-centre margin-top'}>
                    <div className="header-text" data-aos="zoom-out">Tokenomics</div>
                </Box>
                <Box data-aos="fade-up">
                    <div className="body-text"><b>Total Supply (Initial)</b>: 10 million tokens; 50% burned at launch.</div>
                    <div className="body-text"><b>Transaction Fees</b>: 8% total. 4% burned on each transaction, and 4% redistributed to holders.</div>
                    <div className="body-text"><b>Team tokens</b>: Vested for 18 months, and will be released linearly
                    from July 2021 onwards (5.5% each month until December 2022).
                    </div>
                </Box>
              </Box>
              <Box style={{padding: '50px', width: `${isMobile ? '100vw' : '30vw'}`}}>
                <PieChart
                  data={animatedChartData}
                  label={({ dataEntry }) => dataEntry.value}
                  radius={35}
                  segmentsShift={3}
                  labelStyle={(index) => ({
                    fill: animatedChartData[index].color,
                    fontSize: '5px',
                  })}
                  labelPosition={112}
                  onMouseOver={(_, index) => {
                    setHovered(index);
                  }}
                  onMouseOut={() => {
                    setHovered(undefined);
                  }}
                  animate
                />
              </Box>
            </Box>
            <Box className={'flex-row y-centre margin-top'}>
                <div className="header-text" data-aos="zoom-out">Roadmap</div>
            </Box>
            <Box data-aos="fade-up">
                <div className="body-text"><b>June 2021</b>: Coming Soon</div>
                <div className="body-text"><b>July 2021</b>: Coming Soon</div>
                <div className="body-text"><b>August 2021</b>: Coming Soon</div>
                <div className="body-text"><b>September 2021</b>: Coming Soon</div>
                <div className="body-text"><b>October 2021</b>: Coming Soon</div>
                <div className="body-text"><b>November 2021</b>: Coming Soon</div>
                <div className="body-text"><b>December 2021</b>: Coming Soon</div>
            </Box>
        </Box>
    )
}
