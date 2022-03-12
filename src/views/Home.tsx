import React from 'react';
import { Link } from 'react-router-dom';
import BlockTitle from '../components/UI/Typography/BlockTitle';
import PageTitle from '../components/UI/Typography/PageTitle';
import Container from '../components/UI/Continer';
import Paragraph from '../components/UI/Typography/Paragraph';
import InputBlock from '../components/UX/Input/InputBlock';
import ReceptionForm from '../components/Form/ReceptionForm';

const Home = () => {
    return (
        <Container>
            <PageTitle>Запись на личный приём</PageTitle>
            <BlockTitle>Данные о приёме</BlockTitle>
            <Paragraph>
                Заполняются автоматически из Личного кабинета. Если хотите изменить данные,{' '}
                <Link to={'/profile-edit'}>отредактируйте профиль.</Link>
            </Paragraph>

            <ReceptionForm />
        </Container>
    );
};

export default Home;
