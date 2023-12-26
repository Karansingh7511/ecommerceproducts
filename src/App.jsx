import React from 'react';
import Search from './components/Search';
import SideFilter from './components/SideFilter'
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
    <div className="App" style={{display:'flex'}} >
    <SideFilter/>
      <Search />
    </div>
    </Provider>
  );
}

export default App;
