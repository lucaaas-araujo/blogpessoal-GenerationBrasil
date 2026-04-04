import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controllers/postagem.controller";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { TemaModule } from "../tema/tema.module";
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule], // Importa o Postagem como uma entidade do TypeOrmModule
    providers: [PostagemService], // Define o PostagemService como um provedor
    controllers: [PostagemController], // Define o PostagemController como um controlador
    exports: [TypeOrmModule] // Exporta o TypeOrmModule para que possa ser usado em outros módulos
})
export class PostagemModule {}