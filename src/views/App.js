import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { toPeopleList, toPersonDetails } from 'assets/customFunctions/routes';
import PeopleList from './PeopleList';
import PersonDetails from './PersonDetails';
import Logo from 'components/atoms/Logo';
import { MainWrapper } from './styled';
import Intro from 'components/organisms/Intro';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={toPersonDetails()}>
          <Logo logo={'Star wars heroes app'} />
          <MainWrapper>
            <PersonDetails />
          </MainWrapper>
        </Route>
        <Route exact path={toPeopleList()}>
          <Logo logo={'Star wars heroes app'} />
          <MainWrapper>
            <PeopleList />
          </MainWrapper>
        </Route>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
