import { Module } from '@nestjs/common';
import { DatabaseModule } from 'mylib';

@Module({
  imports: [DatabaseModule],
})
export class AppModule {}
