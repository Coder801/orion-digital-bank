import { Title } from "@/components/Title";

import { Header } from "@/modules/Header";
import { Sidebar } from "@/modules/Sidebar";

import styles from "./styles.module.scss";

const Account = () => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>
        <Title>Account Page</Title>
      </main>
    </div>
  );
};

export default Account;
