import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Main from "./components/main";
import { Route, Switch } from "react-router-dom";
import Upload from "./components/upload";
import UserPage from "./components/UserPage";

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
          <Upload />
        </Route>
        <Route path='/users/:userId'>
            <UserPage />
        </Route>
        <Route path='/songs/:songId'>
          <h1>song stuff</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
