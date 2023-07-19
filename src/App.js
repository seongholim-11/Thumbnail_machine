import style from "./App.module.css";
import Title from "./components/Titles";
import View from "./components/View";
import Background from "./components/Background";

import html2canvas from "html2canvas";
import { useState, useRef } from "react";

function App() {
    // Title
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [hashtag, setHashtag] = useState("");

    // Background
    const [backgroundColor, setBackgroundColor] = useState("");
    const [gradationColor, setGradationColor] = useState([]);
    const [backgroundUrl, setBackgroundUrl] = useState("");

    // capture
    const captureEl = useRef();
    const appEl = useRef();
    const [display, setDisplay] = useState(false);

    const onCapture = () => {
        const element = captureEl.current;

        setDisplay(true);

        html2canvas(element).then((canvas) => {
            appEl.current.appendChild(canvas);
        });
    };

    const canvasclose = () => {
        setDisplay(false);
    };

    return (
        <p>
            <div className={style.root}></div>
            <div className={style.app}>
                <div className={style.view} ref={captureEl}>
                    <View
                        title={title}
                        subtitle={subtitle}
                        hashtag={hashtag}
                        backgroundColor={backgroundColor}
                        gradationColor={gradationColor}
                        backgroundUrl={backgroundUrl}

                    />
                </div>
                <div className={style.control}>
                    <Title
                        title={title}
                        setTitle={setTitle}
                        subtitle={subtitle}
                        setSubtitle={setSubtitle}
                        hashtag={hashtag}
                        setHashtag={setHashtag}
                    />
                    <Background
                        backgroundColor={backgroundColor}
                        setBackgroundColor={setBackgroundColor}
                        gradationColor={gradationColor}
                        setGradationColor={setGradationColor}
                        backgroundUrl={backgroundUrl}
                        setBackgroundUrl={setBackgroundUrl}
                    />
                </div>
                <button onClick={onCapture} className={style.onCapture}>
                    이미지 저장
                </button>
                <div
                    className={style.canvasback}
                    ref={appEl}
                    style={display ? { display: "block" } : { display: "none" }}
                >
                    <button onClick={canvasclose} className={style.canvasclose}>
                        Close
                    </button>
                </div>
            </div>
        </p>
    );
}

export default App;
