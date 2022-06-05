import { useContext } from "react";
import { ShopContext } from "../../store/context/context";

import styles from "./CartButton.module.scss";
import {BsCart} from 'react-icons/bs';

const CartButton = (props) => {
  const { order, handleCartShow = Function.prototype } =
    useContext(ShopContext);

  const quantity = order.length;
  
  return (
    <div className={styles["cart-button"]} onClick={handleCartShow}>
      <i>
        <BsCart className={styles.icon} />
      </i>
      {quantity ? <div><span>{quantity}</span></div> : null}
    </div>
  );
};

export default CartButton;
