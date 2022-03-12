import React from 'react';
import { Link } from 'react-router-dom';
import BlockTitle from '../components/UI/Typography/BlockTitle';
import PageTitle from '../components/UI/Typography/PageTitle';
import Paragraph from '../components/UI/Typography/Paragraph';
import ReceptionForm from '../components/Form/ReceptionForm/ReceptionForm';

const Home = () => {
    return (
        <>
            <PageTitle>Запись на личный приём</PageTitle>
            <BlockTitle>Данные о приёме</BlockTitle>
            <Paragraph>
                Заполняются автоматически из Личного кабинета. Если хотите изменить данные,{' '}
                <Link to={'/profile-edit'}>отредактируйте профиль.</Link>
            </Paragraph>
            <ReceptionForm />
        </>
    );
};

export default Home;
