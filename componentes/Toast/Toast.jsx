import React, { useEffect } from "react";
import style from "./Toast.module.css";

export const Toast = ({
  open = false,
  children,
  autoHideDuration = 5000,
  onClose = () => {}
}) => {
  useEffect(() => {
    if (open) {
      startTimerToClose();
    }
  }, [open]);

  function startTimerToClose() {
    setTimeout(() => {
      onClose();
    }, autoHideDuration);
  }

  return (
    <div className={style.Snackbar}>
      {open && children}
    </div>
  )
}
