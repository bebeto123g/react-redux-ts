import { GetActionsType } from '../index';
import actions from './actions';
import { UserType } from '../../types';

type UserActionsType = GetActionsType<typeof actions>;

const initState = {
    name: {
        value: '',
        validate: false,
    },
    email: {
        value: '',
        validate: false,
    },
    phone: {
        value: '',
        validate: false,
    },
    userType: 'individual' as UserType,
    isAgree: true,
    isProcessingData: false,
};

export const FormTypes = {
    SET_USER_NAME: 'SET_USER_NAME',
    SET_USER_EMAIL: 'SET_USER_EMAIL',
    SET_USER_PHONE: 'SET_USER_PHONE',
    SET_USER_TYPE: 'SET_USER_TYPE',
    SET_USER_AGREE: 'SET_USER_AGREE',
    SET_USER_PROCESSING: 'SET_USER_PROCESSING',
} as const;

export function formReducer(state = initState, action: UserActionsType): typeof initState {
    switch (action.type) {
        case FormTypes.SET_USER_NAME: {
            return { ...state, name: { value: action.name, validate: action.validate } };
        }
        case FormTypes.SET_USER_EMAIL: {
            return { ...state, email: { value: action.email, validate: action.validate } };
        }
        case FormTypes.SET_USER_PHONE: {
            return { ...state, phone: { value: action.phone, validate: action.validate } };
        }
        case FormTypes.SET_USER_TYPE: {
            return { ...state, userType: action.userType };
        }
        case FormTypes.SET_USER_AGREE: {
            return { ...state, isAgree: action.isAgree};
        }
        case FormTypes.SET_USER_PROCESSING: {
            return { ...state, isProcessingData: action.isProcessingData };
        }
        default:
            return state;
    }
}
