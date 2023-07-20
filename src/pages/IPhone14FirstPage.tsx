import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./IPhone14FirstPage.module.css";
const IPhone14FirstPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/iphone-14-front-end");
  }, [navigate]);

  return (
    <div className={styles.iphone14FirstPage}>
      <img
        className={styles.iphone14FirstPageChild}
        alt=""
        src="/rectangle-3.svg"
        onClick={onRectangleClick}
      />
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.orderHere}>Order Here</div>
    </div>
  );
};

export default IPhone14FirstPage;
