import { FunctionComponent } from 'react';
import C$32:367$ from "F$32:367$";
import styles from './OpenOverlay.module.css';

type OpenOverlayType = {
  onClose?: () => void;
}

const OpenOverlay:FunctionComponent<OpenOverlayType> = ({ onClose }) => {

  return (
    <div className={styles.openOverlay}><StateClosed stateClosedStateClosed="/interfacesettingmenu1buttonparallelhorizontallinesmenunavigationthreehamburger.svg" stateClosedTop="0px" stateClosedLeft="0px" stateClosedWidth="192px" stateClosedCursor="unset" />
    </div>);
};

export default OpenOverlay;
