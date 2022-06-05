import { useContext } from "react";
import { ShopContext } from "../../store/context/context";

import "./GoodsList.module.scss";
import GoodsItem from "../GoodsItem/GoodsItem";

const Goods = () => {
  const { goods = [] } = useContext(ShopContext);
  if (!goods.length) {
    <h3>Nothing here</h3>;
  }
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
};

export default Goods;
