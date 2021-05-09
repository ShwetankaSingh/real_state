import './App.css';
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import PropertyList from "./components/PropertyList";
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from "./components/NotFoundPage";
import Protected from "./components/Protected";
import PropertyDetails from './components/PropertyDetails';
import SearchCity from './components/SearchCity';
import SearchArea from './components/SearchArea';
import SearchState from './components/SearchState';
import Admin from './components/Admin';
import Images from './components/Images';


function App() {
  return (
    <div>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutUs} />
        <Protected path="/propertylist" exact component={PropertyList} />
        <Protected path="/propertydetails/:id" exact component={PropertyDetails} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/searchcity" exact component={SearchCity} />
        <Route path="/searchArea" exact component={SearchArea} />
        <Route path="/searchState" exact component={SearchState} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/images" exact component={Images} />
        
        <Route component={NotFoundPage} />
      </Switch>

    </div>

  );
}

export default App;
