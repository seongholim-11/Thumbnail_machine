import React from "react";
import style from './Titles.module.css'

const Title = (props) => {


    return (
        <div className={style.wrap}>
            <div className={style.inputs}>
                <input
                    type="text"
                    placeholder=" <제목을 입력해주세요> "
                    value={props.title}
                    onChange={(e) => props.setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder=" <부제목을 입력해주세요> "
                    value={props.subtitle}
                    onChange={(e) => props.setSubtitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder=" <해시태그를 입력해주세요> "
                    value={props.hashtag}
                    onChange={(e) => props.setHashtag(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Title;
