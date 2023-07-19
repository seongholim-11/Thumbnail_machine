import React from 'react'
import style from "./Maintitle.module.css";

const Maintitle = () => {
  return (
    <div>
        <h1 className={style.title}>🤖Thumbnail Machine</h1>
        <p className={style.release}>📲 release: v 1.0.0 - seongho</p>
    </div>
  )
}

export default Maintitle