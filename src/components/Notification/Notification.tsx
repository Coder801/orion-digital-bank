import clsx from "clsx";
import { FC } from "react";
import { MdNotifications } from "react-icons/md";

import styles from "./styles.module.scss";

type NotificationProps = {
  className?: string;
  count?: number;
};

export const Notification: FC<NotificationProps> = ({ className, count = 0 }) => {
  return (
    <button className={clsx(className, styles.notification)}>
      {count > 0 && <span className={styles.badge}>{count}</span>}
      <MdNotifications />
    </button>
  );
};
