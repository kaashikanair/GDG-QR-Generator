import {QRCodeCanvas} from "qrcode.react";
import { useState } from "react";
function App() {
  const [qrvalue , setqrvalue]= useState("");
  const [url , setUrl]= useState("");
  return (
    <div>
      <h1>QR Code Generator</h1>
      <label>Enter URL:</label>
      <input 
        type="url"
        placeholder="Enter your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <br />
      <QRCodeCanvas value={url || " "} /> 

      
    </div>
  );
}

export default App;