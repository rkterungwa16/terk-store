import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Currency } from "../../../../types";
import { cartSelector } from "../../../store/selectors";
import { Cart } from "../../../views/cart/Cart";
import { ProductDetail } from "../../../views/cart/ProductDetail";

import { IconButton, StandardButton } from "../../buttons";
import { CartIcon } from "../../icons";
import { Modal } from "../../modal/Modal";

import styles from "./styles.module.css";

type Props = {
  totalNumberOfItems?: number;
  totalAmount?: number;
  currency?: Currency;
};

export const HeaderCartBadge: FC<Props> = ({
  totalNumberOfItems,
  currency,
}) => {
  const [modalIsOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const handleModalOpenClick = () => {
    setModalOpen(!modalIsOpen);
  };
  const handleModalCloseClick = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.HeaderCartBadge__container}>
      {!!totalNumberOfItems && (
        <span className={styles.HeaderCart__badge}>{totalNumberOfItems}</span>
      )}
      <IconButton onClick={handleModalOpenClick}>
        <CartIcon />
      </IconButton>
      {modalIsOpen && (
        <Modal handleCancel={handleModalCloseClick} hasOverlay>
          <div className={styles.CartDropdown__header}>
            <span className={styles["CartDropdown__title--bold"]}>My Bag</span>
            <span className={styles["CartDropdown__title--normal"]}>
              {` ,${totalNumberOfItems} items`}
            </span>
          </div>
          <div className={styles["CartDropdown__products--detail"]}>
            {cart.items.length ? (
              <Cart />
            ): null}
            {/* {cart.items.length ? (
              <>
                {cart.items.map((_item) => (
                  <ProductDetail
                    key={_item.item.selectedVariant.id}
                    productVariant={_item.item}
                  />
                ))}
              </>
            ) : null} */}
          </div>
          <div className={styles["CartDropdown__footer"]}>
            <span className={styles["CartDropdown__total--text"]}>Total</span>
            <span className={styles["CartDropdown__total--amount"]}>
              {`${currency?.symbol}${cart.totalAmount}`}
            </span>
          </div>
          <div className={styles["CartDropdown__footer"]}>
            <StandardButton variant="outlined" size="sm" color="default">
              View bag
            </StandardButton>
            <StandardButton variant="contained" size="sm" color="primary">
              Check out
            </StandardButton>
          </div>
        </Modal>
      )}
    </div>
  );
};
