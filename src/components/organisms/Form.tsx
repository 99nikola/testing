import { Button, Grid } from "@material-ui/core";
import { Controller, FormProvider, useForm } from "react-hook-form";
import ControlledField from "../molecules/ControlledField";

const Form: React.FC = () => {

    const methods = useForm({ 
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            luckyNumber: "",
            submit: ""
        },
        criteriaMode: "firstError",
        shouldFocusError: true,
    });

    const { handleSubmit, control } = methods;


    const errorHandler = (errors: any) => {
        console.log("Failure: ", errors);
    }

    const submitHandler = (data: any) => {
        console.log("Success: ", data);
    }

    const validateNumber = (inputValue: string): boolean | string => {
        let luckyNumber = Number(inputValue);
        if (!Number.isInteger(luckyNumber) || luckyNumber < 0 || !Number.isFinite(luckyNumber)) {
            return "Enter a valid whole number";
        }
        return true;
    }

    return (
        <FormProvider {...methods}>
            <form noValidate={true} onSubmit={handleSubmit(submitHandler, errorHandler)}>
                <Grid container item direction="column" spacing={3}>   
                    
                    <ControlledField
                        name="firstName"
                        control={control}
                        label="First Name"
                        rules={{
                            required: 'Required'
                        }}
                    />

                    <ControlledField
                        name="lastName"
                        control={control}
                        label="Second Name"
                        rules={{
                            required: 'Required'
                        }}
                    />

                    <ControlledField
                        name="email"
                        control={control}
                        label="Email address"
                        rules={{ 
                            required: 'Required',
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: 'Enter a valid email address'
                            }
                        }}
                    />

                    <ControlledField
                        name="password"
                        control={control}
                        type="password"
                        label={"Password"}
                        rules={{
                            required: 'Required',
                            minLength: {
                                value: 6,
                                message: 'Password must have at least 6 characters'
                            }
                        }}
                    />

                    <ControlledField
                        name="luckyNumber"
                        control={control}
                        rules={{
                            required: 'Required',
                            validate: {
                                isNumber: validateNumber
                            }
                        }}
                        label="Lucky Number"
                    />

                    <Grid container item justifyContent="center">
                        <Controller
                            name="submit"
                            control={control}
                            render={({ field }) => {
                                return (
                                    <Button 
                                        {...field}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    > Submit
                                    </Button>
                                );
                            }}
                        />
                    </Grid>

                </Grid>
            </form>
        </FormProvider>
    )
}

export default Form

