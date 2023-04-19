import React, { useState } from "react";
import EmojiList from "./smile/EmojiList";
import ShowResultsButton from "./smile/ShowResultsButton";
import "./App.css";

const App = () => {
    const [emojiClicks, setEmojiClicks] = useState({
        smiling: 0,
        heart: 0,
        crying: 0,
        angry: 0,
        laughing: 0,
    });

    return (
        <div>
            <EmojiList emojiClicks={emojiClicks} setEmojiClicks={setEmojiClicks} />
            <ShowResultsButton emojiClicks={emojiClicks} />
        </div>
    );
};

export default App;