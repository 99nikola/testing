import { Button, Grid } from "@material-ui/core";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { EmailRule, LuckyNumberRule, PasswordRule, RequiredRule } from "../../data/rules";
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

    

    return (
        <FormProvider {...methods}>
            <form noValidate={true} onSubmit={handleSubmit(submitHandler, errorHandler)}>
                <Grid container item direction="column" spacing={3}>   
                    
                    <ControlledField
                        name="firstName"
                        control={control}
                        label="First Name"
                        rules={RequiredRule}
                    />

                    <ControlledField
                        name="lastName"
                        control={control}
                        label="Second Name"
                        rules={RequiredRule}
                    />

                    <ControlledField
                        name="email"
                        control={control}
                        label="Email address"
                        rules={EmailRule}
                    />

                    <ControlledField
                        name="password"
                        control={control}
                        type="password"
                        label={"Password"}
                        rules={PasswordRule}
                    />

                    <ControlledField
                        name="luckyNumber"
                        control={control}
                        rules={LuckyNumberRule}
                        label="Lucky Number"
                    />

                    <Grid container item justifyContent="center">
                        <Controller
                            name="submit"
                            control={control}
                            render={({ field }) => {
                                return (
                                    <Button 
                                        value={field.value}
                                        onChange={field.onChange}
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

