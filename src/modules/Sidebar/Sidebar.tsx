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

import { Navigation, NavigationItem } from "@/modules/Navigation";
import styles from "./styles.module.scss";

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState("dashboard");

  const navigationItems: NavigationItem[] = [
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
      <div className={styles.navigationWrapper}>
        <Navigation
          items={navigationItems}
          activeItem={activeItem}
          onItemClick={setActiveItem}
          orientation="vertical"
        />
      </div>

      <div className={styles.footer}>
        <button className={styles.logoutButton}>
          <span className={styles.navigationIcon}>
            <MdLogout />
          </span>
          <span className={styles.navigationLabel}>{t("sidebar.logout")}</span>
        </button>
      </div>
    </aside>
  );
};
