import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessBlock from '../components/Success/SuccessBlock';
import ButtonLink from '../components/UI/Button/ButtonLink';
import Loader from '../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../store';
import { clearForm } from '../store/form/actions';

const Success = () => {
    const isSuccess = useAppSelector((state) => state.form.isSuccess);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isSuccess) {
            navigate('/');
        }
    });

    useEffect(() => {
        return () => {
            dispatch(clearForm());
        };
    }, [dispatch]);

    if (!isSuccess) {
        return <Loader />;
    }

    return (
        <>
            <SuccessBlock />
            <ButtonLink variant="primary" to="/">
                Вернуться к форме
            </ButtonLink>
        </>
    );
};

export default Success;
