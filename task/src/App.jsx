import { Fragment } from "react";
import HomePage from "./Pages/HomePage";

import {Route} from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <Route path="/">
      <HomePage />
    </Route>
  
    </Fragment>
  );
}

export default App;
