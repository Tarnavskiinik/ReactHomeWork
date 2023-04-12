import React, { useState } from 'react';
import Smiley from './smile/Smiley';

function App() {
    const [counts, setCounts] = useState({});

    const handleSmileyClick = (name) => {
        setCounts((prevCounts) => {
            const count = prevCounts[name] || 0;
            return {
                ...prevCounts,
                [name]: count + 1,
            };
        });
    };

    const handleShowResultsClick = () => {
        const winner = Object.entries(counts).reduce((prev, [name, count]) => {
            if (count > prev.count) {
                return { name, count };
            }
            return prev;
        }, { name: '', count: -1 });
        alert(`The winner is ${winner.name} with ${winner.count} votes!`);
    };

    return (
        <div>
            <h1>Smileys</h1>
            <Smiley name="happy" image="/happy.png" onClick={() => handleSmileyClick('happy')} />
            <Smiley name="sad" image="/sad.png" onClick={() => handleSmileyClick('sad')} />
            <Smiley name="angry" image="/angry.png" onClick={() => handleSmileyClick('angry')} />
            <button onClick={handleShowResultsClick}>Show Results</button>
        </div>
    );
}

export default App;
