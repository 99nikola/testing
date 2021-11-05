import { useEffect } from "react";
import Form from "./components/organisms/Form";
import { Grid } from "@material-ui/core";
import { debounceFunction, throttleFunction, add } from "./utils/utils";
import Stepper from "./components/organisms/Stepper";

const App = () => {

    useEffect(() => {

        const resizeHandler = () => {
            console.log("height: ", window.innerHeight, "\nwidth: ", window.innerWidth);
        }
        // const debounceCallback = debounceFunction(resizeHandler, 300);
        const throttleCallback = throttleFunction(resizeHandler, 300);

        // window.addEventListener("resize", debounceCallback);
        window.addEventListener("resize", throttleCallback);

        return () => {
            // window.removeEventListener("resize", debounceCallback);
            window.removeEventListener("resize", throttleCallback);
        }
    }, []);
    
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Form />
            <Stepper />
            
        </Grid>
    );
}

export default App;