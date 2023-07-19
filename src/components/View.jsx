import React from "react";
import style from "./View.module.css";

const View = (props) => {
    /* 
        전개 연산자를 사용하여 기존의 backgroundStyle 객체와 새로운 속성(backgroundImage)을 병합하여 새로운 객체를 생성합니다. 
        이를 통해 배경 스타일이 확장되고 새로운 속성이 추가됩니다.
        backgroundStyle 객체와 backgroundSize 객체를 전개 연산자를 사용하여 병합하여 하나의 스타일 객체로 생성합니다.
        이렇게 하면 컴포넌트의 style 속성에 배경 스타일과 크기 스타일이 모두 적용되어 화면에 표시됩니다.
        전개 연산자를 사용하면 기존의 객체나 배열을 변경하지 않고 새로운 객체나 배열을 생성할 수 있습니다. 
        전개 연산자(...)를 사용할 때, 겹치는 속성이 있는 경우 덮어쓰기(overwrite)가 됩니다.

    */
    let backgroundStyle;
    let backgroundSize;
    if (props.backgroundColor) {
        backgroundStyle = { background: `#${props.backgroundColor}` };
    } else if (props.gradationColor) {
        backgroundStyle = {
            background: `linear-gradient(0deg, #${props.gradationColor[0]}, #${props.gradationColor[1]})`,
        };
    } 
    if (props.backgroundUrl) {
        backgroundStyle = { ...backgroundStyle, backgroundImage: `url(${props.backgroundUrl})` };
        backgroundSize = { backgroundSize: 'cover' };
    }

    return (
        <div className={style.wrap} style={{ ...backgroundStyle, ...backgroundSize }}>
            <div className={style.title}>{props.title}</div>
            <div className={style.subtitle}>{props.subtitle}</div>
            <div className={style.hashtag}>{props.hashtag}</div>
        </div>
    );
};

export default View;
