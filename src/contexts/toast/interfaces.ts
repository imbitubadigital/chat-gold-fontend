export type ToastTypeProps = "success" | "alert" | "error";

export interface ToastProps {
  message: string;
  type: ToastTypeProps;
}
export interface ToastContextData {
  addToast: (content: ToastProps) => void;
}
