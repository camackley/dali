import React from "react";

import Navbar from '../components/Navbar/Navbar'

import websiteOverConstrution from '../assets/website-over-constrution.png'

function App() {
  return (
    <div>
      <Navbar/>
      <section> 
        <div style={{display: "flex"}}>
          <img
          style={{height: "366px", margin:"auto"}} 
          src={websiteOverConstrution}
          alt="Sitio web en construcción"
          />
        </div>
        <h2 className="text-center mt-2">Sitio web en construcción</h2>
      </section>
    </div>
  );
}

export default App;