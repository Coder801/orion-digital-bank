import { FC } from "react";
import clsx from "clsx";

import { StatCardProps } from "./types";
import styles from "./styles.module.scss";

export const StatCard: FC<StatCardProps> = ({ icon, label, value, className }) => {
  return (
    <div className={clsx(styles.statCard, className)}>
      <div className={styles.statIcon}>{icon}</div>
      <div className={styles.statContent}>
        <div className={styles.statLabel}>{label}</div>
        <div className={styles.statValue}>{value}</div>
      </div>
    </div>
  );
};
