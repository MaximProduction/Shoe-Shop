import React from "react";
import style from "./NavReviews.module.css";
import Reviews1 from "../NavBarImgs/Reviews1.png";
import Reviews2 from "../NavBarImgs/Reviews2.png";
import Reviews3 from "../NavBarImgs/Reviews3.png";
import Reviews4 from "../NavBarImgs/Reviews4.png";

export default function NavReviews() {
  return (
    <div className={style.container}>
      <div className={style.OurReviews}>НАШІ ВІДГУКИ</div>
      <div className={style.AllContentBlock}>
        <div className={style.OutsideContainer}>
          <div className={style.ReviewsContainer}>
            <div>
              <img src={Reviews1} />
            </div>

            <div>
              <div className={style.describtion}>
                Подарувала чоловікові, дуже якісні, носити зручно, ноги не
                труть, і устілки не протираються. Одним словом можу
                рекомендувати цей магазин.
              </div>
              <div className={style.Name}>Валерія Бондаренко</div>
            </div>
          </div>
          <div className={style.ReviewsContainer}>
            <div>
              <img src={Reviews2} />
            </div>

            <div>
              <div className={style.describtion}>
                Подарувала чоловікові, дуже якісні, носити зручно, ноги не
                труть, і устілки не протираються. Одним словом можу
                рекомендувати цей магазин.
              </div>
              <div className={style.Name}>Володимир Копочинський</div>
            </div>
          </div>
        </div>
        <div className={style.OutsideContainer}>
          <div className={style.ReviewsContainer}>
            <div>
              <img src={Reviews3} />
            </div>

            <div>
              <div className={style.describtion}>
                Подарувала чоловікові, дуже якісні, носити зручно, ноги не
                труть, і устілки не протираються. Одним словом можу
                рекомендувати цей магазин.
              </div>
              <div className={style.Name}>Анастасія Горюк</div>
            </div>
          </div>
          <div className={style.ReviewsContainer}>
            <div>
              <img src={Reviews4} />
            </div>

            <div>
              <div className={style.describtion}>
                Подарувала чоловікові, дуже якісні, носити зручно, ноги не
                труть, і устілки не протираються. Одним словом можу
                рекомендувати цей магазин.
              </div>
              <div className={style.Name}>Олег Якубенко</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
