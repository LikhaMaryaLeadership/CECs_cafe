import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";
const GroupComponent: FunctionComponent = () => {
  return (
    <div className={styles.groupParent}>
      <img className={styles.groupChild} alt="" src="/group-9.svg" />
      <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
    </div>
  );
};

export default GroupComponent;
