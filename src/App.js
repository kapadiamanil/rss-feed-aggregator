import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  RSS_FEED_LIST_ROUTE,
  RSS_FEED_CREATE_ROUTE,
  RSS_FEED_TABLE_ROUTE,
} from "./helper/constants";

import { RssFeedList, RssFeedInsert, RssFeedTable } from "./pages/RssFeed";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={RSS_FEED_TABLE_ROUTE} component={RssFeedTable} />
        <Route exact path={RSS_FEED_CREATE_ROUTE} component={RssFeedInsert} />
        <Route path={`${RSS_FEED_LIST_ROUTE}/*`} component={RssFeedList} />
      </Switch>
    </Router>
  );
};

export default App;
