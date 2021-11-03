import { TextField } from "@material-ui/core";
import React from "react";

interface Props {
    field: {},
    label: string,
    error: boolean,
    helperText: string,
    type?: string
}

const M_TextField: React.FC<Props> = ({ field, label, error, helperText, type }) => {
    return (
        <TextField
            {...field}
            label={label}
            variant="outlined"
            error={error}
            helperText={helperText}
            type={type ? type : "text"}
        />
    );
}

export default M_TextField

