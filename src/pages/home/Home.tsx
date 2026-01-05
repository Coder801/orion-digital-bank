import { Header } from "@/modules/Header";
import { Sidebar } from "@/modules/Sidebar";
import { Main } from "@/modules/Main";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <Main className={styles.main} />
    </div>
  );
};

export default Home;
