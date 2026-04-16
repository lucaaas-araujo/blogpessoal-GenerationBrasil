import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Configuração da aplicação nest, cria a aplicação


  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Lucas Araujo","https://github.com/lucaaas-araujo","lucasaraujofernandes.dev@hotmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00'; // Configuração do timezone

  app.useGlobalPipes(new ValidationPipe()); // Configuração de validação de dados de entrada

  app.enableCors(); // Configuração de cors para permitir requisições de outras origens

  await app.listen(process.env.PORT ?? 4000); // execução da aplicação nest, configuração da porta de execução
}
bootstrap();
