import { XMarkIcon } from "@heroicons/react/24/outline";

import { tw } from "~/utils";
import toastIcons from "./toastIcons";
import type { Toast } from "./toastStore";

export interface ToastMessageProps {
  toast: Toast;
  onClose: () => void;
}

export const ToastMessage = ({ toast, onClose }: ToastMessageProps) => {
  return (
    <div
      onClick={onClose}
      onKeyUp={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
      className={tw(
        "ring-opacity-5 pointer-events-auto z-50 w-full max-w-sm overflow-hidden rounded-lg bg-white ring-1 shadow-lg ring-black",
        toast.state === "open" && "animate-in slide-in-from-right duration-300",
        toast.state === "isClosing" && "animate-out fade-out-0 duration-500",
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {toast.icon ? toast.icon : toastIcons[toast.type]}
          </div>

          <div className="ml-3 flex w-0 flex-1 flex-col gap-1 pt-0.5">
            {toast.title && (
              <p className="text-sm font-medium text-gray-900">{toast.title}</p>
            )}
            {toast.message && (
              <p className="text-sm text-gray-500">{toast.message}</p>
            )}
          </div>

          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>

              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
