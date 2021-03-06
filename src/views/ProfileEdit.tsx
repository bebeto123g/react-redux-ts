import React from 'react';
import PageTitle from '../components/UI/Typography/PageTitle';
import ButtonLink from '../components/UI/Button/ButtonLink';

const ProfileEdit = () => {
    return (
        <>
            <PageTitle>Редактируем профиль тут</PageTitle>
            <ButtonLink to={'/'} variant="danger">
                Вернуться к заполненю формы
            </ButtonLink>
        </>
    );
};

export default ProfileEdit;
