import { FunctionComponent, useState, useCallback } from 'react';
import {Button, Icon} from '@mui/material';
//import OpenOverlay from "../components/OpenOverlay";
import PortalPopup from "../components/PortalPopup";
import {useNavigate} from "react-router-dom";
//import C$32:367$ from "F$32:367$";
import styles from './IPhone14MenuPage.module.css';
const IPhone14MenuPage:FunctionComponent = () => {
const [isOpenOverlayOpen, setOpenOverlayOpen] = useState(false);
  const navigate = useNavigate();

  const onInterfaceHome2DoorEntrancIconClick = useCallback(() => {
    navigate("/iphone-14-order-page");
  }, [navigate]);


  const onFoodDrinksTeaCupHerbalCoIconClick = useCallback(() => {
    navigate("/iphone-14-current-orders-page");
  }, [navigate]);


  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-menu-page");
  }, [navigate]);


  const onRectangle3Click = useCallback(() => {
    navigate("/iphone-14-menu-page");
  }, [navigate]);


  const onInterfaceUserProfileFocusIconClick = useCallback(() => {
    navigate("/iphone-14-profile-page");
  }, [navigate]);

  const openOpenOverlay = useCallback(() => {
    setOpenOverlayOpen(true);
  }, []);

  const closeOpenOverlay = useCallback(() => {
    setOpenOverlayOpen(false);
  }, []);

  return (
    <div className={styles.iphone14MenuPage}>
      <div className={styles.iphone14MenuPageChild} />
      <div className={styles.iphone14MenuPageItem} />
      <img className={styles.interfaceHome2DoorEntrancIcon} alt="" src="/interfacehome2doorentrancehomehousemaproofround3.svg" onClick={onInterfaceHome2DoorEntrancIconClick} />
      <img className={styles.foodDrinksTeaCupHerbalCoIcon} alt="" src="/fooddrinksteacupherbalcookteatisanecupdrinkcookingnutritionmugfood3.svg" onClick={onFoodDrinksTeaCupHerbalCoIconClick} />
      <img className={styles.iphone14MenuPageInner} alt="" src="/rectangle-4.svg" onClick={onRectangle2Click} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-4.svg" onClick={onRectangle3Click} />
      <Button className={styles.cappuccino} sx={{ width: 101 }} variant="text" color="primary">Cappuccino</Button>
      <div className={styles.hotDrinks}>Hot Drinks</div>
      <div className={styles.icedDrinks}>Iced Drinks</div><img
          className={styles.interfaceSettingMenu1ButtIcon}
          alt=""
          src="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger1.svg"
          onClick={openOpenOverlay}
        />
        
      <div className={styles.menu}>Menu</div>
      <Button className={styles.interfaceAdd2RemoveBoldC} sx={{ width: 14 }} variant="text" name="Cappuccino" color="primary" startIcon={<Icon>send_sharp</Icon>} />
      <Button className={styles.interfaceAdd2RemoveBoldC1} sx={{ width: 14 }} variant="text" name="Iced Latte" color="primary" startIcon={<Icon>send_sharp</Icon>} />
      <Button className={styles.interfaceAdd2RemoveBoldC2} sx={{ width: 14 }} variant="text" name="Frapuccino" color="primary" startIcon={<Icon>send_sharp</Icon>} />
      <Button className={styles.interfaceAdd2RemoveBoldC3} sx={{ width: 14 }} variant="text" name="Espresso" color="primary" startIcon={<Icon>send_sharp</Icon>} />
      <Button className={styles.interfaceAdd2RemoveBoldC4} sx={{ width: 14 }} variant="text" name="Latte" color="primary" startIcon={<Icon>send_sharp</Icon>} />
      <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
      <Button className={styles.frapuccino} sx={{ width: 89 }} variant="text" color="primary">Frapuccino</Button>
      <Button className={styles.icedLatte} sx={{ width: 118 }} variant="text" color="primary">Iced Latte</Button>
      <Button className={styles.espresso} sx={{ width: 74 }} variant="text" color="primary">Espresso</Button>
      <Button className={styles.latte} sx={{ width: 48 }} variant="text" color="primary">Latte</Button>
      <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
      <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
      <img className={styles.interfaceFileClipboardTextIcon} alt="" src="/interfacefileclipboardtexteditionformtaskchecklisteditclipboard.svg" />
      <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
      <img className={styles.interfaceUserProfileFocusIcon} alt="" src="/interfaceuserprofilefocusclosegeometrichumanpersonprofilefocususer1.svg" onClick={onInterfaceUserProfileFocusIconClick} />
    </div>);
};

export default IPhone14MenuPage;
