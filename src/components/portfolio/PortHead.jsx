// import React from 'react'
// import './Portfolio.css'
// function PortHead() {
//   return (
//     <div>
//       <h4 className='PortHead'>My Recent Work</h4>
//       <h1>Portfolio</h1>
//     </div>
//   )
// }

// export default PortHead
import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import { gsap } from "gsap";

function PortHead() {
  const headRef = useRef(null);

  useEffect(() => {
    const el = headRef.current;

    // GSAP animation for headings
    gsap.fromTo(
      el,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div ref={headRef} className="port_head">
      <h4 className="port_head_subtitle">My Recent Work</h4>
      <h1 className="port_head_title">Portfolio</h1>
    </div>
  );
}

export default PortHead;
