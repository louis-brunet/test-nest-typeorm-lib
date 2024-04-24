import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';

import { ConfigModule, DATABASE_CONFIG } from '#config';
import { IDatabaseConfig, configureDataSource } from '#infra/database';

async function getDatasource() {
  const app = await NestFactory.create(ConfigModule);
  const config = app.get<IDatabaseConfig>(DATABASE_CONFIG);
  return new DataSource(configureDataSource(config));
}

export default getDatasource();
