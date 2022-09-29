import { ReactNode, FC, useContext, useRef } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";

import { Context } from "./ModalProvider";
import { ModalDialog } from "./ModalDialog";

import styles from "./styles.module.css";
import { useClickOutside } from "../../utils";

interface ModalProps {
  handleCancel: () => void;
  children?: ReactNode;
  hasOverlay: boolean;
}
export const Modal: FC<ModalProps> = ({
  children,
  handleCancel,
  hasOverlay,
}) => {
  const modalNode = useContext(Context) as HTMLElement;
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, handleCancel);
  return modalNode
    ? ReactDOM.createPortal(
        <div
          className={classnames({
            [styles.Modal__overlay]: hasOverlay,
          })}
        >
          <ModalDialog>{children}</ModalDialog>
        </div>,
        modalNode
      )
    : null;
};
