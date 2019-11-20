import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { select } from '../../data/dataStore';

const FAQ = () => (
    <Container>
        <Hero titleText={select.faqSubpage.title} image={select.image} />
        <p>{select.faqSubpage.content}</p>
    </Container>
);

export default FAQ;