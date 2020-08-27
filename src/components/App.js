import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChooseHero from './mc_choose_hero/ChooseHero';
import VsScreen from './mc_vs_screen/VsScreen';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ChooseHero} />
      <Route path='/vs' component={VsScreen} />
    </Switch>
  );
}

export default App;
