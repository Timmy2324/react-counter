import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

  const fanc = () => {

  }

  return (
    <div className="App">
      <div>
        <div>
          input
        </div>
        <div>
          buttons
          <Button title={'button'} callBack={fanc}/>
        </div>
      </div>

    </div>
  );
}

export default App;
