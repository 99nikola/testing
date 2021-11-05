import { Grid } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import MTextField from "../atoms/MTextField";

interface Props {
    name: any,
    label: string
    control: any,
    rules: any
    type?: string
}

const ControlledField: React.FC<Props> = ({ name, control, label, rules, type }) => {

    return (
        <Grid item>
            <Controller 
                name={name}
                control={control}
                rules={rules}
                render={({ field, fieldState }) => 
                    <MTextField
                        value={field.value}
                        onChange={field.onChange}
                        label={label}
                        error={Boolean(fieldState.error)}
                        helperText={fieldState.error?.message || ''}
                        type={type}
                    />
                }
            />
        </Grid>
    );
}

export default ControlledField
