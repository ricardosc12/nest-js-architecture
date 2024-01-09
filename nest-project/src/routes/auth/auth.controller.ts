import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginArgDto } from './dto/auth-login.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: LoginArgDto) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @UseGuards(AuthGuard)
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
