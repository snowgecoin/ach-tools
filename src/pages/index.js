/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import Box from "@material-ui/core/Box";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Footer from "../components/Footer";
import Container from "@material-ui/core/Container";
import Helmet from "react-helmet";
import Particles from 'react-particles-js';
import '../scss/main.scss';

const IndexPage = () => {
    return (
        <React.Fragment>
          <Helmet>
              <meta charSet="utf-8" />
              <title>AchTools</title>
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
                              }
                            }
              	        }
              	    }
                }}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <Container>
              <Box>
                  <Header></Header>
              </Box>
              <Box>
                  <HomePage/>
              </Box>
          </Container>
        </React.Fragment>
    )
};

export default IndexPage
