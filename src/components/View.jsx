import React from "react";
import style from "./View.module.css";

const View = (props) => {
    let backgroundStyle;
    if (props.backgroundColor) {
        backgroundStyle = { background: `#${props.backgroundColor}` };
    } else {
        backgroundStyle = {
            background: `linear-gradient(0deg, #${props.gradationColor[0]}, #${props.gradationColor[1]})`,
        };
    }

    return (
        <div className={style.wrap} style={backgroundStyle}>
            <div className={style.title} style={{fontSize: 100}}>{props.title}</div>
            <div className={style.subtitle}>{props.subtitle}</div>
            <div className={style.hashtag}>{props.hashtag}</div>
        </div>
    );
};

export default View;
