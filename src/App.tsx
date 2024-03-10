import React from 'react';
import Weather from './Weather';

const App: React.FC = () => {
  return (
    <div className="container"> {/* Apply the .container class here */}
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
};

export default App;
