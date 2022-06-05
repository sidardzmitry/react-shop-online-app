import React, { useEffect, useContext } from "react";
import { ShopContext } from "../../store/context/context";
import { API_URL, API_KEY } from "..//../config";

import styles from "./Main.module.scss";

import Spinner from "../../components/Spinner/Spinner";
import GoodsList from "../../components/GoodsList/GoodsList";
import CartButton from "../../ui/CartButton/CartButton";
import CartList from "../../components/CartList/CartList";

const Main = () => {
  const { setGoods, loading, order, isCartShow } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.main}>
      {isCartShow && <CartList />}
      <CartButton quantity={order.length} />
      {loading ? <Spinner /> : <GoodsList />}
    </div>
  );
};

export default Main;
