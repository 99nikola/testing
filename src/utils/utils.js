let timerId;

/**
 * 
 * @param  callBack CallBack function to be executed
 * @param  delay Delay in ms
 * @returns Throttled function, function that will be executed every `delay`ms
 */

export const throttleFunction = (callBack, delay) => {
    return () => {
        if (timerId) return;

        callBack();
        timerId = setTimeout(() => timerId = undefined, delay);
    }
}

/**
 * 
 * @param  callBack CallBack function to be executed
 * @param  delay Delay in ms
 * @returns Debouncing function, function that will be executed after `delay`ms of the last call
 */

export const debounceFunction = (callBack, delay) => {
    return () => {
        clearTimeout(timerId);

        timerId = setTimeout(callBack, delay);
    }
}