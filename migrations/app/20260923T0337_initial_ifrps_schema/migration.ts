#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/99c5e4658bab52d0cab182b2ae75c00cbae40f90a67286ca08ae93a57005eb93/contract';
import endContract from '../../snapshots/99c5e4658bab52d0cab182b2ae75c00cbae40f90a67286ca08ae93a57005eb93/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  lit,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'membership',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('endedAt', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-string@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('organizationId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('playerId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('status', 'text', {
            notNull: true,
            default: lit('pending'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('verifiedAt', 'timestamptz', { codecRef: { codecId: 'pg/timestamptz-string@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'membership_status_check_b8b0009d',
            "\"status\" IN ('pending', 'active', 'suspended', 'inactive')",
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'organization',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('isActive', 'bool', {
            notNull: true,
            default: lit(true),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('region', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('slug', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('status', 'text', {
            notNull: true,
            default: lit('pending'),
            codecRef: { codecId: 'pg/text@1' },
          }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('websiteUrl', 'text', { codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'organization_status_check_387017ab',
            "\"status\" IN ('pending', 'verified', 'suspended', 'inactive')",
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'player',
        columns: [
          col('countryCode', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('displayName', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('isActive', 'bool', {
            notNull: true,
            default: lit(true),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('slug', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'rating',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('gamesPlayed', 'int4', {
            notNull: true,
            default: lit(0),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('playerId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('ratingSystemId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('value', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'ratingSystem',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('isActive', 'bool', {
            notNull: true,
            default: lit(true),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('isInternational', 'bool', {
            notNull: true,
            default: lit(false),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('kFactor', 'int4', {
            notNull: true,
            default: lit(32),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('organizationId', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('provisionalMatches', 'int4', {
            notNull: true,
            default: lit(10),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('slug', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('startingRating', 'int4', {
            notNull: true,
            default: lit(1500),
            codecRef: { codecId: 'pg/int4@1' },
          }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'membership',
        constraint: 'membership_playerId_organizationId_key',
        columns: ['playerId', 'organizationId'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'organization',
        constraint: 'organization_slug_key',
        columns: ['slug'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'player',
        constraint: 'player_slug_key',
        columns: ['slug'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'rating',
        constraint: 'rating_playerId_ratingSystemId_key',
        columns: ['playerId', 'ratingSystemId'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'ratingSystem',
        constraint: 'ratingSystem_slug_key',
        columns: ['slug'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'membership',
        index: 'membership_organizationId_idx_2e17ef41',
        columns: ['organizationId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'membership',
        index: 'membership_playerId_idx_710cf1aa',
        columns: ['playerId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'rating',
        index: 'rating_playerId_idx_710cf1aa',
        columns: ['playerId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'rating',
        index: 'rating_ratingSystemId_idx_efba41db',
        columns: ['ratingSystemId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'ratingSystem',
        index: 'ratingSystem_organizationId_idx_2e17ef41',
        columns: ['organizationId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'membership',
        foreignKey: {
          name: 'membership_playerId_fkey',
          columns: ['playerId'],
          references: { schema: 'public', table: 'player', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'membership',
        foreignKey: {
          name: 'membership_organizationId_fkey',
          columns: ['organizationId'],
          references: { schema: 'public', table: 'organization', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'rating',
        foreignKey: {
          name: 'rating_playerId_fkey',
          columns: ['playerId'],
          references: { schema: 'public', table: 'player', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'rating',
        foreignKey: {
          name: 'rating_ratingSystemId_fkey',
          columns: ['ratingSystemId'],
          references: { schema: 'public', table: 'ratingSystem', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'ratingSystem',
        foreignKey: {
          name: 'ratingSystem_organizationId_fkey',
          columns: ['organizationId'],
          references: { schema: 'public', table: 'organization', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
