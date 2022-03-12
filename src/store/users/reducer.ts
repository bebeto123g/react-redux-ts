import { GetActionsType } from '../index';
import actions from './actions';

type UserActionsType = GetActionsType<typeof actions>;

const initState = {
    name: '',
    email: ''
};

export const UserTypes = {
    SET_USER_NAME: 'SET_USER_NAME',
    SET_USER_EMAIL: 'SET_USER_EMAIL'
} as const;

export function usersReducer(state = initState, action: UserActionsType): typeof initState {
    switch (action.type) {
        case UserTypes.SET_USER_NAME: {
            return { ...state };
        }

        case UserTypes.SET_USER_EMAIL: {
            return { ...state };
        }

        default:
            return state;
    }
}
