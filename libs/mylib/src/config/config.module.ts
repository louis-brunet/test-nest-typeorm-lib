import { FactoryProvider, Module } from '@nestjs/common';

import { Env } from './env';

import { configureDatabase } from './namespaces';

export const DATABASE_CONFIG = Symbol('config.database');

const namespaces: FactoryProvider[] = [
  {
    provide: DATABASE_CONFIG,
    inject: [Env],
    useFactory: configureDatabase,
  },
];

@Module({
  providers: [
    {
      provide: Env,
      useFactory: Env.initialize,
    },
    ...namespaces,
  ],
  exports: [...namespaces],
})
export class ConfigModule {}
