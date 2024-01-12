import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { JwtUserPayload } from './interface/auth-jwt.interface';
import { User } from '../users/schema/users.schema';
import { LoginArgDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async login(userArg: LoginArgDto): Promise<any> {

        const user = await this.usersService.findByUsername(userArg.username) as User;

        if (!user) {
            throw new NotFoundException({ messsage: "Usuário não encontrado!" })
        }

        if (user?.password !== userArg.password) {
            throw new UnauthorizedException({ message: "Acesso não autorizado! Senha inválida!" });
        }

        const payload: JwtUserPayload = {
            id: user.id,
            username: user.username
        }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
