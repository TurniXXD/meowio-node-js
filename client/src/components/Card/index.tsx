// Card.tsx
import React, { ReactNode } from 'react';
import styles from './card.module.scss';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return <div className={`${styles.card} ${className && className}`}>{children}</div>;
}
