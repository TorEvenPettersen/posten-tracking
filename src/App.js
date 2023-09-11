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
          <>
            {consignment.packageSet.map(pkg => (
              <>             
              <div className="PackageInfo">
                <h2>Package information - {consignment.consignmentId}</h2>
                <p><strong>Consignment id - </strong>{consignment.consignmentId}</p>
                <p><strong>Weight: </strong>{pkg.weightInKgs} kg &nbsp;&nbsp; <strong>Size: </strong>{pkg.lengthInCm} x {pkg.widthInCm} x {pkg.heightInCm} cm</p>
                <p><strong>Event </strong></p>
                {pkg.eventSet.map(event => (
                 <>
                  <div>
                    <p>{event.description}</p>
                    <p className="EventInfo">{event.displayDate} {event.displayTime} - {event.city}</p>
                  </div>
                 </>
                ))}

              </div>
              
              <div className="SenderInfo">
                <h2>Sender information</h2>
                <p><strong>Sender</strong><br></br>{pkg.senderName}<br></br>{pkg.senderAddress.addressLine1}<br></br>{pkg.senderAddress.postalCode} {pkg.senderAddress.city}<br></br>{pkg.senderAddress.country}</p>
                <p><strong>Recipient</strong><br></br>{pkg.recipientHandlingAddress.addressLine1}<br></br>{pkg.recipientHandlingAddress.postalCode} {pkg.recipientHandlingAddress.city}<br></br>{pkg.recipientHandlingAddress.country}</p>
                <p><strong>Sender reference</strong><br></br>{consignment.senderReference}</p>
                <p><strong>Latest status - </strong>{pkg.statusDescription}</p>
                <p><strong>Package number</strong><br></br>{pkg.packageNumber}</p>
                <p><strong>Product</strong><br></br>{pkg.productName}</p>           
              </div>
             
              </>
            ))}
          </>
        ))}
      </div>
      
    </>
  )
}

export default App;