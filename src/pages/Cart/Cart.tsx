import React from "react";
import Title from "src/components/Title";
import FavoriteCardList from "src/components/FavoriteCardList/FavoriteCardList";
import { ButtonType, CardTypes } from "src/utils/@globalTypes";
import { useDispatch, useSelector } from "react-redux";
import Button from "src/components/Button";
import styles from "./Cart.module.scss";
import { CartSelector, clearCart } from "src/redux/reducers/cartSlice";
import { ArrowIcon } from "src/assets/icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartList = useSelector(CartSelector.getCartList);
  const dispatch = useDispatch();
  const price = cartList.reduce((accumulator, item) => {
    if (item?.quantity) {
      return accumulator + item?.quantity * +item?.price.substring(1);
    }
    return accumulator;
  }, 0);

  const vat = price * 0.2;

  const navigate = useNavigate();

  const onArrowClick = () => {
    navigate(-1);
  };

  const onClickCheckOut = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className={styles.arrow} onClick={onArrowClick}>
        <ArrowIcon />
      </div>
      <Title title={"Your cart"} />
      <FavoriteCardList cardList={cartList} type={CardTypes.Cart} />
      <div className={styles.container}>
        <div className={styles.mainPriceContainer}>
          <div className={styles.PriceAndVatContainer}>
            <div className={styles.priceContainer}>
              <div className={styles.priceTitle}>Sum total</div>
              <div className={styles.price}>{`$ ${price.toFixed(2)}`}</div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.priceTitle}>VAT</div>
              <div className={styles.price}>{`$ ${vat.toFixed(2)}`}</div>
            </div>
          </div>
          <div className={styles.priceContainer}>
            <div className={styles.total}>total:</div>
            <div className={styles.totalSum}>{`$${(price + vat).toFixed(
              2
            )}`}</div>
          </div>
          {cartList.length > 0 ? (
            <Button
              title={"check out"}
              onClick={onClickCheckOut}
              type={ButtonType.Primary}
            />
          ) : (
            <Button
              title={"check out"}
              disabled={true}
              onClick={() => {}}
              type={ButtonType.Primary}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
