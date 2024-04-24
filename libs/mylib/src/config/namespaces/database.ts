import * as yup from 'yup';

import { IDatabaseConfig } from '#infra/database';

import { Env } from '../env';

export async function configureDatabase(env: Env): Promise<IDatabaseConfig> {
  const config = await env.validate({
    // DATABASE_HOST: yup.string().required(),
    // DATABASE_NAME: yup.string().required(),
    // DATABASE_USER: yup.string().required(),
    // DATABASE_PASSWORD: yup.string().required(),
    DATABASE_PORT: yup.number().required(),
    DATABASE_URL_READONLY: yup.string().optional(),
    DATABASE_MIGRATIONS_RUN: yup.boolean().default(false),
    DATABASE_RETRY_ATTEMPTS: yup.number().default(3),
  });

  return {
    // databaseHost: config.DATABASE_HOST,
    // databaseName: config.DATABASE_NAME,
    // databaseUser: config.DATABASE_USER,
    // databasePassword: config.DATABASE_PASSWORD,
    databasePort: config.DATABASE_PORT,
    connectionUrlReadonly: config.DATABASE_URL_READONLY,
    migrationsRun: config.DATABASE_MIGRATIONS_RUN,
    retryAttempts: config.DATABASE_RETRY_ATTEMPTS,
  };
}
