import clsx from "clsx";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { Logo } from "@/components/Logo";
import { Notification } from "@/components/Notification";
import { Profile } from "@/components/Profile";

import styles from "./styles.module.scss";

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <header className={clsx(className, styles.container)}>
      <Logo />

      <div className={styles.actions}>
        <Notification count={3} />
        <Profile avatar="JD" name="John Doe" role={t("header.customer")} />
      </div>
    </header>
  );
};
