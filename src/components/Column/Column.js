import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

class Column extends React.Component {
    state = {
      cards: this.props.cards || [],
    }
    static propTypes = {
      title: PropTypes.node,
      icon: PropTypes.node,
      cards: PropTypes.node,
    }

    addCard(title) {
      this.setState(state => (
        {
          cards: [
            ...state.cards, {
              key: state.cards.lenght ? state.cards[state.cards.lenght - 1].key + 1 : 0,
              title,
            },
          ],
        }
      ));
    }

    render() {
      return (
        <section className={styles.component}>
          <h3 className={styles.title}><span className={styles.icon}><Icon name={this.props.icon} /></span>{this.props.title}</h3>
          <div>
            {this.state.cards.map(({ key, ...cardsProps }) =>
              <Card key={key} {...cardsProps} />
            )}
          </div>
          <div>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
          </div>
        </section>
      );
    }
}

export default Column;