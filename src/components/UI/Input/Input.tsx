import React, {
    FC,
    FocusEventHandler,
    InputHTMLAttributes,
    KeyboardEventHandler,
    useEffect,
    useRef,
    useState,
} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    handler: FocusEventHandler<HTMLInputElement>
}

const Input: FC<Props> = ({ handler, value, ...props }) => {
    const [stateValue, setStateValue] = useState('');

    const inputEl = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputEl && stateValue !== value) {
            { /* @ts-ignore */ }
            inputEl.current.value = value;
        }
    }, [value, stateValue]);

    const checkChange: FocusEventHandler<HTMLInputElement> = (e) => {
        if (value !== e.target.value) {
            setStateValue(e.target.value);
            handler(e);
        }
    };

    const pressEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            {/* @ts-ignore */}
            checkChange(e);
        }
    };

    return (
        <input
            {...props}
            defaultValue={value}
            onBlur={checkChange}
            onKeyUp={pressEnter}
            ref={inputEl}
        />
    );
};

export default Input;
