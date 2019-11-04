import React from "react";
import Typography from "@material-ui/core/Typography";


export const Copyright: React.FC = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © <test-site /> ${new Date().getFullYear()}`}
    </Typography>
);