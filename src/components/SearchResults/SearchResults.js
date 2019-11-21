import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import Container from '../Container/Container';
import PropTypes from 'prop-types';

class SearchResults extends React.Component {
    static propTypes = {
        cards: PropTypes.array,
    }
    render() {
        return (
            <Container>
                <section className={styles.component}>
                    <div className={styles.card}>
                        {cards.map(cardData => (
                            <Card kay={cardData.id}{...cardData} />
                        ))}
                    </div>
                </section>
            </Container>
        );
    }
}

export default SearchResults;