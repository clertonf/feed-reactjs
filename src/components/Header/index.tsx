import styles from "./styles.module.css";

import igniteIcon from "../../assets/ignite-icon.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteIcon} alt="icone do Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
