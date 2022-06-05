import { useContext } from "react";
import { ShopContext } from "../../store/context/context";
import styles from "./CartItem.module.scss";
import { BsDash, BsPlus, BsTrash } from "react-icons/bs";

const CartItem = (props) => {
  const {
    mainId,
    displayName,
    price: { regularPrice },
    quantity,
  } = props;

  const { removeCartItem, incQuantity, decQuantity } = useContext(ShopContext);

  return (
    <li className={styles["cart-item"]}>
      <div className={styles.sum}>
        <span className={styles.price}>
          {displayName} x {quantity}
        </span>
        <span className={styles.amount}>{regularPrice * quantity}</span>
      </div>
      <div className={styles.btns}>
        <button onClick={() => decQuantity(mainId)}>
          <BsDash />
        </button>
        <button onClick={() => incQuantity(mainId)}>
          <BsPlus />
        </button>
        <button onClick={() => removeCartItem(mainId)}>
          <BsTrash />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
