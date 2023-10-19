/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';
import {
  Tables,
  createdAt,
  id,
  notNull,
  unique,
  updatedAt,
} from './common/constants';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable(Tables.User, {
    id,

    avatarId: { type: 'text', notNull },
    email: { type: 'text', notNull, unique },
    firstName: { type: 'text', notNull },
    lastName: { type: 'text', notNull },
    password: { type: 'text', notNull },
    role: { type: 'text', notNull },

    createdAt,
    updatedAt,
  });

  pgm.createTable(Tables.Article, {
    id,

    ownerId: { type: 'text', notNull },
    imageId: { type: 'text', notNull, unique },
    title: { type: 'text', notNull },
    perex: { type: 'text', notNull },
    content: { type: 'text', notNull },

    createdAt,
    updatedAt,
  });

  pgm.createConstraint(Tables.Article, 'User_Articles', {
    foreignKeys: [
      {
        columns: 'ownerId',
        references: Tables.User,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    ],
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable(Tables.Article, { cascade: true });
  pgm.dropTable(Tables.User, { cascade: true });
}
