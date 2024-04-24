import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ConfigModule, DATABASE_CONFIG } from '#config';
import { IDatabaseConfig, configureDataSource } from './helpers/configure';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [DATABASE_CONFIG],
      useFactory(config: IDatabaseConfig): TypeOrmModuleOptions {
        const datasourceConfig = configureDataSource(config);

        return {
          ...datasourceConfig,
          retryAttempts: config.retryAttempts,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
