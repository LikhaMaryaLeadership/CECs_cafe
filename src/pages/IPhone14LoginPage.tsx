import { FunctionComponent, useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14LoginPage.module.css";
const IPhone14LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-order-page");
  }, [navigate]);

  return (
    <div className={styles.iphone14LoginPage}>
      <div className={styles.iphone14LoginPageChild} />
      <div className={styles.iphone14LoginPageItem} />
      <img
        className={styles.interfaceHome2DoorEntrancIcon}
        alt=""
        src="/interfacehome2doorentrancehomehousemaproofround2.svg"
      />
      <img
        className={styles.interfaceSettingMenu1ButtIcon}
        alt=""
        src="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger1.svg"
      />
      <img
        className={styles.foodDrinksTeaCupHerbalCoIcon}
        alt=""
        src="/fooddrinksteacupherbalcookteatisanecupdrinkcookingnutritionmugfood1.svg"
      />
      <img
        className={styles.interfaceUserProfileFocusIcon}
        alt=""
        src="/interfaceuserprofilefocusclosegeometrichumanpersonprofilefocususer.svg"
      />
      <div className={styles.login}>Login</div>
      <img
        className={styles.iphone14LoginPageInner}
        alt=""
        src="/rectangle-4.svg"
        onClick={onRectangle2Click}
      />
      <Button
        className={styles.signIn}
        sx={{ width: 145 }}
        variant="text"
        color="primary"
        href="/iphone-14-order-page"
      >
        Sign In
      </Button>
      <img
        className={styles.interfaceFileClipboardTextIcon}
        alt=""
        src="/interfacefileclipboardtexteditionformtaskchecklisteditclipboard.svg"
      />
      <TextField
        className={styles.frameTextfield}
        sx={{ width: 334 }}
        color="primary"
        variant="standard"
        type="text"
        label="First Name"
        placeholder="Placeholder"
        helperText="First Name"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.iphone14LoginPageChild1}
        sx={{ width: 334 }}
        color="primary"
        variant="standard"
        type="text"
        label="Passwod"
        placeholder="Placeholder"
        helperText="Passwod"
        size="medium"
        margin="none"
      />
    </div>
  );
};

export default IPhone14LoginPage;
