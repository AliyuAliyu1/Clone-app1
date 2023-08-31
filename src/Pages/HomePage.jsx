// src/components/HomePage.js
import React from 'react';


function HomePage() {
  return (
    <div>
     <button onClick={() => window.location.href = `/`} >Home Page</button>
      
    </div>
  );
}

export default HomePage;
