import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14CartPage.module.css";
const IPhone14CartPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onInterfaceHome2DoorEntrancIconClick = useCallback(() => {
    navigate("/iphone-14-order-page");
  }, [navigate]);

  const onFoodDrinksTeaCupHerbalCoIconClick = useCallback(() => {
    navigate("/iphone-14-current-orders-page");
  }, [navigate]);

  const onInterfaceUserProfileFocusIconClick = useCallback(() => {
    navigate("/iphone-14-profile-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-cart-page");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/iphone-14-cart-page");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/iphone-14-cart-page");
  }, [navigate]);

  const onInterfaceFileClipboardTextIconClick = useCallback(() => {
    navigate("/iphone-14-menu-page");
  }, [navigate]);

  return (
    <div className={styles.iphone14CartPage}>
      <div className={styles.iphone14CartPageChild} />
      <div className={styles.iphone14CartPageItem} />
      <img
        className={styles.interfaceHome2DoorEntrancIcon}
        alt=""
        src="/interfacehome2doorentrancehomehousemaproofround3.svg"
        onClick={onInterfaceHome2DoorEntrancIconClick}
      />
      <img
        className={styles.interfaceSettingMenu1ButtIcon}
        alt=""
        src="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger1.svg"
      />
      <img
        className={styles.foodDrinksTeaCupHerbalCoIcon}
        alt=""
        src="/fooddrinksteacupherbalcookteatisanecupdrinkcookingnutritionmugfood3.svg"
        onClick={onFoodDrinksTeaCupHerbalCoIconClick}
      />
      <img
        className={styles.interfaceUserProfileFocusIcon}
        alt=""
        src="/interfaceuserprofilefocusclosegeometrichumanpersonprofilefocususer1.svg"
        onClick={onInterfaceUserProfileFocusIconClick}
      />
      <img
        className={styles.iphone14CartPageInner}
        alt=""
        src="/rectangle-4.svg"
        onClick={onRectangle2Click}
      />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-4.svg"
        onClick={onRectangle3Click}
      />
      <img
        className={styles.iphone14CartPageChild1}
        alt=""
        src="/rectangle-4.svg"
        onClick={onRectangle4Click}
      />
      <div className={styles.login}>Login</div>
      <div className={styles.signUp}>Sign Up</div>
      <div className={styles.continueAsGuest}>Continue as Guest</div>
      <div className={styles.cart}>Cart</div>
      <img
        className={styles.interfaceFileClipboardTextIcon}
        alt=""
        src="/interfacefileclipboardtexteditionformtaskchecklisteditclipboard.svg"
        onClick={onInterfaceFileClipboardTextIconClick}
      />
    </div>
  );
};

export default IPhone14CartPage;
