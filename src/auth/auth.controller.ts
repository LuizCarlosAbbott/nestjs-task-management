import { Controller, Post, Body } from '@nestjs/common';
import { AuthCredentialsDTO } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  singUp(@Body() authCredentialsDto: AuthCredentialsDTO): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }
}
