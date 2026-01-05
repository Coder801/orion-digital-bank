export type NoticeType = "info" | "warning" | "error";

export type NoticeProps = {
  type: NoticeType;
  title?: string;
  message: string;
  className?: string;
};
