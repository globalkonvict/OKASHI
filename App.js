import React from 'react';
import {Tab, ScrollableTab, Tabs} from 'native-base';
import {JokesTab} from './app/tabs/JokesTab';
import {AppHeader} from './app/components/Header';
import {AboutTab} from './app/tabs/AboutTab';

const App = props => {
  return (
    <>
      <AppHeader />
      <Tabs
        tabBarUnderlineStyle={{backgroundColor: '#ff3f34'}}
        renderTabBar={() => (
          <ScrollableTab style={{backgroundColor: '#1e272e'}} />
        )}>
        <Tab
          activeTabStyle={{backgroundColor: '#1e272e'}}
          tabStyle={{backgroundColor: '#1e272e'}}
          textStyle={{color: 'white'}}
          heading="Jokes">
          <JokesTab />
        </Tab>
        <Tab
          activeTabStyle={{backgroundColor: '#1e272e'}}
          tabStyle={{backgroundColor: '#1e272e'}}
          textStyle={{color: 'white'}}
          heading="About">
          <AboutTab />
        </Tab>
      </Tabs>
    </>
  );
};

export default App;
