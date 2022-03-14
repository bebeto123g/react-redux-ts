import React, { useEffect } from 'react';
import { css } from '@emotion/css';
import { useAppSelector } from '../../store';
import { LabelStyle } from '../UI/Input/Label';
import Paragraph from '../UI/Typography/Paragraph';

const styles = css`
    margin-bottom: 24px;
    padding: 24px;
    background-color: #ebf1ff;

    p:last-of-type {
        margin-bottom: 0;
    }
`;

const SuccessBlock = () => {
    const email = useAppSelector((state) => state.form.email);

    return (
        <div className={styles}>
            <LabelStyle as={'div'}>Заявка отправлена</LabelStyle>
            <Paragraph>Номер вашей заявки 7777-00120-6703-235/19</Paragraph>
            <Paragraph>
                На электронную почту {email.value} придёт подтверждение с указанием времени приёма,
                а перед приёмом — инструкция по подключению. Если у вас возникнут вопросы, задайте
                их по телефону: <a href="tel:+71234567890">+7 123 456-78-90.</a>
            </Paragraph>
        </div>
    );
};

export default SuccessBlock;
