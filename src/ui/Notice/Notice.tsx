import { FC } from "react";
import clsx from "clsx";
import {
  MdInfo,
  MdWarning,
  MdError,
} from "react-icons/md";

import { NoticeProps } from "./types";
import styles from "./styles.module.scss";

export const Notice: FC<NoticeProps> = ({ type, title, message, className }) => {
  const icons = {
    info: <MdInfo />,
    warning: <MdWarning />,
    error: <MdError />,
  };

  return (
    <div className={clsx(styles.notice, styles[type], className)}>
      <div className={styles.icon}>{icons[type]}</div>
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.message}>{message}</div>
      </div>
    </div>
  );
};
