import React from 'react';
import PageTitle from '../components/UI/Typography/PageTitle';
import ButtonLink from '../components/UX/ButtonLink';

const ProfileEdit = () => {
    return (
        <>
            <PageTitle>Редактируем профиль тут</PageTitle>
            <ButtonLink to={'/'} variant="danger">
                Домой
            </ButtonLink>
        </>
    );
};

export default ProfileEdit;
