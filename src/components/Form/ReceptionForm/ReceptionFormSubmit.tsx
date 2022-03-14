import React from 'react';
import { useAppSelector } from '../../../store';
import Button from '../../UI/Button/Button';

const ReceptionFormSubmit = () => {
    const isSubmit = useAppSelector((state) => state.form.isSubmit);

    return (
        <Button type="submit" size="lg" variant="primary" disabled={!isSubmit}>
            Продолжить
        </Button>
    );
};

export default ReceptionFormSubmit;
