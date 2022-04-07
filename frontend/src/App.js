import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Main from "./components/main";
import { Route, Switch } from "react-router-dom";
import Upload from "./components/upload";
import SongPage from "./components/SongPage";
import UpdatePage from "./components/Update/UpdatePage";
import Audio from "./components/AudioPlayer";
import { getSongs } from "./store/song";

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
            <h1>account stuff</h1>
        </Route>
        <Route path='/songs/:songId'>
          <SongPage />
        </Route>
        <Route path='/update/:songId'>
          <UpdatePage />
        </Route>
      </Switch>
      <Audio />
    </>
  );
}

export default App;
