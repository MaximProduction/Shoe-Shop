import React from "react";
import LineWrapper from "../LineWrapper/LineWrapper";
import style from "./NavBar.module.css";
import Boot1 from "./NavBarImgs/Boot1.png";
import Boot2 from "./NavBarImgs/Boot2.png";
import Boot3 from "./NavBarImgs/Boot3.png";
import Boot4 from "./NavBarImgs/Boot4.png";
import Boot5 from "./NavBarImgs/Boot5.png";
import Boot6 from "./NavBarImgs/Boot6.png";
import NavDeliver from "./NavComponents/NavDeliver";
import NavReviews from "./NavComponents/NavReviews";
import NavShop from "./NavComponents/NavShop";
export default function NavBar() {
  return (
    <div className={style.AfterCon}>
      <NavShop />

      <NavDeliver />
      <NavReviews />
    </div>
  );
}
