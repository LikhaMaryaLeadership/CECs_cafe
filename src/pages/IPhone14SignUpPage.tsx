import { FunctionComponent, useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14SignUpPage.module.css";
const IPhone14SignUpPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-order-page");
  }, [navigate]);

  return (
    <main className={styles.iphone14SignUpPage}>
      <div className={styles.iphone14SignUpPageChild} />
      <div className={styles.iphone14SignUpPageItem} />
      <img
        className={styles.interfaceHome2DoorEntrancIcon}
        alt=""
        src="/interfacehome2doorentrancehomehousemaproofround.svg"
      />
      <img
        className={styles.interfaceSettingMenu1ButtIcon}
        alt=""
        src="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger1.svg"
      />
      <img
        className={styles.foodDrinksTeaCupHerbalCoIcon}
        alt=""
        src="/fooddrinksteacupherbalcookteatisanecupdrinkcookingnutritionmugfood2.svg"
      />
      <img
        className={styles.interfaceUserProfileFocusIcon}
        alt=""
        src="/interfaceuserprofilefocusclosegeometrichumanpersonprofilefocususer.svg"
      />
      <div className={styles.signUp}>Sign Up</div>
      <TextField
        className={styles.iphone14SignUpPageInner}
        sx={{ width: 334 }}
        color="primary"
        variant="standard"
        type="text"
        label="Password"
        placeholder="Placeholder"
        helperText="Password"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.frameTextfield}
        sx={{ width: 333 }}
        color="primary"
        variant="standard"
        type="text"
        label="Confirm Password"
        placeholder="Placeholder"
        helperText="Confirm Password"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.iphone14SignUpPageChild1}
        sx={{ width: 334 }}
        color="primary"
        variant="standard"
        type="text"
        label="Last Name"
        placeholder="Placeholder"
        helperText="Last Name"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.iphone14SignUpPageChild2}
        sx={{ width: 334 }}
        color="primary"
        variant="standard"
        type="text"
        label="First Name"
        placeholder="Placeholder"
        helperText="Last Name"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.iphone14SignUpPageChild3}
        sx={{ width: 334 }}
        color="primary"
        variant="standard"
        type="text"
        label="Date of Birth"
        placeholder="Placeholder"
        helperText="Date of Birth"
        size="medium"
        margin="none"
      />
      <button className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-4.svg"
          onClick={onRectangle2Click}
        />
        <Button
          className={styles.signUp1}
          sx={{ width: 145 }}
          variant="text"
          color="primary"
          href="/iphone-14-login-page"
        >
          Sign Up
        </Button>
      </button>
      <img
        className={styles.interfaceFileClipboardTextIcon}
        alt=""
        src="/interfacefileclipboardtexteditionformtaskchecklisteditclipboard.svg"
      />
    </main>
  );
};

export default IPhone14SignUpPage;
