import './App.css';
import { RatingScreen } from './screens/RatingScreen';
import { HomeScreen } from './screens/HomeScreen';
import { GlobalStoreProvider } from './GlobalStore';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// main app
// added a global store to store some ratings
// added a router to switch between booking/home component and the rating component
const App = () => {

  return (
    <div className="App">
      <GlobalStoreProvider>
        <Router>
          <Switch>
            <Route path="/rating">
              <RatingScreen/>
            </Route>
            <Route path="/">
              <HomeScreen/>
            </Route>
          </Switch>
        </Router>
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
