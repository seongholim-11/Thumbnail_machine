import React from "react";
import style from './Titles.module.css'

const Title = (props) => {


    return (
        <div className={style.wrap}>
            <div className={style.inputs}>
                <input
                    type="text"
                    placeholder=" <Please enter the title...> "
                    value={props.title}
                    onChange={(e) => props.setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder=" <Please enter a sub-title...> "
                    value={props.subtitle}
                    onChange={(e) => props.setSubtitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder=" <Please enter a hashtag...> "
                    value={props.hashtag}
                    onChange={(e) => props.setHashtag(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Title;
