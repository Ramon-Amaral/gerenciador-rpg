import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonagensModule } from './personagens/personagens.module';

@Module({
  imports: [PersonagensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
