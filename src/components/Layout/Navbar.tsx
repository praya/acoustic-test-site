import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import React from "react";


export const Navbar: React.FC = () => (
    <Grid container spacing={2}>

        <Grid item>
            <Button size="small" to="/articles/fa9519d5-0363-4b8d-8e1f-627d802c08a8" component={Link}>
                The Article
            </Button>
        </Grid>

        <Grid item>
            <Button size="small" to="/articles" component={Link}>
                Articles
            </Button>
        </Grid>

        <Grid item>
            <Button size="small" href="https://github.com/praya/acoustic-test-site" target="__blank">
                GitHub
            </Button>
        </Grid>

    </Grid>
);