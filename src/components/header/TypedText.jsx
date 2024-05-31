import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
    useEffect(() => {
        const typeData = new Typed(".role", {
            strings: [
                "Software Developer",
                "Web Developer",
                "Coder",
                "UI Designer",
                
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
        });

        // Cleanup function to destroy Typed instance when component unmounts
        return () => {
            typeData.destroy();
        };
    }, []); // Empty dependency array to run effect only once on mount

    return (
        <span className="role"></span>
    );
};

export default TypedText;
