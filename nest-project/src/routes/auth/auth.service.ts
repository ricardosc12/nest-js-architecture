import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/users.interface';
import { JwtService } from '@nestjs/jwt';
import { JwtUserPayload } from './interface/auth-jwt.interface';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string): Promise<any> {

        const user = await this.usersService.findByUsername(username) as User;

        if (!user) {
            throw new NotFoundException({ messsage: "Usuário não encontrado!" })
        }

        if (user?.password !== pass) {
            throw new UnauthorizedException({ message: "Acesso não autorizado! Senha inválida!" });
        }

        const payload: JwtUserPayload = {
            id: user.id,
            username: user.username
        }

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
