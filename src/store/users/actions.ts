import { UserTypes } from './reducer';

export const setUserName = (name: string) => ({ type: UserTypes.SET_USER_NAME, name });
export const setUserEmail = (email: string) => ({ type: UserTypes.SET_USER_EMAIL, email });

export default { setUserName, setUserEmail };
