import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';

export const jwtConstant = "OANSOCOON!@NO!@#ON!@#ONN"

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstant, // TORNAR SEGURA, ENV
      signOptions: {
        expiresIn: '30 days'
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthService]
})
export class AuthModule { }
