import React from 'react';
import { WeekView } from './WeekView'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <WeekView initialActivities={[]}/>
      </header>
    </div>
  );
}

export default App;
