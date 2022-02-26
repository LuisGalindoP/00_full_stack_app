import {Router} from '@reach/router';


import AllGames from "./components/AllGames";
import NewGame from "./components/NewGame";
import OneGame from "./components/OneGame";


function App() {
  return (
    <div>
      <Router>
        <AllGames path={"/"} />
        <NewGame path={"/new"}/>
        <OneGame path={"/game/:id"}/>
      </Router>
    </div>
  );
}

export default App;
