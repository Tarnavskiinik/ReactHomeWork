import React, { useState } from 'react';

function Smiley({ name, image }) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <img src={image} alt={name} onClick={handleClick} />
            <div>Count: {count}</div>
        </div>
    );
}

export default Smiley;