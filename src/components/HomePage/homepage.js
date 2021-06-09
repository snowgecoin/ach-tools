/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import bsc from '../../images/bnb.png';
import eth from '../../images/ethereum.png';
import matic from '../../images/matic.png';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import './homepage.scss'
import 'aos/dist/aos.css';
import {Box} from "@theme-ui/components";

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
                <div className="homepage-text focus-in-contract-bck">The most advanced multichain defi dashboard</div>
            </Box>
            <Box className={'flex-row y-centre'} data-aos="fade-up" data-aos-delay="1000">
                <div className="search-field-wrapper">
                    <TextField
                      fullWidth
                      id="standard-full-width"
                      label={`Enter ${activeChain} Token Contract Address`}
                      placeholder="0x..."
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon/>
                          </InputAdornment>
                        ),
                      }}
                    />
                </div>
            </Box>
            <Box className={'flex-row y-centre x-centre icon-row-wrapper'} data-aos="fade-up" data-aos-delay="1000">
                <span className={'flex-spacer'}></span>
                <img src={bsc} className={`chain-icon ${activeChain == 'BSC' ? "" : "translucent"}`} onClick={() => setActiveChain('BSC')}/>
                <span className={'flex-spacer'}></span>
                <img src={eth} className={`chain-icon ${activeChain == 'Ethereum' ? "" : "translucent"}`} onClick={() => setActiveChain('Ethereum')}/>
                <span className={'flex-spacer'}></span>
                <img src={matic} className={`chain-icon ${activeChain == 'Polygon' ? "" : "translucent"}`} onClick={() => setActiveChain('Polygon')}/>
                <span className={'flex-spacer'}></span>
            </Box>
        </Box>
    )
}
