import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sibebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/clertonf.png" />

        <strong>Clerton Filho</strong>
        <span>Mobile Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
