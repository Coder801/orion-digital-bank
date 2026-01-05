import clsx from "clsx";
import { FC } from "react";

import styles from "./styles.module.scss";

type ProfileProps = {
  className?: string;
  avatar: string;
  name: string;
  role: string;
};

export const Profile: FC<ProfileProps> = ({ className, avatar, name, role }) => {
  return (
    <div className={clsx(className, styles.profile)}>
      <div className={styles.avatar}>{avatar}</div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </div>
  );
};
