import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa a fiscalização dos DTOs em toda a aplicação
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 1. Descarta campos extras que não estão no DTO
      forbidNonWhitelisted: true, // 2. Devolve erro 400 se enviarem campos desconhecidos
      transform: true, // 3. Converte os dados automaticamente para os tipos do DTO
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();