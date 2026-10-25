import { Module } from '@nestjs/common';
import { PersonagensService } from './personagens.service';
import { PersonagensController } from './personagens.controller';
import { PrismaService } from '../prisma.service'; 

@Module({
  controllers: [PersonagensController],
  providers: [PersonagensService, PrismaService], 
})
export class PersonagensModule {}