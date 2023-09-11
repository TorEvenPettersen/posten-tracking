import logo from './posten-logo.jpg';
import './App.css';
import TrackingNumber from './TrackingNumber';
import { useEffect } from "react";

export default function App() {
 


  useEffect(() => {
    fetch(`https://tracking.bring.com/api/v2/tracking.json`)
      .then(response => response.json())
      .then((usefulData) => {
        console.log(usefulData);

      })


      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  });
 
  return (
    <>
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Track your packages</h1>
            <p>Tracking number input:</p>

            <TrackingNumber />
        </header>
      </div>
    </>
  )
}
