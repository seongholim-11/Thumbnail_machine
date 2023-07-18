import React from "react";
import style from "./View.module.css";

const View = (props) => {
    return (
        <div
            className={style.wrap}
            style={{
                /*  background: `#${props.backgroundColor}`  */ 
                background: `linear-gradient(0deg, #${props.gradationColor[0]}, #${props.gradationColor[1]})`,
            }}
        >
            <div className={style.title}>{props.title}</div>
            <div className={style.subtitle}>{props.subtitle}</div>
            <div className={style.hashtag}>{props.hashtag}</div>
        </div>
    );
};

export default View;
