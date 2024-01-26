import React from "react";
import style from "./LinksTo.module.css";
import instagram from "./LinksImgs/instagram.png";
import telegram from "./LinksImgs/telegram.png";
import viber from "./LinksImgs/viber.png";
import tiktok from "./LinksImgs/tiktok.png";
import { Route, Routes, Link } from "react-router-dom";
import LineWrapper from "../LineWrapper/LineWrapper";

export default function LinksTo() {
  return (
    <div className={style.LinksOutsideCon}>
      <LineWrapper />
      <div className={style.LinksToContainer}>
        <a href="https://www.instagram.com/">
          <div className={style.instagram}>
            <img className={style.InstOwner} src={instagram} />
          </div>
        </a>
        <a href="https://web.telegram.org/k/">
          <div className={style.telegram}>
            <img className={style.TelegramOwner} src={telegram} />
          </div>
        </a>
        <a href="https://www.viber.com/">
          <div className={style.viber}>
            <img className={style.ViberOwner} src={viber} />
          </div>
        </a>
        <a href="https://www.tiktok.com/">
          <div className={style.tiktok}>
            <img className={style.TiktikOwner} src={tiktok} />
          </div>
        </a>
      </div>
      <LineWrapper />
    </div>
  );
}
