import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Shop Online App</h1>
      <div>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </header>
  );
};

export default Header;
