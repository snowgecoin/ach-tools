/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import bsc from '../../images/bnb.png';
import eth from '../../images/ethereum.png';
import matic from '../../images/matic.png';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
    const [textField, setTextField] = React.useState('');

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

    function goToChart() {
      console.log(`Going to ${activeChain}.ach.tools`);
      var url = "https://ach.tools";
      switch (activeChain) {
        case 'BSC':
          url = `https://ach.tools/#/tabs/home/${textField}`;
          break;
        case 'Ethereum':
          url = `https://eth.ach.tools/#/tabs/home/${textField}`;
          break;
        case 'Polygon':
          url = `https://matic.ach.tools/#/tabs/home/${textField}`;
          break;
        default:
          url = `https://ach.tools/#/tabs/home/${textField}`;
          break;
      }
      console.log(activeChain);
      console.log(url);
      var win = window.open(url, '_blank');
      win.focus();
    }

    const handleKeypress = e => {
      if (e.key === "Enter" && textField.length === 42) {
        goToChart();
      }
    }

    const GoButton = () => {
      return(
        <InputAdornment position="end">
          {textField.length === 42 && <button onClick={() => goToChart()} className="go-button"><ArrowForwardIosIcon/></button>}
        </InputAdornment>
      )
    }

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
                      value={textField}
                      onChange={event => setTextField(event.target.value)}
                      onKeyPress={handleKeypress}
                      error={textField.length !== 0 && textField.length !== 42}
                      helperText={(textField.length !== 0 && textField.length !== 42) ? "Incorrect Number of Characters" : ""}
                      label={`Enter ${activeChain} Token Contract Address`}
                      placeholder="0x..."
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon/>
                          </InputAdornment>
                        ),
                        endAdornment: (<GoButton/>),
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
