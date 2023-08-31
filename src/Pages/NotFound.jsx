import React from 'react';

function NotFound() {
    return (
      <div>
        {/* <a href={`/contacts/1`}>Your Name</a> */}
  
        {/* <form method="post"> */}
             <button onClick={() => window.location.href = `/Mark/1`} >Not Found</button> 
        {/* </form> */}
        
      </div>
    );
  }
  
  export default NotFound;