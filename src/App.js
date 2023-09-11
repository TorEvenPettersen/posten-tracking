import logo from './posten-logo.jpg';
import './App.css';
import TrackingNumber from './components/TrackingNumber.js';
import React, { useEffect, useState } from 'react';

function App() {
 
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
      fetch('https://api.bring.com/tracking/api/v2/tracking.json?q=TESTPACKAGEATPICKUPPOINT')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error(error));
    }, []);
 
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Track your packages</h1>

          <TrackingNumber />

        </header>

      </div>

      <div className="DisplayData">
        {jsonData && jsonData.consignmentSet.map(consignment => (
          <div key={consignment.consignmentId}>
            <p>{consignment.consignmentId}</p>
            <p>{consignment.senderReference}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;