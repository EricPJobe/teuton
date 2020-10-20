import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import MenuBar from "./components/menu-bar/menu-bar";
import ViewerContainer from "./containers/viewer-container/viewer-container";
import MasterData from "./containers/master-data/master-data";

function App() {
    return (
         <div className="App">
              <Router>
                   <MenuBar />
                   <Switch>
                       <Route path="/masterdata">
                            <MasterData />
                       </Route>
                       <Route path="/viewer">
                           <ViewerContainer />
                       </Route>
                       <Route path="/">
                           <ViewerContainer />
                       </Route>
                   </Switch>
              </Router>


         </div>
    );
}

export default App;
