import React, { ChangeEventHandler } from 'react';
import { css } from '@emotion/css';

import RadioList from '../../UI/Radio/RadioList';
import RadioInput from '../../UI/Radio/RadioInput';
import { useAppDispatch, useAppSelector } from '../../../store';
import { UserType } from '../../../types';
import { setFormUserType } from '../../../store/form/actions';

const styles = css`
    margin-bottom: 32px;
`;

interface RadioListItemType {
    id: UserType;
    name: string;
    label: string;
}

const checkboxes: Array<RadioListItemType> = [
    { id: 'individual', name: 'reception-radio', label: 'Физическе лицо' },
    { id: 'entity', name: 'reception-radio', label: 'Юридическое лицо' },
];

const ReceptionFormUserType = () => {
    const userType = useAppSelector((state) => state.form.userType);
    const dispatch = useAppDispatch();

    const handler: ChangeEventHandler<HTMLDivElement> = (e) => {
        const id = e.target.id as UserType;
        dispatch(setFormUserType(id));
    };

    return (
        <RadioList onChange={handler} label="Заявление подаёт" className={styles}>
            {checkboxes.map(({ label, name, id }) => (
                <RadioInput key={id} name={name} id={id} defaultChecked={userType === id}>
                    {label}
                </RadioInput>
            ))}
        </RadioList>
    );
};
export default ReceptionFormUserType;
