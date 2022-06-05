import { useContext } from "react";
import {ShopContext} from '../../store/context/context';
import styles from "./GoodsItem.module.scss";
import {FaBitcoin} from 'react-icons/fa';

const GoodsItem = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
    displayAssets: [{ background }],
    price: { regularPrice },
  } = props;

  const {addToCart} = useContext(ShopContext)
  return (
    <div className='col'>
      <div className={`${'card'} ${'h-100'} ${styles['card-product']}`}>
        <img
          src={background}
          className="card-img-top"
          alt="{displayName}"
        />
        <div className={styles.content}>
          <h4>{displayName}</h4>
          <p>{displayDescription}</p>
        </div>
        <button onClick={() => addToCart({
                mainId,
                displayName,
                price: { regularPrice }
            })}><FaBitcoin className={styles.coin}/>{regularPrice}</button>
      </div>
    </div>
  );
};

export default GoodsItem;
