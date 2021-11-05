import { TextField } from "@material-ui/core";
import React from "react";

interface Props {
    value: string,
    onChange: any,
    label: string,
    error: boolean,
    helperText: string,
    type?: string
}


const MTextField: React.FC<Props> = ({ value, onChange, label, error, helperText, type }) => {
    return (
        <TextField
            value={value}
            onChange={onChange}
            label={label}
            variant="outlined"
            error={error}
            helperText={helperText}
            type={type ? type : "text"}
        />
    );
}

MTextField.defaultProps = {
    type: "text"
}

export default MTextField

