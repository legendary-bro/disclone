import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session_form/login_container';
import CreateAccountContainer from './session_form/create_account_container';
import LogoutTestContainer from './session_form/logout_test_container';
import CoreContainer from './core/core_container';
import { Route } from 'react-router-dom';
import { LoggedAuthRoute, NotLoggedAuthRoute } from '../util/route_util';

export default () => (
  <div>
      <LoggedAuthRoute path ="/login" component={LoginContainer} redirect="/app" />
      <LoggedAuthRoute path ="/register" component={CreateAccountContainer} redirect="/app" />
    <div className="main-app">
      <NotLoggedAuthRoute path="/app" redirect="/login" component={CoreContainer}/>
    </div>
  </div>
);
