import React, { FC } from 'react';
import { LabelStyle } from '../Input/Label';
import RadioInput from './RadioInput';

interface RadioListPropsType {
    label?: string;
}

// TODO сделать RadioList прото компонентом, а RadioInput принимать как потомков
const RadioList: FC<RadioListPropsType> = ({ label }) => {
    return (
        <div>
            {label && <LabelStyle as={'div'}>{label}</LabelStyle>}
            <RadioInput id="individual" name="reception-radio">
                Физическе лицо
            </RadioInput>
            <RadioInput id="entity" name="reception-radio">
                Юридическое лицо
            </RadioInput>
        </div>
    );
};

export default RadioList;
RadioList;
