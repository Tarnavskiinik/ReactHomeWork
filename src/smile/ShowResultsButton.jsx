import React from 'react';
const ShowResultsButton = ({ emojiClicks }) => {

    const handleShowResults = () => {
        let maxClicks = -1;
        let winner = '';

        for (const [emoji, clicks] of Object.entries(emojiClicks)) {
            if (clicks > maxClicks) {
                maxClicks = clicks;
                winner = emoji;
            }
        }

        alert(`winner is ${winner}`);
    };

    return (
        <div className='result'>
            <button className='resultBut' onClick={handleShowResults}>Show Results</button>
        </div>
    );
};
export default ShowResultsButton