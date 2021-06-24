/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import Helmet from "react-helmet";
import Particles from 'react-particles-js';
import {ThemeProvider} from "@emotion/react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import darkTheme from "../gatsby-plugin-theme-ui";
import 'aos/dist/aos.css';


const IndexPage = () => {

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
        <ThemeProvider theme={darkTheme}>
          <Helmet>
              <meta charSet="utf-8" />
              <title>AchTools | Home</title>
              <link rel="canonical" href="http://ach.tools" />
          </Helmet>
          <div className="animation-container">
            <Particles
              params={{
                    background: {
                        color: '#14181D',
                    },
                    particles: {
                      color: {
                        value: '#5DED6B'
                      },
                      "line_linked": {
                        "enable": true,
                        "color": "#5DED6B",
                      },
                    },
                    interactivity: {
                        detect_on: "canvas",
              	        events: {
              	            onhover: {
              	                enable: true,
              	                mode: 'grab'
              	            },
                            onclick: {
                                enable: true,
                                mode: "push"
                            },
                            modes: {
                              bubble: {
                                distance: 250,
                                duration: 2,
                                size: 1,
                                opacity: 0
                              },
                              push: {
                                particles_nb: 4
                              },
                              remove: {
                                particles_nb: 4
                              }
                            }
              	        }
              	    }
                }}
              style={{
                width: '100%',
                height: '100%',
                backgroundSize: 'cover'
              }}
              height='100vh'
            />
          </div>
          <Container>
              <Box className="slide-in-top">
                  <Header></Header>
              </Box>
              <Box style={{minHeight: '60vh'}}>
                  <HomePage/>
              </Box>
              <Box>
                  <Footer></Footer>
              </Box>
          </Container>
        </ThemeProvider>
    )
};

export default IndexPage
