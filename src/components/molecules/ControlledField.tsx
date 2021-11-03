import { Grid } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import M_TextField from "../atoms/TextField";

interface Props {
    name: any,
    label: string
    control: any,
    rules: any
    type?: string
}

const ControlledField: React.FC<Props> = ({ name, control, label, rules, type }) => {

    const { formState: { errors } } = useFormContext();

    return (
        <Grid item>
            <Controller 
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => 
                    <M_TextField
                        field={field}
                        label={label}
                        error={Boolean(errors[name])}
                        helperText={errors[name] ? errors[name]?.message : ''}
                        type={type}
                    />
                }
            />
        </Grid>
    );
}

export default ControlledField
