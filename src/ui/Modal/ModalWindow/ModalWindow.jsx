import styles from "./ModalWindow.module.scss";

const ModalWindow = (props) => {
  const {children} = props;
  return (
    <div className={styles.modal}>
      <div>{children}</div>
    </div>
  );
};

export default ModalWindow;
