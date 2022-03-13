import React from 'react';
import PageTitle from '../components/UI/Typography/PageTitle';
import ButtonLink from '../components/UI/Button/ButtonLink';

const Terms = () => {
    return (
        <>
            <PageTitle>Условия предоставления услуги</PageTitle>
            <ButtonLink to={'/'} variant="danger">
                Вернуться к заполненю формы
            </ButtonLink>
        </>
    );
};

export default Terms;
