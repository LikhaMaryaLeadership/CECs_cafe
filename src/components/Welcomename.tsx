import { FunctionComponent } from "react";
import styles from "./Welcomename.module.css";

type WelcomenameType = {
  welcomeBackAkhil?: string;
};

const Welcomename: FunctionComponent<WelcomenameType> = ({
  welcomeBackAkhil = "Welcome Back",
}) => {
  return <div className={styles.welcomeBack}>{welcomeBackAkhil}</div>;
};

export default Welcomename;
