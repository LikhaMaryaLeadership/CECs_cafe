import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Welcomename from "../components/Welcomename";
import styles from "./IPhone14OrderPage.module.css";
const IPhone14OrderPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFoodDrinksTeaCupHerbalCoIconClick = useCallback(() => {
    navigate("/iphone-14-current-orders-page");
  }, [navigate]);

  const onInterfaceUserProfileFocusIconClick = useCallback(() => {
    navigate("/iphone-14-profile-page");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/iphone-14-order-page");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/iphone-14-order-page");
  }, [navigate]);

  const onInterfaceFileClipboardTextClick = useCallback(() => {
    navigate("/iphone-14-menu-page");
  }, [navigate]);

  return (
    <div className={styles.iphone14OrderPage}>
      <div className={styles.iphone14OrderPageChild} />
      <div className={styles.iphone14OrderPageItem} />
      <img
        className={styles.interfaceHome2DoorEntrancIcon}
        alt=""
        src="/interfacehome2doorentrancehomehousemaproofround.svg"
      />
      <img
        className={styles.foodDrinksTeaCupHerbalCoIcon}
        alt=""
        onClick={onFoodDrinksTeaCupHerbalCoIconClick}
      />
      <img
        className={styles.interfaceUserProfileFocusIcon}
        alt=""
        src="/interfaceuserprofilefocusclosegeometrichumanpersonprofilefocususer.svg"
        onClick={onInterfaceUserProfileFocusIconClick}
      />
      <div className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-4.svg"
          onClick={onRectangle2Click}
        />
        <Button
          className={styles.quickOrder}
          sx={{ width: 145 }}
          variant="text"
          color="primary"
          href="/iphone-14-menu-page"
        >
          Quick Order
        </Button>
        <div className={styles.previousOrder}>*Previous Order</div>
      </div>
      <div className={styles.vectorGroup}>
        <img
          className={styles.frameChild}
          alt=""
          src="/rectangle-4.svg"
          onClick={onRectangle3Click}
        />
        <Button
          className={styles.quickOrder}
          sx={{ width: 145 }}
          variant="text"
          color="primary"
          href="/iphone-14-menu-page"
        >
          New Order
        </Button>
      </div>
      <Welcomename />
      <h3 className={styles.xxx} id="Name_User">
        XXX
      </h3>
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      <button
        className={styles.interfaceFileClipboardText}
        onClick={onInterfaceFileClipboardTextClick}
      >
        <img className={styles.groupIcon} alt="" src="/group.svg" />
      </button>
      <img
        className={styles.interfaceSettingMenu1ButtIcon}
        alt=""
        src="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger1.svg"
      />
    </div>
  );
};

export default IPhone14OrderPage;
