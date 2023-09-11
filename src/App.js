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

          <><div key={consignment.consignmentId}>
            <h2>Package information</h2>
            <p><strong>Consignment id - </strong>{consignment.consignmentId}</p>
            <p><strong>Sender reference - </strong>{consignment.senderReference}</p>
          </div>
          <div>
              {consignment.packageSet.map(pkg => (

                <div key={pkg.statusDescription}>
                  <p><strong>Latest status - </strong>{pkg.statusDescription}</p>
                  <p><strong>Package number - </strong>{pkg.packageNumber}</p>
                </div>

              ))}
            </div></>
        ))}
      </div>
      
    </>
  )
}

export default App;