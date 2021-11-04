let timerId: number | undefined | NodeJS.Timeout;

/**
 * 
 * @param  callBack CallBack function to be executed
 * @param  delay Delay in ms
 * @returns Throttled function, function that will be executed every `delay`ms
 */

export const throttleFunction = (callBack: Function, delay: number) => {
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

export const debounceFunction = (callBack: Function, delay: number) => {
    return () => {
        clearTimeout(timerId as number);

        timerId = setTimeout(callBack, delay);
    }
}


export function add(arg1: number, arg2: number): number;
export function add(arg1: number[]): number;
export function add(arg1: string, arg2: string): string;
export function add(arg1: string[]): string;
export function add(arg1: number | string | number[] | string[], arg2?: number | string): number | string | null{
    if (typeof arg1 === 'number') 
        return (arg1 as number) + (arg2 as number);
    
    if (typeof arg1 === 'string')
        return arg1.concat(arg2 as string);

    if (arg1.length === 0) 
        return null;

    if (typeof arg1[0] === 'number') {
        let sum: number = 0;
        arg1.forEach(elem => sum += (elem as number));
        return sum;
    }

    return String(arg1 as string[]);
}


export const validateNumber = (inputValue: string): boolean | string => {
    let luckyNumber = Number(inputValue);
    if (!Number.isInteger(luckyNumber) || luckyNumber < 0 || !Number.isFinite(luckyNumber)) {
        return "Enter a valid whole number";
    }
    return true;
}