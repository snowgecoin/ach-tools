/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import Box from "@material-ui/core/Box";
import bsc from '../../images/bnb.png';
import eth from '../../images/ethereum.png';
import matic from '../../images/matic.png';
import TextField from '@material-ui/core/TextField';
import './homepage.scss'
import 'aos/dist/aos.css';

const styles = theme => ({
  input: {
    color: "white"
  }
});

export default function HomePage({props}) {

    const [activeChain, setActiveChain] = React.useState('BSC');
    // const { classes } = props;

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

    return (
        <Box sx={{marginTop: '12vh', marginBottom: 20}}>
            <Box className={'flex-row y-centre'}>
                <div className="homepage-text">The most advanced multichain defi dashboard</div>
            </Box>
            <Box className={'flex-row y-centre'}>
                <div className="search-field-wrapper">
                  {/* <form noValidate autoComplete="off"> */}
                    <TextField
                      fullWidth
                      id="standard-full-width"
                      label={`Enter ${activeChain} Token Contract Address`}
                      placeholder="0x..."
                    />
                  {/* </form> */}
                </div>
            </Box>
            <Box className={'flex-row y-centre x-centre icon-row-wrapper'}>
                <span className={'flex-spacer'}></span>
                <img src={bsc} className="chain-icon" onClick={() => setActiveChain('BSC')}/>
                <span className={'flex-spacer'}></span>
                <img src={eth} className="chain-icon" onClick={() => setActiveChain('Ethereum')}/>
                <span className={'flex-spacer'}></span>
                <img src={matic} className="chain-icon" onClick={() => setActiveChain('Polygon')}/>
                <span className={'flex-spacer'}></span>
            </Box>
        </Box>
    )
}