import React, { useState } from "react";
import style from "./Background.module.css";

const randomRGB = function () {
    let rgb = "";
    rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
    rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
    rgb += (Math.floor(Math.random() * 90 + 1) + 150)
        .toString(16)
        .padStart(2, "0");
    return rgb;
};

const Background = (props) => {
    const [isLoading1, setIsLoading1] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [isLoading3, setIsLoading3] = useState(false);

    const randomColor = () => {
        props.setGradationColor([]);
        props.setBackgroundUrl("");
        const oneColor = randomRGB();
        return oneColor;
    };

    const randomgradation = () => {
        props.setBackgroundColor("");
        props.setBackgroundUrl("");
        const twoColor = [];
        twoColor.push(randomRGB());
        twoColor.push(randomRGB());
        return twoColor;
    };

    const backgroundUrl = () => {
        let userInput = "";
        props.setBackgroundColor("");
        props.setGradationColor([]);
        userInput = prompt("📬 Please enter the image address...");
        return userInput;
    };

    const buttonActive1 = () => {
        setIsLoading1(true);
        setTimeout(() => {
            setIsLoading1(false);
        }, 500);
    };

    const buttonActive2 = () => {
        setIsLoading2(true);
        setTimeout(() => {
            setIsLoading2(false);
        }, 500);
    };

    const buttonActive3 = () => {
        setIsLoading3(true);
        setTimeout(() => {
            setIsLoading3(false);
        }, 500);
    };

    return (
        <div className={style.wrap}>
            <button
                className={`${style.button1} ${
                    isLoading1 ? style.loading : ""
                }`}
                onClick={() => {
                    props.setBackgroundColor(randomColor());
                    buttonActive1();
                }}
            >
                🖍 Random color
            </button>
            <button
                className={`${style.button2} ${
                    isLoading2 ? style.loading : ""
                }`}
                onClick={() => {
                    props.setGradationColor(randomgradation());
                    buttonActive2();
                }}
            >
                🌈 Random Gradient
            </button>
            <button
                className={`${style.button3} ${
                    isLoading3 ? style.loading : ""
                }`}
                onClick={() => {
                    buttonActive3();
                    props.setBackgroundUrl(backgroundUrl());
                }}
            >
                🌐 Image URL
            </button>
        </div>
    );
};

export default Background;
