import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Main from "./components/main";
import { Route, Switch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/upload'>
          <h1>hello</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
