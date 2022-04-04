import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { getSongs } from "./store/query";
import Main from "./components/main";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getSongs())
  }, [dispatch]);
  const songs = useSelector(state => state.query.songs)
  console.log(songs)
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Main songs={songs}/>
    </>
  );
}

export default App;
