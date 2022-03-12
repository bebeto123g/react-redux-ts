import React from 'react';
import Container from '../components/UI/Continer';
import PageTitle from '../components/UI/Typography/PageTitle';
import ButtonLink from '../components/UX/ButtonLink';

const ProfileEdit = () => {
    return (
        <Container>
            <PageTitle>Редактируем профиль тут</PageTitle>
            <ButtonLink to={'/'} variant="danger">
                Домой
            </ButtonLink>
        </Container>
    );
};

export default ProfileEdit;
