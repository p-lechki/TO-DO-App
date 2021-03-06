import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import FAQ from '../FAQ/FAQ';
import List from '../List/ListContainer';
import MainLayout from '../MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import {BrowserRouter, Route } from 'react-router-dom';
import styles from './App.scss';
import SearchResultContainer from '../SearchResults/SearchResultContainer';

const App = () => (
    <BrowserRouter>
      <MainLayout>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={styles.switchWrapper}
        >
          <Route exact path='/' component={Home} />
          <Route exact path='/Info' component={Info} />
          <Route exact path='/FAQ' component={FAQ} />
          <Route exact path='/list/:id' component={List} />
          <Route exact path='/search/:searchString' component={SearchResultContainer} />
        </AnimatedSwitch>
      </MainLayout>
    </BrowserRouter>
);

export default App;