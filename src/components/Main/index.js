import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries';

const Main = () =>(
    <Switch>
        <Route exact path="/" component={Series} />
        <Route path="/series/:id" component={SingleSeries} />
    </Switch>
);

export default Main;