import { Box, Paper, Theme, Typography, createStyles, makeStyles } from "@material-ui/core";
import React from "react";

import { Error, FailResponse } from "../../api/FailResponse";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(3, 2),
        },
    }),
);

export interface ErrorViewProps {
    error: Error;
}

const ErrorView: React.FC<ErrorViewProps> = ({ error }) => (
    <Paper className={useStyles().root} color="primary">
        <Typography variant="h6" component="p" color="error" >{error.description}</Typography>
        {error.description && (
            <Box mt={2}>
                <Typography variant="body2" component="p" color="error">{error.message}</Typography>
            </Box>
        )}
    </Paper>
)

export const renderErrors = (response: FailResponse) =>
    response.errors instanceof Array
        ? <>{response.errors.map((error) => <ErrorView error={error} />)}</>
        : <ErrorView error={response.errors} />
