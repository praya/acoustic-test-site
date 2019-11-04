import React from 'react';
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import { Copyright } from "./Copyright";
import { Navbar } from "./Navbar";
import { Logo } from "./Logo";


export interface LayoutProps {
    children: React.ReactNode;
}


export const Layout: React.FC<LayoutProps> = ({ children }) => (
    <Container maxWidth="sm">
        <Box my={4}>

            <Logo />

            <Navbar />

            <Box py={4}>
                {children}
            </Box>

            <hr />

            <Copyright />
        </Box>
    </Container>
);