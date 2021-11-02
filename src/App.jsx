import { Controller, useForm, useFormState } from "react-hook-form";
import { Button, Grid, TextField } from "@material-ui/core";

const App = () => {

    const methods = useForm({ 
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            luckyNumber: ""
        },
        criteriaMode: "firstError",
        shouldFocusError: true,
    });


    const { handleSubmit, control } = methods;
    
    const { errors } = useFormState({ control });

    const errorHandler = (errors, e) => {
        console.log("Failure: ", errors);
    }

    const submitHandler = (data) => {
        console.log("Success: ", data);
    }

    const validateNumber = (inputValue) => {
        if (isNaN(inputValue))
            return 'Input is not number'
        return true;
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <form onSubmit={handleSubmit(submitHandler, errorHandler)}>
                <Grid container item direction="column" spacing={3}>   
                    
                    <Grid item>
                        <Controller 
                            name="firstName"
                            rules={{ 
                                required: 'Required'
                            }}
                            control={control}
                            render={({ field }) => {
                                return (
                                    <TextField
                                        {...field}
                                        label="First Name"
                                        variant="outlined"
                                        error={Boolean(errors.firstName)}
                                        helperText={errors.firstName ? errors.firstName?.message : ''}
                                    />
                                );
                            }}
                        />
                    </Grid>

                    <Grid item>
                        <Controller 
                            name="lastName"
                            control={control}
                            rules={{ 
                                required: 'Required'
                            }}
                            render={({ field }) => {
                                return (
                                    <TextField
                                        {...field}
                                        label="Last Name"
                                        variant="outlined"
                                        error={Boolean(errors.lastName)}
                                        helperText={errors.lastName ? errors.lastName?.message : ''}
                                    />
                                );
                            }}
                        />
                    </Grid>
                    
                    <Grid item>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ 
                                required: 'Required',
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Email is not valid'
                                }
                            }}
                            render={({ field }) => {
                                return (
                                    <TextField 
                                        {...field}
                                        label="Email address"
                                        variant="outlined"
                                        error={Boolean(errors.email)}
                                        helperText={errors.email ? errors.email?.message : ''}
                                    /> 
                                );
                            }}
                        />
                    </Grid>

                    <Grid item>
                        <Controller 
                            name="password"
                            control={control}
                            rules={{
                                required: 'Required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must have at least 6 characters'
                                }
                            }}
                            render={({ field }) => {
                                return (
                                    <TextField 
                                        {...field}
                                        variant="outlined"
                                        label="Password"
                                        type="password"
                                        error={Boolean(errors.password)}
                                        helperText={errors.password ? errors.password?.message : ''}
                                    />
                                );
                            }}
                        />
                    </Grid>

                    <Grid item>
                        <Controller 
                            name="luckyNumber"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: 'Required',
                                validate: {
                                    isNumber: validateNumber
                                }
                            }}
                            render={({ field }) => {
                                return (
                                    <TextField 
                                        {...field}
                                        // type="number"
                                        variant="outlined"
                                        label="Lucky Number"
                                        error={Boolean(errors.luckyNumber)}
                                        helperText={errors.luckyNumber ? errors.luckyNumber?.message : ''}
                                    />
                                );
                            }}
                        />
                    </Grid>

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

        </Grid>
    );
}

export default App;