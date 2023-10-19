import React, { ReactNode, useEffect, useState } from 'react';
import styles from './popup.module.scss';

export enum PopupType {
  Success = 'success',
  Error = 'error',
}

interface PopupProps {
  children?: ReactNode;
  className?: string;
  text?: string;
  type: PopupType;
}

export default function Popup({ children, className, text, type }: PopupProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000); // Disappear after 3 seconds

    // Clear the timeout and hide the popup if it's unmounted before the timeout is reached
    return () => {
      clearTimeout(timeout);
      setVisible(false);
    };
  }, []);

  return (
    <>
      {visible && (
        <div
          className={`${styles.popup} ${styles[type]} ${className && className}`}
        >
          {text || children}
        </div>
      )}
    </>
  );
}
