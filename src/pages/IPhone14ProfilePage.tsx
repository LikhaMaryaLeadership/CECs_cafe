import { FunctionComponent, useState, useCallback } from 'react';
//import OpenOverlay from "../components/OpenOverlay";
import PortalPopup from "../components/PortalPopup";
import {useNavigate} from "react-router-dom";
//import C$32:367$ from "F$32:367$";
import styles from './IPhone14ProfilePage.module.css';
const IPhone14ProfilePage:FunctionComponent = () => {
const [isOpenOverlayOpen, setOpenOverlayOpen] = useState(false);
  const navigate = useNavigate();

  const onInterfaceHome2DoorEntrancIconClick = useCallback(() => {
    navigate("/iphone-14-order-page");
  }, [navigate]);


  const onFoodDrinksTeaCupHerbalCoIconClick = useCallback(() => {
    navigate("/iphone-14-current-orders-page");
  }, [navigate]);


  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-profile-page");
  }, [navigate]);


  const onRectangle3Click = useCallback(() => {
    navigate("/iphone-14-profile-page");
  }, [navigate]);


  const onRectangle4Click = useCallback(() => {
    navigate("/iphone-14-profile-page");
  }, [navigate]);


  const onInterfaceFileClipboardTextIconClick = useCallback(() => {
    navigate("/iphone-14-menu-page");
  }, [navigate]);

  const openOpenOverlay = useCallback(() => {
    setOpenOverlayOpen(true);
  }, []);

  const closeOpenOverlay = useCallback(() => {
    setOpenOverlayOpen(false);
  }, [])

  return (
    <div className={styles.iphone14ProfilePage}>
      <div className={styles.iphone14ProfilePageChild} />
      <div className={styles.iphone14ProfilePageItem} />
      <img className={styles.interfaceHome2DoorEntrancIcon} alt="" src="/interfacehome2doorentrancehomehousemaproofround.svg" onClick={onInterfaceHome2DoorEntrancIconClick} />
      <img className={styles.foodDrinksTeaCupHerbalCoIcon} alt="" src="/fooddrinksteacupherbalcookteatisanecupdrinkcookingnutritionmugfood3.svg" onClick={onFoodDrinksTeaCupHerbalCoIconClick} />
      <img className={styles.interfaceUserProfileFocusIcon} alt="" src="/interfaceuserprofilefocusclosegeometrichumanpersonprofilefocususer1.svg" />
      <img className={styles.iphone14ProfilePageInner} alt="" src="/rectangle-4.svg" onClick={onRectangle2Click} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-4.svg" onClick={onRectangle3Click} />
      <img className={styles.iphone14ProfilePageChild1} alt="" src="/rectangle-4.svg" onClick={onRectangle4Click} />
      <div className={styles.login}>Login</div>
      <div className={styles.signUp}>Sign Up</div>
      <div className={styles.continueAsGuest}>Continue as Guest</div><img
          className={styles.interfaceSettingMenu1ButtIcon}
          alt=""
          src="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger1.svg"
          onClick={openOpenOverlay}
        />
      <img className={styles.interfaceFileClipboardTextIcon} alt="" src="/interfacefileclipboardtexteditionformtaskchecklisteditclipboard.svg" onClick={onInterfaceFileClipboardTextIconClick} />
    </div>);
};

export default IPhone14ProfilePage;
