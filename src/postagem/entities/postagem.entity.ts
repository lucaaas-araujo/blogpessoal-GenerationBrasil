import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'tb_postagem'}) // É como se estivessemos criando a tabela no sql, mas aqui

export class Postagem {

  @PrimaryGeneratedColumn() // Cria uma chave primaria e auto incrementável
  id!: number;

  @IsNotEmpty() // Validação para não permitir que o campo seja vazio
  @Column({length: 100, nullable: false}) // Cria uma coluna do tipo varchar(100) e não permite nulo
  titulo!: string;


    @IsNotEmpty() // Validação para não permitir que o campo seja vazio
    @Column({length: 1000, nullable: false})
  texto!: string;

  @UpdateDateColumn() // Cria uma coluna chamada date que é uma atualização da postagem
  data!: Date;
}
