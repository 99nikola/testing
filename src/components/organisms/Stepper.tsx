import { Stepper, Theme, Step, StepLabel, Typography, Button } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '60%'
        },
        button: {
            marginRight: theme.spacing(1)
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        }
    })
);

enum StepE {
    STEP1,
    STEP2,
    STEP3
}

const stepLabels = ['Label 1', 'Label 2', 'Label 3'];

const getStepMessage = (step: StepE) => {
    return stepLabels[step];
}


const StepContent = (step: StepE) => {
    switch (step) {
        case StepE.STEP1:
            return 'Step 1';
        case StepE.STEP2:
            return 'Step 2';
        case StepE.STEP3:
            return 'Step 3';
        default:
            throw 'Something is very wrong! Impossible step'
    }
}

const HorizontalLinearStepper = () => {

    const classes = useStyles();
    const [ activeStep, setActiveStep ] = useState(0);

    const nextHandler = () => {
        setActiveStep((prevStep: StepE) => prevStep + 1);
    }

    const resetHandler = () => {
        setActiveStep(StepE.STEP1);
    }

    const backHandler = () => {
        setActiveStep((prevStep: StepE) => prevStep - 1);
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep}>
                {stepLabels.map((label, index) => {
                    return (
                        <Step key={label} >
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === stepLabels.length ? (
                    <>
                        <Typography className={classes.instructions}>
                            All steps complited
                        </Typography>
                        <Button onClick={resetHandler} className={classes.button}>
                            Reset
                        </Button>
                    </>    
                ) : (
                    <>
                        <Typography className={classes.instructions}>
                            {StepContent(activeStep)}
                        </Typography>
                        <Button 
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            disabled={activeStep === 0}
                            onClick={backHandler}
                        >   Back
                        </Button>

                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={nextHandler}
                        >   {activeStep === stepLabels.length-1 ? 'Finish' : 'Next'}
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}

export default HorizontalLinearStepper
