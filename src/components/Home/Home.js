import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer';
import PropTypes from 'prop-types';
import { listData } from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Home extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        subtitle: PropTypes.node,
        lists: PropTypes.array,
    }
  render() {
      const {lists, title, subtitle} = this.props;
    return (
      <main className={styles.component}>
        <Search />
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/* <List {...listData} /> */}
        {lists.map(listData => (
            <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}

export default Home;
