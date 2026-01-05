import clsx from "clsx";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MdDashboard,
  MdAccountBalance,
  MdSwapHoriz,
  MdCreditCard,
  MdPayment,
  MdBarChart,
  MdSettings,
  MdLogout,
} from "react-icons/md";

import styles from "./styles.module.scss";

type SidebarProps = {
  className?: string;
};

type MenuItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState("dashboard");

  const menuItems: MenuItem[] = [
    { id: "dashboard", label: t("sidebar.dashboard"), icon: MdDashboard },
    { id: "accounts", label: t("sidebar.accounts"), icon: MdAccountBalance },
    {
      id: "transactions",
      label: t("sidebar.transactions"),
      icon: MdSwapHoriz,
    },
    { id: "cards", label: t("sidebar.cards"), icon: MdCreditCard },
    { id: "payments", label: t("sidebar.payments"), icon: MdPayment },
    { id: "analytics", label: t("sidebar.analytics"), icon: MdBarChart },
    { id: "settings", label: t("sidebar.settings"), icon: MdSettings },
  ];

  return (
    <aside className={clsx(className, styles.container)}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  className={clsx(styles.menuItem, {
                    [styles.menuItemActive]: activeItem === item.id,
                  })}
                  onClick={() => setActiveItem(item.id)}
                >
                  <span className={styles.menuIcon}>
                    <Icon />
                  </span>
                  <span className={styles.menuLabel}>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className={styles.footer}>
        <button className={styles.logoutButton}>
          <span className={styles.menuIcon}>
            <MdLogout />
          </span>
          <span className={styles.menuLabel}>{t("sidebar.logout")}</span>
        </button>
      </div>
    </aside>
  );
};
