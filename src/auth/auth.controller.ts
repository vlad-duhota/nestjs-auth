import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	Req,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { AuthDto } from './auth.dto'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './jwt.guard'

@Controller('auth')
export class AuthController {
	constructor(private readonly AuthService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {
		return this.AuthService.login(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('register')
	async register(@Body() dto: AuthDto) {
		return this.AuthService.register(dto)
	}

	@UseGuards(JwtAuthGuard)
	@HttpCode(200)
	@Get('profile')
	async profile(@Req() req) {
		return this.AuthService.profile(req.user)
	}
}
