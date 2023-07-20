import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14FrontEnd.module.css";
const IPhone14FrontEnd: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/iphone-14-sign-up-page");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/iphone-14-order-page");
  }, [navigate]);

  return (
    <div className={styles.iphone14FrontEnd}>
      <div className={styles.iphone14FrontEndChild} />
      <img
        className={styles.interfaceSettingMenu1ButtIcon}
        alt=""
        src="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger1.svg"
      />
      <div className={styles.iphone14FrontEndItem} />
      <img
        className={styles.interfaceHome2DoorEntrancIcon}
        alt=""
        src="/interfacehome2doorentrancehomehousemaproofround1.svg"
      />
      <img
        className={styles.foodDrinksTeaCupHerbalCoIcon}
        alt=""
        src="/fooddrinksteacupherbalcookteatisanecupdrinkcookingnutritionmugfood.svg"
      />
      <img
        className={styles.interfaceUserProfileFocusIcon}
        alt=""
        src="/interfaceuserprofilefocusclosegeometrichumanpersonprofilefocususer.svg"
      />
      <img
        className={styles.iphone14FrontEndInner}
        alt=""
        src="/rectangle-41.svg"
        onClick={onRectangle2Click}
      />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-4.svg"
        onClick={onRectangle3Click}
      />
      <img
        className={styles.iphone14FrontEndChild1}
        alt=""
        src="/rectangle-4.svg"
        onClick={onRectangle4Click}
      />
      <Button
        className={styles.login}
        sx={{ width: 145 }}
        variant="text"
        color="primary"
        href="/iphone-14-login-page"
      >
        Login
      </Button>
      <Button
        className={styles.signUp}
        sx={{ width: 145 }}
        variant="text"
        color="primary"
        href="/iphone-14-sign-up-page"
      >
        Sign Up
      </Button>
      <Button
        className={styles.continueAsGuest}
        sx={{ width: 249 }}
        variant="text"
        color="primary"
        href="/iphone-14-order-page"
      >
        Continue as Guest
      </Button>
      <img
        className={styles.interfaceFileClipboardTextIcon}
        alt=""
        src="/interfacefileclipboardtexteditionformtaskchecklisteditclipboard.svg"
      />
    </div>
  );
};

export default IPhone14FrontEnd;
