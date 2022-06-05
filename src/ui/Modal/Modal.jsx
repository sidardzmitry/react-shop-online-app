import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import ModalBackdrop from "./ModalBackdrop/ModalBackdrop";
import ModalWindow from "./ModalWindow/ModalWindow";

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  const { children } = props;
  return (
    <Fragment>
      {ReactDOM.createPortal(<ModalBackdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
