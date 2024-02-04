import React from "react";
import googleLogo from "../../assets/googleLogo.svg";
import instagramLogo from "../../assets/instagramLogo.svg";
import swiggyLogo from "../../assets/swiggyLogo.svg";
import zomatoLogo from "../../assets/zomatoLogo.svg";
import mailLogo from "../../assets/gmailLogo.svg";
import whatsappLogo from "../../assets/whatsappLogo.svg";
import phoneLogo from "../../assets/phoneLogo.svg";
import * as urls from "../../assets/Urls";
import AppGridItem from "../appGridItem/AppGridItem";

const AppGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-2 justify-items-center p-2">
      <AppGridItem
        url={urls.PHONE_URL}
        logo={phoneLogo}
        text="Mobile"
      ></AppGridItem>
      <AppGridItem
        url={urls.GOOGLE_REVIEWS_URL}
        logo={googleLogo}
        text="Reviews"
      ></AppGridItem>
      <AppGridItem
        url={urls.EMAIL_URL}
        logo={mailLogo}
        text="Email"
      ></AppGridItem>
      <AppGridItem
        url={urls.WHATSAPP_URL}
        logo={whatsappLogo}
        text="WhatsApp"
      ></AppGridItem>
      <AppGridItem
        url={urls.INSTAGRAM_URL}
        logo={instagramLogo}
        text="Instagram"
      ></AppGridItem>
      <AppGridItem
        url={urls.SWIGGY_URL}
        logo={swiggyLogo}
        text="Swiggy"
      ></AppGridItem>
      <AppGridItem
        url={urls.ZOMATO_URL}
        logo={zomatoLogo}
        text="Zomato"
      ></AppGridItem>
    </div>
  );
};

export default AppGrid;
