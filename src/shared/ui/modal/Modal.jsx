import { useEffect, useState } from "react";

const TRANSITION_MS = 300;

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  primaryAction,
  primaryActionText = "Get Started",
  secondaryActionText = "Cancel",
  primaryDisabled = false,
  primaryLoading = false,
  primaryButtonType = "button", // button | submit
  primaryForm,
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let raf1;
    let raf2;
    let t;

    if (isOpen) {
      raf1 = window.requestAnimationFrame(() => {
        setShouldRender(true);
        raf2 = window.requestAnimationFrame(() => {
          setIsActive(true);
        });
      });
    } else {
      raf1 = window.requestAnimationFrame(() => {
        setIsActive(false);
      });
      t = window.setTimeout(() => {
        setShouldRender(false);
      }, TRANSITION_MS);
    }

    return () => {
      if (raf1) window.cancelAnimationFrame(raf1);
      if (raf2) window.cancelAnimationFrame(raf2);
      if (t) window.clearTimeout(t);
    };
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (shouldRender) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }

    document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [shouldRender]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && shouldRender) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [shouldRender, onClose]);

  if (!shouldRender) return null;

  const showPrimary = Boolean(primaryAction) || primaryButtonType === "submit";
  const primaryText = primaryLoading ? "Memproses…" : primaryActionText;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-tesla ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
        <div
          className={`relative w-full max-w-md rounded-lg border border-gray-200 bg-white transition-all duration-300 ease-tesla ${
            isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-5 sm:px-8 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <h2
                id="modal-title"
                className="text-lg font-medium text-dark sm:text-xl"
              >
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded p-1 text-graphite transition-colors duration-300 hover:bg-light hover:text-dark"
                aria-label="Close dialog"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-6 sm:px-8">{children}</div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-6 py-4 sm:flex sm:gap-3 sm:justify-end sm:px-8">
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-dark transition-colors duration-300 hover:bg-gray-50 sm:w-auto"
            >
              {secondaryActionText}
            </button>

            {showPrimary ? (
              <button
                type={primaryButtonType}
                form={primaryForm}
                onClick={primaryButtonType === "button" ? primaryAction : undefined}
                disabled={primaryDisabled || primaryLoading}
                aria-disabled={primaryDisabled || primaryLoading}
                className={`mt-3 w-full rounded bg-primary px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-0 sm:w-auto`}
              >
                {primaryText}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
