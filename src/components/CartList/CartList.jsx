import { useContext } from "react";
import { ShopContext } from "../../store/context/context";

import styles from "./CartList.module.scss";
import Modal from "../../ui/Modal/Modal";
import CartItem from "../CartItem/CartItem";
import { VscClose } from "react-icons/vsc";

const CartList = () => {
  const { order = [], handleCartShow = Function.prototype } =
    useContext(ShopContext);
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);
  const cartItems = (
    <ul className={styles["cart-list"]}>
      {order.length ? (
        order.map((item) => <CartItem key={item.mainId} {...item} />)
      ) : (
        <h3>Cart is empty</h3>
      )}
    </ul>
  );
  return (
    <Modal handleCartShow={handleCartShow}>
      {cartItems}
      <div className={styles["cart-list-bottom"]}>
        <span className={styles.cross} onClick={handleCartShow}>
          <VscClose />
        </span>
        <span className={styles.total}>Total: {totalPrice}</span>
        {order.length ? <button className={styles.order}>Order</button> : null}
      </div>
    </Modal>
  );
};

export default CartList;
