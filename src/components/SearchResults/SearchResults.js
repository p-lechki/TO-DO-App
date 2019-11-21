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
        const {cards} = this.props;
        return (
            <Container>
                <section className={styles.component}>
                <div>
                    {cards.map(cardData => (
                        <div key={cardData.id}>{cardData.title}</div>
                    ))}
                </div>
                </section>
            </Container>
        );
    }
}

export default SearchResults;