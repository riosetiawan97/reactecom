import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin/dashboard" component={MasterLayout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
