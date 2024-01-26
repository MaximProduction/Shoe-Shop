import React from "react";
import icon from './HeaderImgs/Icon.png'
import style from './Header.module.css'
export default function Header() {
    return (
        <div className={style.box}>
            <img className={style.responsiveImage} src={icon} />
        </div>
    )
}