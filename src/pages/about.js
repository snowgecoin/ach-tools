/** @jsx jsx */
import { jsx } from "theme-ui"
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../scss/main.scss';
import {ThemeProvider} from "@emotion/react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import darkTheme from "../gatsby-plugin-theme-ui";

const About = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Container>
                <Box>
                    <Header></Header>
                </Box>
            </Container>
        </ThemeProvider>
    )
};

export default About
