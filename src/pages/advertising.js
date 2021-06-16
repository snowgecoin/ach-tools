/** @jsx jsx */
import { jsx } from "theme-ui"
import Header from "../components/Header";
import Footer from "../components/Footer";
import {ThemeProvider} from "@emotion/react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import darkTheme from "../gatsby-plugin-theme-ui";
import Helmet from "react-helmet";
import Particles from 'react-particles-js';
import AdPage from "../components/AdPage";

const Advertising = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>AchTools | Advertising</title>
                <link rel="canonical" href="http://ach.tools" />
            </Helmet>
            <div className="animation-container-about">
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
                    backgroundSize: 'cover'
                  }}
                  height='100vh'
              />
            </div>
            <Container>
                <Box>
                    <Header></Header>
                </Box>
                <Box>
                    <AdPage/>
                </Box>
                <Box>
                    <Footer></Footer>
                </Box>
            </Container>
        </ThemeProvider>
    )
};

export default Advertising
