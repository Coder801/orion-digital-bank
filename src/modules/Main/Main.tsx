import clsx from "clsx";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  MdAccountBalanceWallet,
  MdTrendingUp,
  MdTrendingDown,
  MdCreditCard,
  MdArrowUpward,
  MdArrowDownward,
} from "react-icons/md";

import { Notice } from "@/ui/Notice";
import { StatCard } from "@/components/StatCard";
import styles from "./styles.module.scss";

type MainProps = {
  className?: string;
};

type Card = {
  id: string;
  number: string;
  balance: string;
  type: string;
  expiry: string;
};

type Transaction = {
  id: string;
  title: string;
  date: string;
  amount: string;
  type: "income" | "expense";
  category: string;
};

export const Main: FC<MainProps> = ({ className }) => {
  const { t } = useTranslation();

  const cards: Card[] = [
    {
      id: "1",
      number: "**** **** **** 4532",
      balance: "$12,450.00",
      type: t("cards.visa"),
      expiry: "12/25",
    },
    {
      id: "2",
      number: "**** **** **** 8901",
      balance: "$8,320.50",
      type: t("cards.mastercard"),
      expiry: "09/26",
    },
  ];

  const transactions: Transaction[] = [
    {
      id: "1",
      title: t("transactions.salaryPayment"),
      date: "2026-01-02",
      amount: "+$5,200.00",
      type: "income",
      category: t("categories.salary"),
    },
    {
      id: "2",
      title: t("transactions.groceryStore"),
      date: "2026-01-02",
      amount: "-$125.40",
      type: "expense",
      category: t("categories.shopping"),
    },
    {
      id: "3",
      title: t("transactions.electricBill"),
      date: "2026-01-01",
      amount: "-$89.99",
      type: "expense",
      category: t("categories.utilities"),
    },
    {
      id: "4",
      title: t("transactions.restaurant"),
      date: "2025-12-31",
      amount: "-$67.50",
      type: "expense",
      category: t("categories.food"),
    },
    {
      id: "5",
      title: t("transactions.freelanceProject"),
      date: "2025-12-30",
      amount: "+$1,800.00",
      type: "income",
      category: t("categories.freelance"),
    },
  ];

  const totalBalance = "$20,770.50";

  return (
    <main className={clsx(className, styles.container)}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t("dashboard.title")}</h1>
        <p className={styles.subtitle}>{t("dashboard.welcome")}</p>
      </div>

      <div className={styles.notices}>
        <Notice
          type="info"
          title={t("notices.infoTitle")}
          message={t("notices.infoMessage")}
        />
        <Notice
          type="warning"
          title={t("notices.warningTitle")}
          message={t("notices.warningMessage")}
        />
        <Notice
          type="error"
          title={t("notices.errorTitle")}
          message={t("notices.errorMessage")}
        />
      </div>

      <div className={styles.stats}>
        <StatCard
          icon={<MdAccountBalanceWallet />}
          label={t("dashboard.totalBalance")}
          value={totalBalance}
        />
        <StatCard
          icon={<MdTrendingUp />}
          label={t("dashboard.income")}
          value="+$7,000.00"
        />
        <StatCard
          icon={<MdTrendingDown />}
          label={t("dashboard.expenses")}
          value="-$282.89"
        />
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("dashboard.myCards")}</h2>
          <div className={styles.cardsGrid}>
            {cards.map((card) => (
              <div key={card.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardType}>{card.type}</span>
                  <span className={styles.cardChip}>
                    <MdCreditCard />
                  </span>
                </div>
                <div className={styles.cardNumber}>{card.number}</div>
                <div className={styles.cardFooter}>
                  <div>
                    <div className={styles.cardLabel}>{t("dashboard.balance")}</div>
                    <div className={styles.cardBalance}>{card.balance}</div>
                  </div>
                  <div>
                    <div className={styles.cardLabel}>{t("dashboard.expiry")}</div>
                    <div className={styles.cardExpiry}>{card.expiry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t("dashboard.recentTransactions")}</h2>
          <div className={styles.transactions}>
            {transactions.map((transaction) => (
              <div key={transaction.id} className={styles.transaction}>
                <div className={styles.transactionIcon}>
                  {transaction.type === "income" ? (
                    <MdArrowUpward />
                  ) : (
                    <MdArrowDownward />
                  )}
                </div>
                <div className={styles.transactionDetails}>
                  <div className={styles.transactionTitle}>{transaction.title}</div>
                  <div className={styles.transactionMeta}>
                    {transaction.category} • {transaction.date}
                  </div>
                </div>
                <div
                  className={clsx(styles.transactionAmount, {
                    [styles.transactionIncome]: transaction.type === "income",
                    [styles.transactionExpense]: transaction.type === "expense",
                  })}
                >
                  {transaction.amount}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};
