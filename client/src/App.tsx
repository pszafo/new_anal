import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserTracking from './components/UserTracking';
import ChurnAnalysis from './components/ChurnAnalysis';
import FeatureUsage from './components/FeatureUsage';
import FeatureRequests from './components/FeatureRequests';
import Search from './components/Search';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/user-tracking" exact component={UserTracking} />
        <Route path="/churn-analysis" component={ChurnAnalysis} />
        <Route path="/feature-usage" component={FeatureUsage} />
        <Route path="/feature-requests" component={FeatureRequests} />
        <Route path="/search" exact component={Search} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
