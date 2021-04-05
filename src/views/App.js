import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { toPeopleList, toPersonDetails } from 'assets/customFunctions/routes';
import PeopleList from './PeopleList';
import PersonDetails from './PersonDetails';
import Logo from 'components/atoms/Logo';
import { MainWrapper } from './styled';

const App = () => {
  return (
    <HashRouter>
      <Logo logo={'Star wars heros app'} />
      <MainWrapper>
        <Switch>
          <Route exact path={toPersonDetails()}>
            <PersonDetails />
          </Route>
          <Route exact path={toPeopleList()}>
            <PeopleList />
          </Route>
          <Route path="/">
            <Redirect to={toPeopleList()} />
          </Route>
        </Switch>
      </MainWrapper>
    </HashRouter>
  );
};

export default App;
