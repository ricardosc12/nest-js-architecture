import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginArgDto } from './dto/auth-login.dto';
import { JwtAuthGuard } from '../common/auth/jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() user: LoginArgDto) {
        return this.authService.login(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    profile(@Request() req) {
        return req.user
    }

    @Get('profile_unsecured')
    profile_unsecured() {
        return {
            id: "unsecured",
            username: "unsecured"
        }
    }

}
