import clsx from "clsx";
import { FC } from "react";

import styles from "./styles.module.scss";

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={clsx(className, styles.logo)}>
      <div className={styles.icon}>O</div>
      <span className={styles.text}>Orion Digital Bank</span>
    </div>
  );
};
