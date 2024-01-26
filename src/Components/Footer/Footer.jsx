import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.FooterBackground}>
      <div className={style.container1}>
        <div className={style.FooterDouble}>
          <div className={style.FooterOneOwner}>
            <div className={style.title}>ІНОФРМАЦІЯ</div>
            <div className={style.describtion}>
              <div>Політика конфіденційності</div>
              <div>Обмін повернення</div>
              <div>Доставка/Оплата</div>
            </div>
          </div>
          <div className={style.FooterOneOwner}>
            <div className={style.title}>
              МЕНЕДЖЕР ПО
              <br /> ЗАМОВЕННЯМ
            </div>
            <div className={style.describtion}>
              <div>+380(007)1012021</div>
              <div>+380(007)2022021</div>
              <div>+380(007)3032021</div>
              <div>+380(007)4042021</div>
            </div>
          </div>
        </div>
        <div className={style.FooterDouble}>
          <div className={style.FooterOneOwner}>
            <div className={style.title}>ГРАФІК РОБОТИ</div>
            <div className={style.describtion}>
              <div>Понеділок : 10:00 - 21:00</div>
              <div>Вівторок : 10:00 - 21:00</div>
              <div>Середа : 10:00 - 21:00</div>
              <div>Четвер : 10:00 - 21:00</div>
              <div>П'ятниця : 10:00 - 21:00</div>
              <div>Субота : 10:00 - 21:00</div>
              <div>Неділя : 10:00 - 21:00</div>
            </div>
          </div>
          <div className={style.FooterOneOwner}>
            <div className={style.title}>НАШІ КОНТАКТИ</div>
            <div className={style.describtion}>
              <div>Політика конфіденційності</div>
              <div>Обмін повернення</div>
              <div>Доставка/Оплата</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
