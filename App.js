import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from './sidebar';
import Feed from './feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  /*eslint-disable */
  const [{ user }, dispatch] = useStateValue();

  //const user = null;//This is used to set an login or out
  return (
    <div className="app">
      {!user ? (<Login />) : (
      <>
        <Header />

        <div className="app__body">
  
          <Sidebar />
          <Feed />
          <Widgets />
        </div>  
      </>
      )}
      

    </div>
  );
}

export default App;
