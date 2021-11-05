import { StepE } from "../../data/stepper";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";

interface PropsType {
    step: StepE
}
const FactoryStepContent: React.FC<PropsType> = ({ step }) => {
    switch (step) {
        case StepE.STEP1:
            return <Step1 />;
        case StepE.STEP2:
            return <Step2 />;
        case StepE.STEP3:
            return <Step3 />;
        default:
            throw 'Something is very wrong! Impossible step'
    }
}

export default FactoryStepContent;