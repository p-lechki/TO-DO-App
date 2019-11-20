import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { select } from '../../data/dataStore';

const Info = () => (
    <Container>
        <Hero titleText={select.infoSubpage.title} image={select.image} />
        <p>{select.infoSubpage.content}</p>
    </Container>
);

export default Info;