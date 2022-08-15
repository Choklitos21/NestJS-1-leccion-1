import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlackCatsController } from './black-cats/black-cats.controller';

@Module({
  imports: [],
  controllers: [AppController, BlackCatsController],
  providers: [AppService],
})
export class AppModule {}
