/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import Box from "@material-ui/core/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "@material-ui/core/Container";
import Helmet from "react-helmet";


const IndexPage = () => {
    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>AchTools</title>
                <link rel="canonical" href="http://ach.tools" />
            </Helmet>
            <Box>
                <Header></Header>
            </Box>
        </Container>
    )
};

export default IndexPage
