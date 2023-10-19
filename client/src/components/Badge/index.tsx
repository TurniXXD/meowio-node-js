import React, { ReactNode } from 'react';
import styles from './badge.module.scss';
import { iconsResolver, Icons } from '../Icons';

export enum BadgeType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
}

interface CardProps {
  type: BadgeType;
  icon?: Icons;
  onClick?: () => void;
  children?: ReactNode;
  text?: string;
  className?: string;
}

export default function Badge({
  children,
  text,
  className,
  icon,
  onClick,
  type,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`${styles.badge} ${styles[type]} ${className && className} ${icon && styles.withIcon}`}
    >
      {text ? <span>{text}</span> : children}
      {icon && iconsResolver({ icon })}
    </div>
  );
}
