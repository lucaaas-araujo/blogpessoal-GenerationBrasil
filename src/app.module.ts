import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo da base de dados
      host: 'localhost', // Host do database
      port: 3306, // Porta do database (porta de acesso)
      username: 'root', // nome de usuario do database
      password: 'root', // denha do database
      database: 'db_blogpessoal', // nome do database
      entities: [Postagem],
      synchronize: true,
    }),
    PostagemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
