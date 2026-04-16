import { Injectable } from "@nestjs/common";
import * as bcrupt from 'bcrypt';

@Injectable()
export class Bcrypt {

    async criptografarSenha(senha: string): Promise<string> {

        let saltos: number = 10;
        return await bcrupt.hash(senha, saltos);
    }

    async compararSenha(senhaDigitada: string, senhabanco: string): Promise<boolean> {
        return await bcrupt.compare(senhaDigitada, senhabanco);
    }
}