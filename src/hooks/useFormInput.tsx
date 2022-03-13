import { FocusEventHandler, useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { setFormName, setFormPhone, setFormEmail } from '../store/form/actions';

const actionsUseFormInput = {
    name: setFormName,
    email: setFormEmail,
    phone: setFormPhone,
};

type UseFormInputType = keyof typeof actionsUseFormInput;

export const useFormInput = (type: UseFormInputType) => {
    const { value, validate } = useAppSelector((state) => state.form[type]);

    const dispatch = useAppDispatch();
    const [error, setError] = useState(false);

    const handler: FocusEventHandler<HTMLInputElement> = (e) => {
        dispatch(actionsUseFormInput[type](e.target.value));
    };

    const clearError = useCallback(() => {
        if (error) {
            setError(false);
        }
    }, [error]);

    useEffect(() => {
        if (!value) {
            clearError();
            return;
        }

        if (!validate) {
            setError(true);
        }
    }, [validate, value, clearError]);

    return { value, error, clearError, handler };
};
