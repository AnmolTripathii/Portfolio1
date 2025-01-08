// import React from 'react'
// import './Services.css'
// function S_Head() {
//   return (
//     <div className='S_Head'>
//             <h4>What I Offer</h4>
//       <h1>Services</h1>
//     </div>
//   )
// }

// export default S_Head
import React from 'react';

function S_Head() {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <h4 className="text-gray-400 font-light text-lg leading-none">What I Offer</h4>
      <h1 className="text-primary font-medium text-4xl">Services</h1>
    </div>
  );
}
export default S_Head