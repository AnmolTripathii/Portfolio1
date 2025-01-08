// import React from 'react'
// import './Experience.css'
// function E_Head() {
//   return (
//     <div className='E_Head'>
//       <h4>What Skills I Have</h4>
//       <h1>My Experience</h1>
//     </div>
//   )
// }

// export default E_Head
import React from 'react';

function E_Head() {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <h4 className="font-light text-slate-400 leading-tight">What Skills I Have</h4>
      <h1 className="text-primary font-medium text-4xl md:text-3xl sm:text-2xl">My Experience</h1>
    </div>
  );
}

export default E_Head;