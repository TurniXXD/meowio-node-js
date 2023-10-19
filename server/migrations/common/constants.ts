import { ColumnDefinition, PgLiteral } from 'node-pg-migrate';

export const notNull = true;
export const unique = true;
export const primaryKey = true;

export const TIMESTAMP = 'timestamp(3) without time zone'; // prisma compatibility

export const id: ColumnDefinition = { type: 'text', notNull, primaryKey };

export const createdAt: ColumnDefinition = {
  type: TIMESTAMP,
  notNull,
  default: new PgLiteral('CURRENT_TIMESTAMP'),
};

export const updatedAt: ColumnDefinition = {
  type: TIMESTAMP,
  notNull,
  default: new PgLiteral('CURRENT_TIMESTAMP'),
};

export enum Tables {
  User = 'User',
  Article = 'Article',
}
