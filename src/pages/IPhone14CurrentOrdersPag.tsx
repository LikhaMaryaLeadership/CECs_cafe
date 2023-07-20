import { FunctionComponent, useState, useCallback } from 'react';
import {Button} from '@mui/material';
//import OpenOverlay from "../components/OpenOverlay";
import PortalPopup from "../components/PortalPopup";
import {useNavigate} from "react-router-dom";
//import C$32:367$ from "F$32:367$";
import styles from './IPhone14CurrentOrdersPag.module.css';
const IPhone14CurrentOrdersPag:FunctionComponent = () => {
const [isOpenOverlayOpen, setOpenOverlayOpen] = useState(false);
  const navigate = useNavigate();

  const onInterfaceHome2DoorEntrancIconClick = useCallback(() => {
    navigate("/iphone-14-order-page");
  }, [navigate]);


  const onInterfaceUserProfileFocusIconClick = useCallback(() => {
    navigate("/iphone-14-profile-page");
  }, [navigate]);


  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-current-orders-page");
  }, [navigate]);


  const onRectangle3Click = useCallback(() => {
    navigate("/iphone-14-current-orders-page");
  }, [navigate]);


  const onInterfaceFileClipboardTextIconClick = useCallback(() => {
    navigate("/iphone-14-menu-page");
  }, [navigate]);

  const openOpenOverlay = useCallback(() => {
    setOpenOverlayOpen(true);
  }, []);

  const closeOpenOverlay = useCallback(() => {
    setOpenOverlayOpen(false);
  }, []);


  return (
    <div className={styles.iphone14CurrentOrdersPag}>
      <div className={styles.iphone14CurrentOrdersPagChild} />
      <div className={styles.iphone14CurrentOrdersPagItem} />
      <img className={styles.interfaceHome2DoorEntrancIcon} alt="" src="/interfacehome2doorentrancehomehousemaproofround3.svg" onClick={onInterfaceHome2DoorEntrancIconClick} />
      <img className={styles.foodDrinksTeaCupHerbalCoIcon} alt="" src="/fooddrinksteacupherbalcookteatisanecupdrinkcookingnutritionmugfood3.svg" />
      <img className={styles.interfaceUserProfileFocusIcon} alt="" src="/interfaceuserprofilefocusclosegeometrichumanpersonprofilefocususer1.svg" onClick={onInterfaceUserProfileFocusIconClick} />
      <img className={styles.iphone14CurrentOrdersPagInner} alt="" src="/rectangle-6.svg" onClick={onRectangle2Click} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-7.svg" onClick={onRectangle3Click} />
      <div className={styles.orders}>Orders</div>
      <h3 className={styles.orderPlacedOn} id="Order placed">Order placed on 7/6/2023</h3>
      <p className={styles.locationLegacyWestContainer} id="details of order">
        <span className={styles.locationLegacyWest}>Location: Legacy West</span>
        <span className={styles.locationLegacyWest}>Placed at: 12:23 pm</span>
        <span className={styles.locationLegacyWest}>Ready by: 12:30 pm</span>
      </p><img
          className={styles.interfaceSettingMenu1ButtIcon}
          alt=""
          src="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger1.svg"
          onClick={openOpenOverlay}
        />
      <Button className={styles.requestMoreTime} sx={{ width: 198 }} variant="text" color="primary">Request more time</Button>
      <img className={styles.interfaceFileClipboardTextIcon} alt="" src="/interfacefileclipboardtexteditionformtaskchecklisteditclipboard.svg" onClick={onInterfaceFileClipboardTextIconClick} />
    </div>);
};

export default IPhone14CurrentOrdersPag;
