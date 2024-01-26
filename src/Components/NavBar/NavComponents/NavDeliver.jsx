import React from "react";
import style from "./NavDeliver.module.css";
import Deliver1 from "../NavBarImgs/Deliver1.png";
import Deliver2 from "../NavBarImgs/Deliver2.png";
import Deliver3 from "../NavBarImgs/Deliver3.png";
import LineWrapper from "../../LineWrapper/LineWrapper";

export default function NavDeliver() {
  return (
    <div className={style.container}>
      <LineWrapper />
      <div className={style.Hat}>
        <div className={style.BlueHat}>ЯК ЗАМОВИТИ ?</div>
        <div className={style.BlackHat}>ДОСТАВКА I ОПЛАТА</div>
      </div>
      <div className={style.DescriptionContainer}>
        <div>
          <img src={Deliver1} />
        </div>
        <div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>
              Зробити замовлення на сайтi
            </div>
            <div style={{ marginTop: 20, fontSize: 16, lineHeight: 1.5 }}>
              Пiсля цього наш менеджер зателефонує та <br />
              пiдтвердить замовення
            </div>
          </div>
        </div>
      </div>
      <div className={style.DescriptionContainer}>
        <div>
          <img src={Deliver2} />
        </div>
        <div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>
              Оплачуйте пiсля примiрки <br />
              на новiй поштi
              <br />
              (накладений платiж)
            </div>
            <div style={{ marginTop: 20, fontSize: 16, lineHeight: 1.5 }}>
              Швидко доставимо ваше взуття на будь-яке вiддiлення
              <br />
              Нової Пошти за 1-2 днi
            </div>
          </div>
        </div>
      </div>
      <div className={style.DescriptionContainer}>
        <div>
          <img src={Deliver3} />
        </div>
        <div>
          <div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>
              Повернення/Обмiн
            </div>
            <div style={{ marginTop: 20, fontSize: 16, lineHeight: 1.5 }}>
              Якщо вам не пiдiйшло взуття,залюбмки зробимо обмiн <br />
              на другий розмi або повернемо кошти
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
