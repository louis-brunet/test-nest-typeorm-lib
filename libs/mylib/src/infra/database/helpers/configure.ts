import { resolve } from 'path';
import { DataSourceOptions } from 'typeorm';

export interface IDatabaseConfig {
  databasePort: number;
  connectionUrlReadonly?: string;
  migrationsRun?: boolean;
  retryAttempts?: number;
}

export function configureDataSource(config: IDatabaseConfig): DataSourceOptions {
  const basePath = resolve(__dirname, '../../../model');

  return {
    type: 'postgres' as const,
    // host: config.databaseHost,
    // database: config.databaseName,
    // username: config.databaseUser,
    // password: config.databasePassword,
    port: config.databasePort,
    entities: [basePath + '/**/*.model.{js,ts}'],
    migrations: [resolve(__dirname, '../migrations/*.{js,ts}')],
    migrationsRun: config.migrationsRun,
    migrationsTransactionMode: 'each',
    relationLoadStrategy: 'query',
  };
}
