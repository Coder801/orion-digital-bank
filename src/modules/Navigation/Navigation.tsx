import clsx from "clsx";
import { FC } from "react";

import styles from "./styles.module.scss";

export type NavigationItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

type NavigationProps = {
  items: NavigationItem[];
  activeItem?: string;
  onItemClick?: (id: string) => void;
  orientation?: "vertical" | "horizontal";
  className?: string;
};

export const Navigation: FC<NavigationProps> = ({
  items,
  activeItem,
  onItemClick,
  orientation = "vertical",
  className,
}) => {
  return (
    <nav className={clsx(className, styles.nav)}>
      <ul
        className={clsx(styles.navigation, {
          [styles.navigationVertical]: orientation === "vertical",
          [styles.navigationHorizontal]: orientation === "horizontal",
        })}
      >
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <button
                className={clsx(styles.navigationItem, {
                  [styles.active]: activeItem === item.id,
                })}
                onClick={() => onItemClick?.(item.id)}
              >
                <span className={styles.navigationIcon}>
                  <Icon />
                </span>
                <span className={styles.navigationLabel}>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
