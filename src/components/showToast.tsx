import { useState, type ReactElement } from "react";

export interface ToastState {
  show: boolean;
  failed: boolean;
}

type ToastWrapperProps = {
  children: ReactElement;
  toast: ToastState;
};

export default function ShowToastWrapper({
  children,
  toast,
}: ToastWrapperProps) {
  return (
    <>
      {children}
      {toast.show && (
        <div className="toast toast-start fade-slide-in">
          <div
            className={`alert ${toast.failed ? "alert-error" : "alert-success"}`}
          >
            <span>
              {toast.failed
                ? "Failed to send message."
                : "Message sent successfully."}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export const useShowToast = () => {
  const [toast, setToast] = useState({ show: false, failed: false });

  // show toast and after 2 second will remove
  const showToast = ({ isFailed }: { isFailed: boolean }) => {
    setToast({ show: true, failed: isFailed });
    setTimeout(() => setToast({ show: false, failed: false }), 2000); // auto-hide
  };

  return { toast, showToast };
};
