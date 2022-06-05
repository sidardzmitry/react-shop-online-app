import { useContext } from "react";
import {ShopContext} from '../../../store/context/context';

import styles from "./ModalBackdrop.module.scss";

const ModalBackdrop = (props) => {
  const { handleCartShow = Function.prototype } = useContext(ShopContext);
  return <div className={styles.backdrop} onClick={handleCartShow}></div>;
};

export default ModalBackdrop;
