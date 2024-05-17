import React from 'react';
import cl from './AnimatedText.module.css'
import { TypingText } from 'supertext-react';


const AnimatedText = () => {
    return (
        <div class={cl.container}>
            <div class="prevent-select">
                <div>
                    <span style={{color: "#B1E969"}}>In [1]: </span> 
                    <span style={{color: "#5DA9F6"}}>я</span>()
                </div>
                <div style={{display: "flex"}}>
                    <span style={{color: "#FF615A", marginRight: "0.4em"}}>Out[1]: </span>
                    <TypingText
                        textArray={["", "\"Разработчик\"", "", "\"Программист\""]}
                        typingSpeed={80} // Speed of typing in milliseconds per character
                        loop={true} // Loop through the textArray
                        fontSize="inherit"
                        fontWeight="inherit"
                        color="inherit"
                        className={cl.customText}
                        triggerOnce={true} // Only trigger once on initial render
                    />
                    <div className={cl.cursor}></div>
                </div>
            </div>
        </div>
    );
}

export default AnimatedText;
