import React from "react";
const EmojiList = ({ emojiClicks, setEmojiClicks }) => {
    const handleEmojiClick = (emoji) => {
        setEmojiClicks({
            ...emojiClicks,
            [emoji]: emojiClicks[emoji] + 1,
        });
    };

    return (
        <div className="bodySmile">
            <div>
                <span onClick={() => handleEmojiClick("smiling")}>😊</span>
                <span>{emojiClicks.smiling}</span>
            </div>
            <div>
                <span onClick={() => handleEmojiClick("heart")}>❤️</span>
                <span>{emojiClicks.heart}</span>
            </div>
            <div>
                <span onClick={() => handleEmojiClick("crying")}>😢</span>
                <span>{emojiClicks.crying}</span>
            </div>
            <div>
                <span onClick={() => handleEmojiClick("angry")}>😠</span>
                <span>{emojiClicks.angry}</span>
            </div>
            <div>
                <span onClick={() => handleEmojiClick("laughing")}>😆</span>
                <span>{emojiClicks.laughing}</span>
            </div>
        </div>
    );
};

export default EmojiList;