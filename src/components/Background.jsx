import React, { useState } from "react";
import style from "./Background.module.css";

// 1이상 91미만의 난수 생성 후 소수점 버림
// + 150을 통해 150 이상 240 미만의 난수 생성
// 16진수로 변환
// padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
// 각 색상 채널의 16진수 값이 두 자리로 표현
// 최종적으로 rgb 문자열을 반환하여 무작위 RGB 색상 값
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

    // 랜덤 컬러 생성
    const randomColor = () => {
        props.setGradationColor([]);
        props.setBackgroundUrl("");
        const oneColor = randomRGB();
        return oneColor;
    };

    // 랜덤 컬러 2개를 통해 랜덤 그라데이션 생성
    const randomgradation = () => {
        props.setBackgroundColor("");
        props.setBackgroundUrl("");
        const twoColor = [];
        twoColor.push(randomRGB());
        twoColor.push(randomRGB());
        return twoColor;
    };

    // prompt() 함수를 통해 URL 입력 받기
    const backgroundUrl = () => {
        let userInput = "";
        props.setBackgroundColor("");
        props.setGradationColor([]);
        userInput = prompt("📬 Please enter the image address...");
        return userInput;
    };

    // 버튼 애니메이션을 위한 함수
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
