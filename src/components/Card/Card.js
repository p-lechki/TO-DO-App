import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import ReactHtmlPaser from 'react-html-parser';

const Card = props => (
    <div className={styles.component}>
        <h2>{ReactHtmlPaser(props.title)}</h2>
    </div>
)

Card.propTypes = {
    title: PropTypes.node,
}

export default Card;