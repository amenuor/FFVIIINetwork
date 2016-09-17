import React from 'react';
import  { Route, IndexRoute } from 'react-router';
import App from './components/app';

import EntitiesListCont from './containers/entities_list_cont';
import EntityCont from './containers/entity_cont';

export default (
  <Route path="/"  component={App}>
    <IndexRoute component={EntitiesListCont} />
    <Route path="entity/:entityID" component={EntityCont} />
  </Route>
);
