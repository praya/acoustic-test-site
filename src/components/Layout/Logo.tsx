import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            display: 'inline-block',
            fontSize: '25px',
            textDecoration: 'none',
            backgroundColor: '#000',
            color: '#fff',
            padding: theme.spacing(1, 2),
            marginBottom: '15px',
        },
    }),
);

export const Logo: React.FC = () => (
    <Link to="" className={useStyles().link}>&lt;test-site /&gt;</Link>
);