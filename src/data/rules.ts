import { validateNumber } from "../utils/utils"

export const RequiredRule = {
    required: 'Required'
}

export const EmailRule = {
    ...RequiredRule,
    pattern: {
        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        message: 'Enter a valid email address'
    }
}

export const PasswordRule = {
    ...RequiredRule,
    minLength: {
        value: 6,
        message: 'Password must have at least 6 characters'
    }
}

export const LuckyNumberRule = {    
    ...RequiredRule, 
    validate: {
        isNumber: validateNumber
    }
}