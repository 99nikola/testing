import { Stepper, Theme, Step, StepLabel, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { StepE, stepLabels } from "../../data/stepper";
import MButton from "../atoms/MButton";
import FactoryStepContent from "./FactoryStepContent";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '60%',
        },
        button: {
            marginRight: theme.spacing(1)
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        container: {
            margin: theme.spacing(5, 0, 5,0 )
        }
    })
);

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
                {stepLabels.map((label) =>
                    <Step key={label} >
                        <StepLabel>{label}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <div>
                {activeStep === stepLabels.length ? (
                    <>
                        <Typography className={classes.instructions}>
                            All steps complited
                        </Typography>
                        <MButton 
                            className={classes.button}
                            onClick={resetHandler} 
                            text="Reset"
                        />
                    </>    
                ) : (
                    <Grid container direction="column" alignItems="center">

                        <Grid item className={classes.container}>
                            <FactoryStepContent step={activeStep} />
                        </Grid>

                        <Grid  container item direction="row" justifyContent="center" alignItems="center">
                            <MButton 
                                className={classes.button}
                                color="secondary"
                                disabled={activeStep === 0}
                                onClick={backHandler}
                                text={'Back'}
                            />

                            <MButton 
                                className={classes.button}
                                onClick={nextHandler}    
                                text={activeStep === stepLabels.length-1 ? 'Finish' : 'Next'}
                            />
                        </Grid>
                        
                    </Grid>
                )}
            </div>
        </div>
    );
}

export default HorizontalLinearStepper
